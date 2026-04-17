FROM node:24-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@10.32.1

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Expose port for Next.js dev server
EXPOSE 3000

# Run Next.js dev server with turbopack
CMD ["pnpm", "dev"]
