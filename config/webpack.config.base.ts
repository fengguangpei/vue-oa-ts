import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import path from 'path'
import webpack from 'webpack'
// 按需导入
import Components from 'unplugin-vue-components/webpack'
import AutoImport from 'unplugin-auto-import/webpack'
// const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
import { ElementPlusResolver, TDesignResolver } from 'unplugin-vue-components/resolvers'
const config: webpack.Configuration = {
  entry: path.resolve(__dirname, '../src/main.ts'),
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    chunkLoadingGlobal: 'webpackJsonp_micro-app',
    library: 'micro-app-[name]',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.ts', '.vue', '.scss', '.css', '.d.ts']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            exclude: /node_modules/
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/[name].[contenthash:8].[ext]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: './images/[name].[contenthash:8].[ext]'
        }
      }
    ]
  },
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'vue-demi': 'VueDemi',
    pinia: 'Pinia',
    'xe-utils': 'XEUtils',
    'vxe-table': 'VXETable'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
      urls: [
        'https://unpkg.com/vue@3.2.45/dist/vue.global.js',
        'https://unpkg.com/vue-router@4.1.6/dist/vue-router.global.js',
        'https://cdnjs.cloudflare.com/ajax/libs/vue-demi/0.13.11/index.iife.js',
        'https://cdnjs.cloudflare.com/ajax/libs/pinia/2.0.32/pinia.iife.js',
        'https://cdn.jsdelivr.net/npm/xe-utils@3.5.7/dist/xe-utils.umd.min.js',
        'https://cdn.jsdelivr.net/npm/vxe-table@4.3.10/lib/index.umd.min.js'
      ]
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: false
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: 'vue-next'
        })
      ]
    }),
    AutoImport({
      resolvers: [
        TDesignResolver({
          library: 'vue-next'
        })
      ]
    }),
    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'vue',
    //       entry: {
    //         path: 'https://unpkg.com/vue@3.2.45/dist/vue.global.js',
    //         attributes: {
    //           ignore: 'true'
    //         }
    //       },
    //       global: 'Vue'
    //     },
    //     {
    //       module: 'vue-router',
    //       entry: 'https://unpkg.com/vue-router@4.1.6/dist/vue-router.global.js',
    //       global: 'VueRouter'
    //     },
    //     {
    //       module: 'vue-demi',
    //       entry: 'https://cdnjs.cloudflare.com/ajax/libs/vue-demi/0.13.11/index.iife.js',
    //       global: 'VueDemi'
    //     },
    //     {
    //       module: 'pinia',
    //       entry: 'https://cdnjs.cloudflare.com/ajax/libs/pinia/2.0.32/pinia.iife.js',
    //       global: 'Pinia'
    //     },
    //     {
    //       module: 'xe-utils',
    //       entry: 'https://cdn.jsdelivr.net/npm/xe-utils@3.5.7/dist/xe-utils.umd.min.js',
    //       global: 'XEUtils'
    //     },
    //     {
    //       module: 'vxe-table',
    //       entry: 'https://cdn.jsdelivr.net/npm/vxe-table@4.3.10/lib/index.umd.min.js',
    //       global: 'VXETable'
    //     }
    //   ]
    // })
  ]
}
export default config
