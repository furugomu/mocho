express = require 'express'
serveStatic = require 'serve-static'
path = require 'path'
root = path.resolve(__dirname, '..')

app = module.exports = express()
app.set 'port', process.env.PORT || 5000
app.use '/', serveStatic(path.join(root, 'public'))


