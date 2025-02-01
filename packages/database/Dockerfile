# Use the Node.js base image
FROM node:23-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the entire monorepo context
COPY . .

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies in the workspace
RUN pnpm install
