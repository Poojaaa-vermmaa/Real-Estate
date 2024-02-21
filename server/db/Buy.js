const mongoose=require('mongoose');

const buySchema = new mongoose.Schema({
    location:String,
    myfile:[String],
    contact:Number,
    ownername:String,
    details:String,
    price:String,
    description:String,
    description2:String,
    measurement:String
});
module.exports = mongoose.model("buys",buySchema);


