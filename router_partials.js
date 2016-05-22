var router = require('express').Router();

router.get('/:page/:name',function(req,res){
    if(req.session.username){
        res.render('partials/'+req.params.page+'/'+req.params.name,{master:req.session.rol});
    }else{
        res.render('partials/'+req.params.page+'/'+req.params.name,{master:0});
    }
});

module.exports = router;