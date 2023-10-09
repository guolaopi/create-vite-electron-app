import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const path = require("path");
const base = "./src/web";

export default defineConfig({
    root: `${base}`,
    resolve: {
        alias: {
            "/@/": path.resolve(__dirname, `${base}/src`),
        },
    },
    build: {
        outDir: `${__dirname}/app/web`,
        assetsDir: "./assets",
    },
    server: {
        port: 3333,
    },
    plugins: [vue()],
});
