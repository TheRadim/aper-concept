import { defineConfig } from "astro/config";
// Static build for GitHub Pages under /aper-concept/.
export default defineConfig({
  site: "https://theradim.github.io",
  base: "/aper-concept",
  output: "static",
  trailingSlash: "ignore",
  build: { assets: "assets", inlineStylesheets: "always" },
});
