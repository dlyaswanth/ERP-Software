const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const isAuth =require('../middleware/auth')

// getting the tutor name list
router.get('/getTutors',isAuth,async(req,res)=>{
    const data=await Users.find({'details.tutor':'Yes'})
    let result=[]
    for(let i of data)
    result.push(i.name);
    res.status(200).send(result);
})

// find the student deatils with email
router.post('/getStudentDetails',isAuth,async(req,res)=>{
    let studentData=await Users.find({email:req.body.email})
    if (studentData.length !== 0)
    {
        studentData[0]['password']=undefined;
        res.status(200).send(studentData[0]);
    }
    else
    res.status(500).send({error:"Something Went wrong ! "})
})

// get all the employees in the instituton 
router.get('/getAllEmployees',isAuth,async(req,res)=>{
    const data=await Users.find(
        {
            "role":"Professor"
        },
        {
            "_id":"$_id",
            "email":"$email",
            "name":"$name",
            "role":"$role",
            "department":"$details.department",
            "phoneNumber":"$details.phoneNumber",
            "profilePhoto":"$profile"
        }
    )
    res.status(200).send(data);
})

//get details of the employee using id
router.get('/employee/:id',isAuth,async(req,res)=>{
    const data=await Users.find({_id:req.params.id})
    data[0].password=undefined;
    res.status(200).send(data[0]);
})
module.exports=router;