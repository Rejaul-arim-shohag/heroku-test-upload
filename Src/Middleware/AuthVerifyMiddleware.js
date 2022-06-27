var jwt = require('jsonwebtoken');
module.exports=(req, res, next)=>{
    jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decode)=>{
        if(err){
            console.log(err)
            res.status(403).json({"status":"Fail", "data":"token is not valid"});
        }
        else{
            req.email=decode.email;
            next();
        }
    })
}

//47
//https://themexbd.com/poket/autocar/