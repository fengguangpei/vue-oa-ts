import { merge } from 'webpack-merge'
import * as webpack from 'webpack'
import base from './webpack.config.base'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import 'webpack-dev-server'
import path from 'path'
const config: webpack.Configuration = merge(base, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    publicPath: 'http://localhost:8081/'
  },
  devServer: {
    hot: true,
    open: false,
    port: 8081,
    static: './dist',
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
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
    new webpack.ProgressPlugin(),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '../'),
      manifest: require('../vendor/vendor_manifest.json')
    }),
    new ForkTsCheckerWebpackPlugin()
  ]
})
export default config
