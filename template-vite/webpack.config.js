const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const src = path.resolve(__dirname, "./src");
const dist = path.resolve(__dirname, "./app");

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
    target: "electron-main",
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                parallel: true,
                terserOptions: {
                    toplevel: true,
                    ie8: true,
                    safari10: true,
                },
            }),
        ],
    },
};
