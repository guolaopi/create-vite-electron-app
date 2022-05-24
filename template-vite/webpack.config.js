require("babel-core/register");
const path = require("path");

const src = path.resolve(__dirname, ".");
const dist = path.resolve(__dirname, "app");

module.exports = {
    entry: {
        main: `${src}/main.js`,
        preload: `${src}/renderer/preload.js`,
    },
    output: {
        path: dist,
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    target: "electron",
    plugins: [],
};
