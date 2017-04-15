var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './src/index.js',
    './src/style.css'
  ],
  
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  
  plugins: [HTMLWebpackPluginConfig],

  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  }
};
