const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
	return{
		mode: env.mode,
		entry: path.resolve(__dirname, 'src', 'index.js'),
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'bundle.js',
			clean: true
		},
		plugins: [
			new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
			new webpack.ProgressPlugin(),
		],
	}
}