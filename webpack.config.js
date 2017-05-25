const path = require('path');
 
module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    path: path.join(__dirname, "/app/temp/scripts"),
    filename: 'app.js'
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