// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.
// Use `.storybook/user/modify_webpack_config.js instead`.
const cssnext = require('postcss-cssnext')
const path = require('path')
const updateConfig = require('./user/modify_webpack_config')

const config = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap!postcss',
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  postcss: [cssnext()]
}

updateConfig(config)
module.exports = config
