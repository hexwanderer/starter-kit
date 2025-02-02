/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root"
import { Route as AuthImport } from "./routes/auth"
import { Route as LandingImport } from "./routes/_landing"
import { Route as AuthenticatedImport } from "./routes/_authenticated"
import { Route as LandingIndexImport } from "./routes/_landing/index"
import { Route as LandingFeaturesImport } from "./routes/_landing/features"
import { Route as LandingAboutImport } from "./routes/_landing/about"
import { Route as AuthenticatedDashboardImport } from "./routes/_authenticated/dashboard"
import { Route as AuthenticatedSettingsIndexImport } from "./routes/_authenticated/settings/index"

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => rootRoute,
} as any)

const LandingRoute = LandingImport.update({
  id: "/_landing",
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: "/_authenticated",
  getParentRoute: () => rootRoute,
} as any)

const LandingIndexRoute = LandingIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => LandingRoute,
} as any)

const LandingFeaturesRoute = LandingFeaturesImport.update({
  id: "/features",
  path: "/features",
  getParentRoute: () => LandingRoute,
} as any)

const LandingAboutRoute = LandingAboutImport.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => LandingRoute,
} as any)

const AuthenticatedDashboardRoute = AuthenticatedDashboardImport.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedSettingsIndexRoute = AuthenticatedSettingsIndexImport.update(
  {
    id: "/settings/",
    path: "/settings/",
    getParentRoute: () => AuthenticatedRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_authenticated": {
      id: "/_authenticated"
      path: ""
      fullPath: ""
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    "/_landing": {
      id: "/_landing"
      path: ""
      fullPath: ""
      preLoaderRoute: typeof LandingImport
      parentRoute: typeof rootRoute
    }
    "/auth": {
      id: "/auth"
      path: "/auth"
      fullPath: "/auth"
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    "/_authenticated/dashboard": {
      id: "/_authenticated/dashboard"
      path: "/dashboard"
      fullPath: "/dashboard"
      preLoaderRoute: typeof AuthenticatedDashboardImport
      parentRoute: typeof AuthenticatedImport
    }
    "/_landing/about": {
      id: "/_landing/about"
      path: "/about"
      fullPath: "/about"
      preLoaderRoute: typeof LandingAboutImport
      parentRoute: typeof LandingImport
    }
    "/_landing/features": {
      id: "/_landing/features"
      path: "/features"
      fullPath: "/features"
      preLoaderRoute: typeof LandingFeaturesImport
      parentRoute: typeof LandingImport
    }
    "/_landing/": {
      id: "/_landing/"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof LandingIndexImport
      parentRoute: typeof LandingImport
    }
    "/_authenticated/settings/": {
      id: "/_authenticated/settings/"
      path: "/settings"
      fullPath: "/settings"
      preLoaderRoute: typeof AuthenticatedSettingsIndexImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedDashboardRoute: typeof AuthenticatedDashboardRoute
  AuthenticatedSettingsIndexRoute: typeof AuthenticatedSettingsIndexRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedDashboardRoute: AuthenticatedDashboardRoute,
  AuthenticatedSettingsIndexRoute: AuthenticatedSettingsIndexRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

interface LandingRouteChildren {
  LandingAboutRoute: typeof LandingAboutRoute
  LandingFeaturesRoute: typeof LandingFeaturesRoute
  LandingIndexRoute: typeof LandingIndexRoute
}

const LandingRouteChildren: LandingRouteChildren = {
  LandingAboutRoute: LandingAboutRoute,
  LandingFeaturesRoute: LandingFeaturesRoute,
  LandingIndexRoute: LandingIndexRoute,
}

const LandingRouteWithChildren =
  LandingRoute._addFileChildren(LandingRouteChildren)

export interface FileRoutesByFullPath {
  "": typeof LandingRouteWithChildren
  "/auth": typeof AuthRoute
  "/dashboard": typeof AuthenticatedDashboardRoute
  "/about": typeof LandingAboutRoute
  "/features": typeof LandingFeaturesRoute
  "/": typeof LandingIndexRoute
  "/settings": typeof AuthenticatedSettingsIndexRoute
}

export interface FileRoutesByTo {
  "": typeof AuthenticatedRouteWithChildren
  "/auth": typeof AuthRoute
  "/dashboard": typeof AuthenticatedDashboardRoute
  "/about": typeof LandingAboutRoute
  "/features": typeof LandingFeaturesRoute
  "/": typeof LandingIndexRoute
  "/settings": typeof AuthenticatedSettingsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  "/_authenticated": typeof AuthenticatedRouteWithChildren
  "/_landing": typeof LandingRouteWithChildren
  "/auth": typeof AuthRoute
  "/_authenticated/dashboard": typeof AuthenticatedDashboardRoute
  "/_landing/about": typeof LandingAboutRoute
  "/_landing/features": typeof LandingFeaturesRoute
  "/_landing/": typeof LandingIndexRoute
  "/_authenticated/settings/": typeof AuthenticatedSettingsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ""
    | "/auth"
    | "/dashboard"
    | "/about"
    | "/features"
    | "/"
    | "/settings"
  fileRoutesByTo: FileRoutesByTo
  to: "" | "/auth" | "/dashboard" | "/about" | "/features" | "/" | "/settings"
  id:
    | "__root__"
    | "/_authenticated"
    | "/_landing"
    | "/auth"
    | "/_authenticated/dashboard"
    | "/_landing/about"
    | "/_landing/features"
    | "/_landing/"
    | "/_authenticated/settings/"
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
  LandingRoute: typeof LandingRouteWithChildren
  AuthRoute: typeof AuthRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  LandingRoute: LandingRouteWithChildren,
  AuthRoute: AuthRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/_landing",
        "/auth"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/dashboard",
        "/_authenticated/settings/"
      ]
    },
    "/_landing": {
      "filePath": "_landing.tsx",
      "children": [
        "/_landing/about",
        "/_landing/features",
        "/_landing/"
      ]
    },
    "/auth": {
      "filePath": "auth.tsx"
    },
    "/_authenticated/dashboard": {
      "filePath": "_authenticated/dashboard.tsx",
      "parent": "/_authenticated"
    },
    "/_landing/about": {
      "filePath": "_landing/about.tsx",
      "parent": "/_landing"
    },
    "/_landing/features": {
      "filePath": "_landing/features.tsx",
      "parent": "/_landing"
    },
    "/_landing/": {
      "filePath": "_landing/index.tsx",
      "parent": "/_landing"
    },
    "/_authenticated/settings/": {
      "filePath": "_authenticated/settings/index.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
