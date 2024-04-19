import { defineConfig } from 'astro/config';
import { fileURLToPath } from "url";
import { resolve, dirname, join } from "path";
// import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const src = resolve(__dirname, "src");


// https://astro.build/config
export default defineConfig({
    output: "hybrid",
    adapter: vercel(),
    integrations: [
        icon()
    ],

    vite: {
        resolve: {
            alias: {
                "$/": src,
                $styles: join(src, "styles"),
                $components: join(src, "components"),
                $layouts: join(src, "layouts"),
                $assets: join(src, "assets")
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "$styles/_vars.scss" as *;`
                }
            }
        }
    },
})
