var express = require('express')
var app = express()
var path = require('path')


app.use('/', express.static('./'));

  var server = app.listen(process.env.PORT || 8081, ()=> {
	var host = server.address().address
	var port = server.address().port

	console.log('Conectado al puerto 8081')
})
