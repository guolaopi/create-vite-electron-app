require("babel-core/register");
const path = require("path");

const src = path.resolve(__dirname, ".");
const dist = path.resolve(__dirname, "app");

module.exports = {
    entry: `${src}/main.js`,
    output: {
        path: dist,
        filename: "[name].js",
    },
    module: {
        rules: [],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    target: "electron",
    plugins: [],
};
