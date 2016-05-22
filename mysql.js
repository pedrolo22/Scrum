'use strict'

var mysql  = require('mysql');
var escape = function(data){
    return mysql.escape(data);
};

var queryToDB = function (query,callback){
    console.log(connection)
    var connection =  mysql.createConnection({
               host:       'localhost',
               user:       'root',
               password:   'admin',
               database:   'scrum',
               port:       3306
    });
    console.log(connection)
    connection.connect(function(err){
        if(err){
            callback(undefined,err);
        }else{
            connection.query(query,function(err2,res,fields){
                connection.end();
                if(err2) callback(undefined,err2)
                else callback(res,undefined);
            });
        }
        
    });
}

module.exports.escape    = escape;
module.exports.queryToDB = queryToDB;