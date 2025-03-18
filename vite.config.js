import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import path from "path";
import { globSync } from "glob";

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {},
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: globSync("./src/*.html").reduce((acc, file) => {
          acc[path.basename(file, ".html")] = file;
          return acc;
        }, {}),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: "[name].js",
        },
      },
      outDir: "../dist",
    },
    plugins: [injectHTML(), FullReload(["./src/**/*.html"])],
  };
});
