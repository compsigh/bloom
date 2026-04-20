import { Client } from "@notionhq/client"

const secret = process.env.NOTION_INTEGRATION_SECRET
const registrantsDbId = process.env.NOTION_REGISTRANTS_DATABASE_ID
const memberListDbId = process.env.NOTION_MEMBER_LIST_DATABASE_ID

if (!secret) throw new Error("Missing env var NOTION_INTEGRATION_SECRET")
if (!registrantsDbId)
  throw new Error("Missing env var NOTION_REGISTRANTS_DATABASE_ID")
if (!memberListDbId)
  throw new Error("Missing env var NOTION_MEMBER_LIST_DATABASE_ID")

const notion = new Client({ auth: secret })

export type RegistrantInput = {
  googleId: string
  firstName: string
  lastName: string
  email: string
}

const dataSourceCache = new Map<string, string>()

/**
 * Resolves a database ID to its primary data source ID, as required by the
 * new Notion API (2025-09-03). Memoizes per database.
 */
async function getDataSourceId(databaseId: string): Promise<string> {
  const cached = dataSourceCache.get(databaseId)
  if (cached) return cached

  const db = await notion.databases.retrieve({ database_id: databaseId })
  if (!("data_sources" in db))
    throw new Error(`Database ${databaseId} returned a partial response`)
  const first = db.data_sources[0]
  if (!first)
    throw new Error(`Database ${databaseId} has no data sources attached`)
  dataSourceCache.set(databaseId, first.id)
  return first.id
}

/**
 * Returns the Notion page ID of the existing Registrant with this Google ID,
 * or `null` if none exists.
 */
async function findRegistrantByGoogleId(
  googleId: string
): Promise<string | null> {
  const dataSourceId = await getDataSourceId(registrantsDbId!)
  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      property: "Google ID",
      title: { equals: googleId }
    },
    page_size: 1
  })
  return response.results[0]?.id ?? null
}

/**
 * Finds a Member List row whose Email property exactly matches.
 * Returns the Notion page ID, or `null` if not found.
 */
async function findMemberByEmail(email: string): Promise<string | null> {
  const dataSourceId = await getDataSourceId(memberListDbId!)
  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      property: "Email",
      email: { equals: email }
    },
    page_size: 1
  })
  return response.results[0]?.id ?? null
}

/**
 * Finds a Member List row whose Name (title) property exactly matches.
 * Returns the Notion page ID, or `null` if not found.
 */
async function findMemberByName(fullName: string): Promise<string | null> {
  const dataSourceId = await getDataSourceId(memberListDbId!)
  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      property: "Name",
      title: { equals: fullName }
    },
    page_size: 1
  })
  return response.results[0]?.id ?? null
}

/**
 * Creates a new Registrant entry, linking to a matching Member List row if
 * found (exact email match first, then full-name fallback; first result wins).
 */
async function createRegistrant(input: RegistrantInput): Promise<string> {
  const fullName = `${input.firstName} ${input.lastName}`.trim()
  const memberId =
    (await findMemberByEmail(input.email)) ?? (await findMemberByName(fullName))

  const dataSourceId = await getDataSourceId(registrantsDbId!)
  const page = await notion.pages.create({
    parent: { data_source_id: dataSourceId },
    properties: {
      "Google ID": {
        title: [{ type: "text", text: { content: input.googleId } }]
      },
      "First name": {
        rich_text: [{ type: "text", text: { content: input.firstName } }]
      },
      "Last name": {
        rich_text: [{ type: "text", text: { content: input.lastName } }]
      },
      Email: { email: input.email },
      Member: { relation: memberId ? [{ id: memberId }] : [] }
    }
  })
  return page.id
}

/**
 * Ensures there's a Registrant entry for this user, keyed by Google ID.
 * No-op if one exists; otherwise creates one with an optional Member relation.
 */
export async function syncRegistrant(input: RegistrantInput): Promise<void> {
  const existing = await findRegistrantByGoogleId(input.googleId)
  if (existing) return
  await createRegistrant(input)
}
