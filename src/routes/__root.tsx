import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

import { ServerCrash, ArrowLeft, RefreshCcw } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-2xl text-center">

        <ServerCrash className="mx-auto h-20 w-20 text-[var(--cyan)]" />

        <h1 className="mt-6 text-7xl font-bold gradient-text">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-foreground">
          Deployment Failed 😅
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Looks like this route isn't running in production.
          The requested resource could not be found.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--cyan)] to-[var(--violet)] px-5 py-3 font-medium text-background transition-transform hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium hover:bg-white/10"
          >
            <RefreshCcw className="h-4 w-4" />
            Retry Request
          </button>

        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 font-mono text-sm text-muted-foreground">
          <div>$ curl https://portfolio.rakesh.dev/missing-page</div>
          <div className="mt-2 text-red-400">
            Error 404: Resource not found
          </div>
        </div>

      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
  { charSet: "utf-8" },

  {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
  },

  {
    title: "Rakesh Sirvi N | DevOps Engineer & AWS Cloud Enthusiast",
  },

  {
    name: "description",
    content:
      "Junior DevOps Engineer with hands-on experience in AWS, Linux, Docker, Jenkins, Kubernetes, CI/CD, Monitoring, and Production Operations.",
  },

  {
    name: "keywords",
    content:
      "DevOps Engineer, AWS, Cloud Engineer, Linux, Docker, Kubernetes, Jenkins, Prometheus, Grafana, FastAPI, CI/CD",
  },

  {
    name: "author",
    content: "Rakesh Sirvi N",
  },

  {
    property: "og:title",
    content: "Rakesh Sirvi N | DevOps Engineer",
  },

  {
    property: "og:description",
    content:
      "Portfolio showcasing AWS, DevOps, Cloud Infrastructure, Monitoring, CI/CD, and Production Operations.",
  },

  {
    property: "og:type",
    content: "website",
  },

  {
    property: "og:image",
    content: "/og-image.png",
  },

  {
    name: "twitter:card",
    content: "summary_large_image",
  },

  {
    name: "twitter:title",
    content: "Rakesh Sirvi N | DevOps Engineer",
  },

  {
    name: "twitter:description",
    content:
      "AWS • Linux • Docker • Kubernetes • CI/CD • Monitoring",
  },
],
    links: [
      {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
