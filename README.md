# Hexwanderer Starter Kit

This is a starter kit for building a full stack web application with TypeScript, React, and Node.js.

## Tech Stack

- React frontend built with Vite and Tanstack Router
    - Tanstack Query for data fetching
- Elysia.js backend
    - Drizzle ORM for database access
- PostgreSQL database
- Better-Auth authentication
- Tailwind CSS for styling
- Biome.js for formatting and linting

## Turbo

Turborepo is used to manage the monorepo. It is a CLI tool that helps you manage multiple packages in a single repository.

However, I haven't figured out how to use `turbo run`, as Elysia both exports and runs, which confuses Turbo a little since it thinks it's only a dependency on client.

In the meantime, `turbo build` works, and `docker-compose up --build` will build and run the entire stack for production deployments.