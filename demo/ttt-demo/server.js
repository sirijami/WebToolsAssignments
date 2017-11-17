var express = require('express');
var app = express();
var port = 8000;
var bodyParser = require('body-parser');

var TTT = require('./tictactoe.js');

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/newGame', (req, res) => { res.send(JSON.stringify(TTT.newGame())); });
app.post('/takeTurn', (req, res) => { 
  res.send(JSON.stringify(TTT.takeTurn(req.body)));
});

app.listen(port, () => { console.log(`server listening on port ${port}`);});
