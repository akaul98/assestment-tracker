# Stage 1: Build stage
FROM oven/bun:1-alpine AS builder

WORKDIR /usr/src/app

# Copy package.json and bun.lockb to leverage Docker's build cache
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build your application if necessary (e.g., if you have a build step)
# RUN bun run build

# Stage 2: Production stage
FROM oven/bun:1-alpine AS runner

WORKDIR /usr/src/app

# Copy only necessary files from the builder stage
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/bun.lockb* ./bun.lockb*
COPY --from=builder /usr/src/app/src ./src

# Expose the port your Bun application listens on
EXPOSE 3000

# Command to run your Bun application
CMD ["bun", "run", "start"]