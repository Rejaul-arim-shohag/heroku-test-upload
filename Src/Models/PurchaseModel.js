const mongoose =  require('mongoose');
const { Schema } = mongoose;
const PurchaseSchema = new Schema({
    SupplierID:{ type: Number},
    PurchaseID:{type:Number, default:function(){return Math.floor(Date.now()/1000)}},
    OtherCost:{type: String},
    GrandTotal:{type: String},
    Note:{type: String},
    CreatedDate:{type:Date, default:Date.now()}
}, {versionKey:false});
const  PurchaseModel = mongoose.model("purchases", PurchaseSchema);
module.exports =  PurchaseModel;