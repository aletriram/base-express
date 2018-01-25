const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
	filename: "../css/main.css",
});

module.exports = {
	entry: ['./src/js/main.ts', './src/scss/main.scss'],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [{
						loader: 'css-loader', // translates CSS into CommonJS modules
					}, {
						loader: 'sass-loader' // compiles Sass to CSS
					}],
					fallback: 'style-loader', // inject CSS to page
				}),
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', 'scss']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/js')
	},
	plugins: [
		extractSass
	]
};

// module.exports = {
//	 entry: './src/js/main.ts',
//	 output: {
//		 filename: './public/js/bundle.js'
//	 }
// };