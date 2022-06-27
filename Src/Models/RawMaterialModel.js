const mongoose =  require('mongoose');
const { Schema } = mongoose;
const ProductSchema = new Schema({
    RawMaterialId:{type:Number, default:function(){return Math.floor(Date.now()/1000)}},
    Name:{type: String},
    Price:{type: String},
    Unit:{type: String},
    Details:{type: String},
    CreatedDate:{type:Date, default:Date.now()}
}, {versionKey:false});
const ProductModel = mongoose.model("products", ProductSchema);
module.exports =  ProductModel;