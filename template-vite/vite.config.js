const path = require("path");

const base = "./web";

export default {
    root: `${base}`,
    outDir: `${__dirname}/app/dist`,
    entry: `${base}/src/main.js`,
    base: "./",
    assetsDir: "assets",
    ssr: false,
    alias: {
        "/@/": path.resolve(__dirname, `${base}/src`),
    },
    port: 3000,
};
