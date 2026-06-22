import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: [
        "rakeshsirvi.site",
        "www.rakeshsirvi.site",
      ],
    },
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
