import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site:"https://sudo-adduser-jordan.github.io",
    site:"/portfolio/",
    integrations: [tailwind()],
});
