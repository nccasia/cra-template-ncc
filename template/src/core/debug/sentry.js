import * as Sentry from "@sentry/browser"
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://9d22164fea804c33b9f4b2588c934d12@o525738.ingest.sentry.io/5640396",
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

export default Sentry
