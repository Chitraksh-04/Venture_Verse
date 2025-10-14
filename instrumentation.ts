import * as Sentry from "@sentry/nextjs"

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Server-side Sentry initialization (was in sentry.server.config.ts)
    Sentry.init({
      dsn: "https://1c984c8324a9109aa8fb2092fca60110@o4508267791187968.ingest.us.sentry.io/4508267792302080",
      tracesSampleRate: 1,
      debug: false,
    })
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    // Edge runtime Sentry initialization (was in sentry.edge.config.ts)
    Sentry.init({
      dsn: "https://1c984c8324a9109aa8fb2092fca60110@o4508267791187968.ingest.us.sentry.io/4508267792302080",
      tracesSampleRate: 1,
      debug: false,
    })
  }
  
  if (process.env.NEXT_RUNTIME === "browser") {
    // Client-side Sentry initialization (was in sentry.client.config.ts)
    Sentry.init({
      dsn: "https://1c984c8324a9109aa8fb2092fca60110@o4508267791187968.ingest.us.sentry.io/4508267792302080",
      integrations: [
        Sentry.replayIntegration(),
      ],
      tracesSampleRate: 1,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      debug: false,
    })
  }
}

export const onRequestError = Sentry.captureRequestError