const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, minLength:8},
    image:{
        data: Buffer,
        type: String,
        default: "",
    }
},
    {timestamps:true}
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;