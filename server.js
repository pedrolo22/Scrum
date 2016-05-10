var express = require('express'),
    app     = express(),
    mysql   = require('mysql');

var connection = mysql.createConnection({
   host:       'localhost',
   user:       'root',
   password:   'admin',
   database:   'scrum',
   port:       3306
});

connection.connect(function(con_err){
   console.log(con_err);
});
                   
function query(request,callback){
   connection.query(request,function(que_err,que_res,que_fileds){
            if(que_err) callback(undefined,que_err)
            else callback(que_res,undefined);
   });
}


app.use(express.static('public'));

app.get("/get",function(req,res){
   query('select * from team_member',function(result,err){
      if(err)console.log(err)
      res.json(result);
      res.end();
   });
});
var i = 15;
app.get("/post",function(req,res){
   var quer = {
     id_tm:i+1,
      Nombre:'Bryan',
      Rol:'ScrumMaster',
      Nick:'Bryan',
      password:'12345',
      "e-mail":'bryanfv95@gmail.com'
   };
   var sql = 'insert into team_member set' + mysql.escape(quer);
   query(sql,function(result,err){
      if(err)console.log(err)
      i++;
      res.redirect("/get");
      res.end();
   })
});

app.get("/delete",function(req,res){
   var sql = 'delete from team_member where id_tm = ' + i;
   query(sql,function(result,err){
      if(err)console.log(err)
      i--;
      res.redirect("/get");
      res.end();
   })
});

app.listen(8080);