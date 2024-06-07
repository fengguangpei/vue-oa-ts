import base from './webpack.config.base'
import { merge } from 'webpack-merge'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import * as webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
// const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const config: webpack.Configuration = merge(base, {
  target: 'web',
  mode: 'production',
  output: {
    publicPath: '/microApp/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash:8].css'
    }),
    new WebpackManifestPlugin({}),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        'tdesign-vue-next': {
          test: /[\\/]node_modules[\\/](tdesign-vue-next)[\\/]/,
          name: 'tdesign-vue-next',
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [`...`, new CssMinimizerPlugin()]
  }
})
export default config
