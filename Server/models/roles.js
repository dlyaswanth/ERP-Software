// roles inside the clg
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    role:{
        type:String,
        required:true
    },
    createdById:{
        type:String,
        required:true
    },
    createdByName:{
        type:String,
        required:true
    }
})
mongoose.model("Roles",userSchema);