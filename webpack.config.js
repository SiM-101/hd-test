const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
	const outFolder = env.mode === "development" ? "dist" : "docs";
	const rootPath = path.resolve(__dirname);
	const distPath = path.resolve(rootPath, outFolder);

	return {
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".scss"],
		},
		entry: [path.resolve(rootPath, "src", "index.tsx")],
		devtool: env.mode === "development" ? "source-map" : false,
		mode: env.mode,
		module: {
			rules: [
				{
					test: /\.ts(x?)$/,
					exclude: /node_modules/,
					use: [{ loader: "ts-loader" }],
				},
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: ["style-loader", "css-loader", "sass-loader"],
				},
			],
		},
		output: {
			path: distPath,
			publicPath: "/",
			filename: "[name].js",
		},
		devServer: {
			contentBase: distPath,
			liveReload: true,
			port: 9000,
			historyApiFallback: true,
			writeToDisk: true,
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(rootPath, "index.html"),
			}),
		],
	};
};
