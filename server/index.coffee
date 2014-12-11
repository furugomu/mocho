app = require './web'

server = app.listen app.get('port'), ->
  host = server.address().address
  port = server.address().port
  console.log 'Example app listening at http://%s:%s', host, port
