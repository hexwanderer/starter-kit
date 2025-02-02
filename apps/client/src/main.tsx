import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./theme.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AuthProvider } from "@/hooks/use-auth";
import { ServerStateProvider } from "@/hooks/use-server";
import { buildProvidersTree } from "@/lib/providersTree";
import { treaty } from "@elysiajs/eden";
import type { App } from "@repo/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { organization } from "better-auth/plugins";
import { createAuthClient } from "better-auth/client";
import { ac, admin, member, owner } from "@repo/auth";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    auth: undefined!,
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const serverClient = treaty<App>("/api");
const queryClient = new QueryClient();
const authClient = createAuthClient({
  baseURL: "",
  plugins: [
    organization({
      ac: ac,
      roles: {
        owner,
        admin,
        member,
      },
    }),
  ],
});

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("No root element found");

const ProviderTree = buildProvidersTree([
  [QueryClientProvider, { client: queryClient }],
  [ServerStateProvider, { serverClient }],
  [AuthProvider, { authClient }],
  [SidebarProvider, {}],
  [ThemeProvider, {}],
]);

function InnerApp() {
  return <RouterProvider router={router} context={{ authClient }} />;
}

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ProviderTree>
        <InnerApp />
      </ProviderTree>
    </StrictMode>,
  );
}
