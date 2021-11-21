//the departments in clg
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    departmentName:{
        type:String,
        required:true
    },
    studentCount:{
        type:Number,
    },
    departmentStaffs:{
        type:Array,
    },
    departmentHead:{
        type:String,
    },
    addedBy:{
        type:String,
    }
})
mongoose.model("Departments",userSchema);