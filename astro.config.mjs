import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mattcadena.com",
  // The S3 deploy workflow uploads from `out`, so build there instead of `dist`.
  outDir: "./out",
});
