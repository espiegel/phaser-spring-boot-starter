var path = require("path");
var webpack = require("webpack");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

// Phaser webpack config
var phaserModule = path.join(__dirname, "/node_modules/phaser-ce/");
var phaser = path.join(phaserModule, "build/custom/phaser-split.js");
var pixi = path.join(phaserModule, "build/custom/pixi.js");
var p2 = path.join(phaserModule, "build/custom/p2.js");

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || "true"))
});

module.exports = {
    entry: {
        app: [
            "babel-polyfill",
            path.resolve(__dirname, "src/main/phaser/main.js")
        ],
        vendor: ["pixi", "p2", "phaser", "webfontloader"]
    },
    devtool: "cheap-source-map",
    output: {
        pathinfo: true,
        path: path.resolve(__dirname, "src/main/resources/static"),
        publicPath: "/",
        filename: "bundle.js"
    },
    watch: true,
    plugins: [
        definePlugin,
        new CleanWebpackPlugin(["src/main/resources/static"]),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"/* chunkName= */,
            filename: "vendor.bundle.js"/* filename= */
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            inject: true
        }),
        new BrowserSyncPlugin({
            host: process.env.IP || "localhost",
            port: process.env.PORT || 3000,
            server: {
                baseDir: ["src/main/resources/static"]
            }
        }),
        new FriendlyErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "eslint-loader",
                enforce: "pre",
                include: path.join(__dirname, "src/main/phaser")
            },
            {test: /\.js$/, use: ["babel-loader"], include: path.join(__dirname, "src/main/phaser")},
            {test: /pixi\.js/, use: ["expose-loader?PIXI"]},
            {test: /phaser-split\.js$/, use: ["expose-loader?Phaser"]},
            {test: /p2\.js/, use: ["expose-loader?p2"]},
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "img/[hash].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    },
    resolve: {
        alias: {
            "phaser": phaser,
            "pixi": pixi,
            "p2": p2
        }
    }
};
