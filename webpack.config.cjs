const path = require('path');

module.exports = {
  mode: 'development', // or 'production'

  entry: './src/main.jsx', // Entry point of your application (adjust the path if needed)
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory (where the bundled files will be saved)
    filename: 'bundle.js', // Output file name (the bundled JavaScript file name)
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
