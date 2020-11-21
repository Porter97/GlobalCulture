const webpack = require('webpack');
const config = {
    entry:  __dirname + '/src/index.jsx',
    mode: 'production',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }, {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
            }}]
        }, {
            test: /\.css$/,
            include: /node_modules/,
            use: [
              'style-loader',
              {loader: 'css-loader',
              options: {
                modules: true,
              }}]
      }, {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/images/[hash]-[name].[ext]',
            }
          },
        ],
      },
      ]
    },
};
module.exports = config;