# Use Node.js 20 as the base image
FROM node:23-alpine

# Set the base working directory
WORKDIR /app

# Copy only the root-level package files to install workspace dependencies
COPY package.json ./

# Copy the rest of the monorepo into the container
COPY . .

# Install pnpm globally
RUN npm install -g pnpm

# Install workspace dependencies
RUN pnpm install

# Set the working directory to the server package
WORKDIR /app/apps/server

# Expose the port the application will run on
EXPOSE 3000

# Start the application
CMD ["pnpm", "run", "dev"]