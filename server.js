var express = require('express'),
    app     = express(),
    mysql   = require('mysql');

var connection = mysql.createConnection({
   host:       'localhost',
   user:       'root',
   password:   '',
   database:   'database',
   port:       1234
});


function consulta(request,callback){
   var result,error;
   connection.connect(function(error2){
      if(error2) error = error2;
   });
   if(!error){
      connection.query(request,function(error2,result2){
         if(error2) error = error2;
         else result = result2;
      });
      connection.end();
   }
   callback(result,error);
}

app.use(express.static('public'));

app.get();
app.post();

app.listen(8080);