var express = require('express'),
        bodyParser = require('body-parser'),
        path = require('path');

var app = express();
app.use (bodyParser.json());

app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname, 'layout/app.html'));
});

app.use(express.static(path.join(__dirname,'assets')));


app.listen(3000, function (){
  console.log('Serer listening on', 3000);
});
