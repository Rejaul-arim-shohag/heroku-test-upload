const mongoose =  require('mongoose');
const { Schema } = mongoose;
const sellProductSchema = new Schema({
    customerId:{type:String},
    ProductID:{type:Number},
    Qty:{type:String},
    Cost:{type:String},
    Total:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
}, {versionKey:false});
const SellModel = mongoose.model("sellproducts",sellProductSchema);
module.exports = SellModel;