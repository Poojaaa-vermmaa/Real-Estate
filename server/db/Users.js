const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    //     required:true,
    //     unique:true
    // },
    password:String,
        // required:true,
        // unique:true
    
});
module.exports = mongoose.model("users",userSchema);
