'use strict';

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var questions = require('./routes/faq');

app.use(express.static('./public'));
app.use('/FAQ', questions);


app.listen(port, function() {
  console.log('Server listening on port:' + port);
});