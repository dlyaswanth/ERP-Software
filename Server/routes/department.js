const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Departments = mongoose.model('Departments'); 
const User =mongoose.model('Users')
const isAuth =require('../middleware/auth')

// to add a new department in clg
router.post('/addDepartment',isAuth,async(req,res)=>{
    const {name}=req.body;
    Departments.findOne({departmentName:name})
    .then(savedUser=>{
        if(savedUser)
        return res.json({error:'Department already exists !'})
        else
        {
            const Role=new Departments({
                departmentName:name,
            })
            Role.save()
            return res.status(202).json({message:"Department Created !"})
        }
    })
})

//getting the departments in clg
router.get('/getDepartments',isAuth,async(req,res)=>{
    const data=await Departments.find({})
    let result=[]
    for(let i of data)
    result.push(i.departmentName);
    res.status(200).send(result);
})

// getting the department details for admin dashboard
router.get('/getDepartmentDetails',isAuth,async(req,res)=>{
    const data=await Departments.find({})
    let result=[]
    for(let i of data)
    result.push({"Department":i.departmentName,"DepartmentHead":i.departmentHead,"AddedBy":i.addedBy,"StaffCount":i.departmentStaffs.length});
    let returnResult=[];
    for (let i of result)
    {
        let temp=i;
        const data=await User.find({$and:[{role:"Student"},{'details.department':i.Department}]}).count();
        temp['StudentCount']=data;
        returnResult.push(temp);
    }
    res.status(200).send(returnResult)
})
module.exports=router;