import { defineConfig } from "astro/config";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  site: "https://example.com",
  integrations: [icon(), sitemap()],
  output: "hybrid",
  adapter: netlify()
});