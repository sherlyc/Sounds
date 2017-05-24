var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var widgets = require('./routes/widgets')
var sounds = require('./routes/sounds')

var app = express()

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:8080'}))
app.use(express.static(path.join(__dirname, '../public')))
app.use('/widgets', widgets)
app.use('/sounds', sounds)


module.exports = app
