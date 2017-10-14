module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/dist',
		// publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
    rules: [
      {
        loaders: ['babel-loader'],
        exclude: /node_modules/,
        test: /\.js$/
			},
			{
				loaders: ['style-loader', 'css-loader', 'sass-loader'],
				test: /\.scss$/
			},
			{
				loaders: ['url-loader?limit=10000&name=img/[name].[ext]'],
				test: /\.(jpe?g|png|gif|svg)$/
			}
    ]
	},
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: './src/views'
	}
};