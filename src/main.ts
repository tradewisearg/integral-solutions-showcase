import { hydrateStart } from "@tanstack/react-start/client";

// Provide a minimal SPA bootstrap object when the app is deployed as a static site
// and no server-side start hydration payload exists.
if (typeof window !== "undefined" && !(window as any).$_TSR) {
  (window as any).$_TSR = {
    initialized: false,
    buffer: [],
    router: {
      manifest: undefined,
      dehydratedData: undefined,
      matches: [],
      lastMatchId: undefined,
    },
  };
}

hydrateStart();
