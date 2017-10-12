module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
    rules: [
      {
        use: ['babel-loader'],
        exclude: /node_modules/,
        test: /\.js$/
      }
    ]
	},
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: './src/views'
	}
};