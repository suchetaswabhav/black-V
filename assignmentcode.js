var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var restify = require('restify');
var app = express();
var router = express.Router();

var port = 3000;
app.set('port', (3000));
app.use(restify.plugins.bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(cors());

const https = require('https');


//correct
https.get('https://tupleschallenge.blob.core.windows.net/interview/age_data.json', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
    
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {

    console.log ("Data ", data )
   
    
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});




// // -----------------   listen code -------------------------

app.listen(app.get('port'), function(){
    console.log('Express server on port ' + app.get('port'));
 });

