var router  = require('express').Router(),
    mysql   = require('./mysql.js');
// GETS
router.get('/',function(req,res){
    if(req.session.username)
        res.redirect('scrumApp');
    else
        res.render('index')
});

router.get('/scrumApp',function(req,res){
    if(req.session.username){
        res.render('scrum',{master:req.session.rol});
    }else{
        res.redirect('/');
    }
});

router.get('/logout',function(req,res){
    if(req.session.username){
        req.session.destroy(function(){
           res.redirect('/'); 
        });
    }else{
        res.redirect('/');
    }
});
//POST
router.post('/login',function(req,res){
    if(req.session.username){
        req.json({code:0});
    }else{
        mysql.queryToDB("select password,Rol from team_member where Nombre='"+req.body.username+"'"
        ,function(result,err){
            if(err) console.log(err);
            else{
                if(result.length === 1 && result[0].password == req.body.pass){

                    req.session.rol = result[0].Rol;
                    req.session.username = req.body.username;

                    res.json({code:0})
                }else{
                    res.json({code:1});
                }
            }
        }); 
    }
});

router.post('/register',function(req,res){
    if(req.session.username)req.session.destroy();
    var user = {
          Nombre:req.body.username,
          Rol:'0',
          Nick:req.body.nick,
          password:req.body.pass,
          "e-mail":req.body.email
    };
    var query = 'insert into team_member set' + mysql.escape(user);
    mysql.queryToDB(query,
        function(result,err){
            if(err){
                console.log(err);
                res.json({code:1});
            }else{
                res.json({code:0});
            }
    }); 
});
module.exports = router;