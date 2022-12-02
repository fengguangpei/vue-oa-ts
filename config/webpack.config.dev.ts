import { merge } from 'webpack-merge'
import * as webpack from 'webpack'
import base from './webpack.config.base'
import 'webpack-dev-server'
const config: webpack.Configuration = merge(base, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    open: false,
    port: 8081,
    static: './dist',
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": '*'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin()
  ]
})
export default config