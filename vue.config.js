const webpack = require('webpack');
module.exports = {
    configureWebpack: {
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),
      ],
      devtool: 'source-map',
      devServer: {
        host: 'localhost', 
        port: 9000
      }, 
      
    }
  }

 
