# Use the Node.js base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the entire monorepo context
COPY . .

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies in the workspace
RUN pnpm install

# Expose the port
EXPOSE 3000

# Command to start the server
CMD ["pnpm", "run", "dev"]