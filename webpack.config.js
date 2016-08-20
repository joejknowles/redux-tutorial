module.exports = {
  entry: './public/app.jsx',
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
