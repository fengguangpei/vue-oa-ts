import base from './webpack.config.base';
import { merge } from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import * as webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
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
        vue: {
          test: /[\\/]node_modules[\\/](@vue)[\\/]/,
          name: 'vue',
          chunks: 'all',
          enforce: true
        },
        'vue-router': {
          test: /[\\/]node_modules[\\/](vue-router)[\\/]/,
          name: 'vue-router',
          chunks: 'all',
          enforce: true
        },
        'pinia': {
          test: /[\\/]node_modules[\\/](pinia)[\\/]/,
          name: 'pinia',
          chunks: 'all',
          enforce: true
        },
        'vue-table': {
          test: /[\\/]node_modules[\\/](vxe-table|xe-utils)[\\/]/,
          name: 'vxe-table',
          chunks: 'all',
          enforce: true
        },
        'element-plus': {
          test: /[\\/]node_modules[\\/](element-plus)[\\/]/,
          name: 'element-plus',
          chunks: 'all',
          enforce: true
        },
        'tdesign-vue-next': {
          test: /[\\/]node_modules[\\/](tdesign-vue-next)[\\/]/,
          name: 'tdesign-vue-next',
          chunks: 'all',
          enforce: true
        },
      }
    },
    minimizer: [
      `...`,
      new CssMinimizerPlugin()
    ]
  }
})
export default config