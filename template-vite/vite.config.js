const path = require("path");

const base = "./src/web";

export default {
    root: `${base}`,
    outDir: `${__dirname}/app/web`,
    assetsDir: "./assets",
    ssr: false,
    alias: {
        "/@/": path.resolve(__dirname, `${base}/src`),
    },
    port: 3333,
};
