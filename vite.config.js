import autoprefixer from "autoprefixer"
import { resolve } from "path"
import { defineConfig } from "vite"
import handlebars from "vite-plugin-handlebars"
import stylelint from "vite-plugin-stylelint"
import createSvgSpritePlugin from "vite-plugin-svg-spriter"

const SVG_FOLDER_PATH = resolve(__dirname, "assets", "icons")

export default defineConfig({
  plugins: [
    stylelint({ fix: true }),
    createSvgSpritePlugin({ svgFolder: SVG_FOLDER_PATH }),
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  build: {
    rollupOptions: {
      input: [
        resolve(__dirname, "index.html"),
        resolve(__dirname, "not-found.html"),
        resolve(__dirname, "server-error.html"),
      ],
    },
  },
})
