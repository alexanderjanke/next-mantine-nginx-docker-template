#
# Build stage
#
FROM node:latest AS builder

# Create app directory
WORKDIR /app

COPY . .

# Install app dependencies
RUN yarn install

# Build app
RUN yarn build

#
# Production stage
#
FROM node:current-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY public public
COPY next.config.js next.config.js
# Nextjs build artifacts from build stage
COPY --from=builder /app/.next .next

RUN yarn install --production

CMD ["yarn", "start"]