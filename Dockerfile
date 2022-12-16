#
# Build stage
#
FROM node:latest AS builder

# Create app directory
WORKDIR /app

COPY . .

# Install app dependencies
RUN npm i pnpm -g
RUN pnpm install

# Build app
RUN pnpm build

#
# Production stage
#
FROM node:current-alpine

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .
COPY public public
COPY next.config.js next.config.js
# Nextjs build artifacts from build stage
COPY --from=builder /app/.next .next

RUN npm i pnpm -g
RUN pnpm install --prod

CMD ["pnpm", "start"]