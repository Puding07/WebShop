const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    host: '0.0.0.0'
  },
  entry: {
    main: './src/app/index.js',
    load: './src/app/load.js',
    swiper: './src/app/swiper.js',
    search: './src/app/search.js',
    websocket: './src/app/websokcet.js',
    firebase: './src/app/firebase.js',
    login: './src/app/login.js',
    register: './src/app/register.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
            {
                loader: 'html-loader',
                options: {minimize: true}
            }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './src/public/index.html',
      filename: './index.html',
      chunks: ['main', 'firebase']
    }),
    new HTMLWebPackPlugin({
      template: './src/public/shop.html',
      filename: './shop.html',
      chunks: ['search', 'websocket', 'swiper']
    }),
    new HTMLWebPackPlugin({
      template: './src/public/login.html',
      filename: './login.html',
      chunks: ['login']
    }),
    new HTMLWebPackPlugin({
      template: './src/public/register.html',
      filename: './register.html',
      chunks: ['register']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ]
};