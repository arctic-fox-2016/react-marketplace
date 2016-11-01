const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const path = require('path')
const express = require('express')
var app = express()
const port = 3000
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))
app.use('/', express.static(path.join(__dirname, 'public')))
app.listen(port, function(err){
  if(err) console.log(err)
  else console.log(`Application run in ${port}`)
})
