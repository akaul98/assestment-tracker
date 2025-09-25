# --- Build & Test Stage ---
FROM oven/bun:1 AS builder

# Set working directory
WORKDIR /app

# Copy dependency files
# The * makes bun.lockb optional (avoids COPY error if not committed yet)
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install

# Copy the rest of the source code
COPY . .


# Build Next.js app
RUN bun run build


# --- Production Stage ---
FROM oven/bun:1 AS runner

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/bun.lockb* ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose Next.js default port
EXPOSE 3000

CMD ["bun", "run", "start"]
