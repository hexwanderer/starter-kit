# Starter Kit Repository

Welcome to the **Starter Kit Repository**! This project is designed to provide developers with a robust and modular framework for building scalable, modern applications. With a focus on flexibility and maintainability, this repository combines a multi-package structure to streamline development across client, server, and database layers.

---

## Getting Started

Follow these steps to get your environment up and running:

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16 or later)
- **pnpm** (v8 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies for all packages:

   ```bash
   pnpm install
   ```

3. Copy the `.env.local` file into a `.env` and fill with your variables.

4. Head into the `packages/database` folder.

5. Run the migration with drizzle-kit.

  ```
  pnpx drizzle-kit push
  ```

6. Head into the `packages/server` folder.

7. Build the server with `pnpm run build`, then start the server with `pnpm run start`.

8. Open a new tab/window and navigate to `packages/client` folder.

9. Start the client with `pnpm run dev`.

---

## Directory Structure

The repository follows a modular architecture:

```
/packages
  /client        # React-based frontend
    /public      # Static assets
    /src         # Main client code
  /server        # Backend server
    /src         # Server-side logic
  /database      # Database schema and handlers
```

---

## TODOs

- [ ] Properly document process for adding new packages.
- [ ] Add CORS to server.
- [ ] Verify server-client communication, particularly over Docker.
- [ ] Add auth with Better Auth.
