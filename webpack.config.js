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
  }
};
