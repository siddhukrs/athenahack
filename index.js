var express = require('express')
var app = express()

app.use('/', express.static(__dirname + '/node_modules/gentelella'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})