var router  = require('express').Router(),
    mysql   = require('./mysql.js'),
    multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null,req.body.title);
  }
});
var fileFilter = function(req,file,cb){
    if(req.session.name && req.session.rol == 1)
        cb(null,true);
    else
        cb(new Error('No admin'));
};
var upload = multer({ storage: storage, fileFilter:fileFilter });

//POST
router.post('/upload',upload.single('upload'),function(req,res){
    res.json({code:1});
});
router.post('/newSprint',function(req,res){
    if(req.session.username && req.session.rol == 1){
        var objectSQL = {
            //Datos del sprint -> req.body.{{campo}}
        };
        var query = ''+mysql.escape(objectSQL); // FALTA POR IMPLEMENTAR
        mysql.queryToDB(query,function(result,err){
            if(err){
                res.json({error:true});
            }else{
                res.json({error:false});
            }
        });
    }
});

// GETS
router.get('/histories',function(req,res){
    if(req.session.username)
        res.redirect('/');
    else
        var query = ''; // FALTA POR IMPLEMENTAR
        mysql.queryToDB(query,function(result,err){
            if(err){
                res.json({error:true});
            }else{
                res.json(result);
            }
        });
});

router.get('/history',function(req,res){
    if(req.session.username)
        res.redirect('/');
    else
        query = ''; // FALTA POR IMPLEMENTAR
        mysql.queryToDB(query,function(result,err){
            if(err){
                res.json({error:true});
            }else{
                res.json(result);
            }
        });
});

router.get('/user',function(req,res){
    if(req.session.username)
        res.redirect('/');
    else
        var query = ''; // FALTA POR IMPLEMENTAR
        mysql.queryToDB(query,function(result,err){
            if(err){
                res.json({error:true});
            }else{
                res.json(result);
            }
        });
});

router.get('/sprint/:sprintID',function(req,res){
    if(req.session.username)
        res.redirect('/');
    else
        var sprint = req.params.sprintID;
        var query  = ''; // FALTA POR IMPLEMENTAR
        mysql.queryToDB(query,function(result,err){
            if(err){
                res.json({error:true});
            }else{
                res.json(result);
            }
        });
});

module.exports = router;