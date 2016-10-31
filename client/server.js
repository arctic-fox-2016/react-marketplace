import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config.js'

const port = process.env.PORT || 8000
let app = express()
let compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {noInfo: true,publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, ()=>{
  console.log('listening on', port)
})
