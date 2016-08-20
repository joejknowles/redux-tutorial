module.exports = {
  entry: './src/app.jsx',
  output: {
    path: './public',
    filename: 'bundle.jsx'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', 'jsx']
  }
};
