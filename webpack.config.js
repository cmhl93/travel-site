const path = require('path');
 
module.exports = {
  entry: {
	  App: "./app/assets/scripts/app.js",
	  Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.join(__dirname, "/app/temp/scripts"),
    filename: '[name].js'
  },
  module: {
	  loaders: [
		{
		//install babel
		  loaders: 'babel-loader',
		  query: {
			presets: ['es2015']  
		  },
		  test: /\.js$/,
		  exclude: /node_modules/
		}
	  ]
  }
};