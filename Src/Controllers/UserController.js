const userModel = require('../Models/UserModel');
const jwt = require('jsonwebtoken');

exports.createUser=(req, res)=>{
    const isValid =  /\S+@\S+\.\S+/.test(req.body.email);
    userModel.create(req.body, (err, data)=>{
        if(!err && isValid){
            res.status(200).json({"status":"success", "data":data})
        }else{
            res.status(500).json({"status":"fail", "data":err})
        }
    })
}

//login user 
exports.loginUser=(req, res)=>{
    userModel.find({email:req.body.email}, (err, data)=>{
        if(!err && data.length>0){
            const payload = {email:data[0].email, date:Date.now()/1000}
            jwt.sign(payload, process.env.SECRET_KEY,  { expiresIn: "7d"}, (err, token)=>{
                if(err){
                    res.status(500).json({"status":"fail", "data":err})
                } else{
                    res.status(200).json({"status":"success", "token":token})
                }
            })
        } else{
            res.status(404).json({"status":"fail","data":"Incorrect Email or Password, Please Try again!"})
        }
    })
    
}

exports.hello=(req, res)=>{
    res.status(200).json({"status":"success", "data":"success Route"})
}


