var webpack = require('webpack');
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './public',
    filename: 'bundle.jsx'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          compact: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', 'jsx']
  },
  plugins: [
    // alternatively EnvironmentPlugin will be able to change this automatically
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      VERSION: JSON.stringify("5fa3b9"),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: "1+1",
      "typeof window": JSON.stringify("object")
    })
  ]
};
