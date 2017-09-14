module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};
