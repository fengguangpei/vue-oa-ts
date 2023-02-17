import webpack from 'webpack'
import path from 'path'
module.exports = {
  entry: {
    vendor: [
      'pinia',
      'qiankun',
      'tdesign-vue-next',
      'vue',
      'vue-router',
      'vuedraggable',
      'vxe-table',
      'xe-utils'
    ]
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../vendor'),
    publicPath: 'vendor',
    library: '[name]_dll'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]_dll',
      path: path.resolve(__dirname, '../vendor/[name]_manifest.json')
    })
  ]
}
