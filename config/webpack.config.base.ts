import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import path from 'path';
import webpack from 'webpack'
// 按需导入
import Components from 'unplugin-vue-components/webpack'
import AutoImport from 'unplugin-auto-import/webpack'
import { ElementPlusResolver, TDesignResolver } from 'unplugin-vue-components/resolvers'
const config: webpack.Configuration = {
  entry: path.resolve(__dirname, '../src/main.ts'),
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    chunkLoadingGlobal: 'webpackJsonp_micro-app',
    library: 'micro-app-[name]',
    libraryTarget: 'umd',
    publicPath: 'http://localhost:8081/'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src")
    },
    extensions: [".js", ".ts", ".vue", ".scss", ".css", ".d.ts"]
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
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            exclude: /node_modules/,
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false
                }
              ]
            ],
            plugins: ['@babel/plugin-transform-runtime']
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: false
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        TDesignResolver({
          library: "vue-next"
        })
      ]
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        TDesignResolver({
          library: "vue-next"
        })
      ]
    })
  ]
}
export default config