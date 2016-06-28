var express = require('express'); //The name of the module

//Create our app
var app = express();

app.use(express.static('public')); //telling which server we want to use
app.listen(3000, function(){
  console.log('Express server is up on port 3000');
}); //starts server
