const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = mongoose.model('Users'); 
const bcrypt = require('bcryptjs');
const {JWT_SECRET}=require('../config/keys')
const jwt=require('jsonwebtoken')
const isAuth =require('../middleware/auth')

// to login in 
router.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    Users.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser)
        return res.status(401).json({error:'Invalid Credentials !'})
        bcrypt.compare(password,savedUser.password,function(err,result){
        if (result)
        {
            const token=jwt.sign({id:savedUser.id},JWT_SECRET)
            const {id,name,email,role}=savedUser
            return res.status(202).json({token,user:{id,name,email,role},message:"Logged In !"})
        }
        else
        return res.status(401).json({error:"Invalid Credentials !"});
        })
    })
})

//to create a new user in clg 
router.post('/addUser',isAuth,async(req,res)=>{
    const {name,email,password,role,details}=req.body.body;
    Users.findOne({email:email})
    .then(savedUser=>{
        if (savedUser)
        return res.status(401).json({error:'Email Already exists !'})
        else
        {
            try
            {
                if (role === 'Admin' || role === 'Professor')
                {
                    const {subjects}=req.body.body;
                    details['subjects']=subjects.split(',')
                    details['lib_books_taken']=[]
                    const {dob,phoneNumber,gender,blood_Group}=details
                    details.dob=undefined;
                    details.phoneNumber=undefined;
                    details.gender=undefined;
                    details.blood_Group=undefined;
                    bcrypt.hash(password,15,(err,hashedpassword)=>{
                        const user=new Users({
                            email,
                            name,
                            role,
                            dob,
                            phoneNumber,
                            gender,
                            blood_Group,
                            password:hashedpassword,
                            details
                        })
                        user.save()
                    })
                }
                else if (role === 'Student')
                {
                    const {certificates}=req.body.body;
                    details['certificates']=certificates;
                    details['lib_books_taken']=[]
                    const {dob,phoneNumber,gender,blood_Group}=details
                    details.dob=undefined;
                    details.phoneNumber=undefined;
                    details.gender=undefined;
                    details.blood_Group=undefined;
                    bcrypt.hash(password,15,(err,hashedpassword)=>{
                        const user=new Users({
                            email,
                            name,
                            role,
                            dob,
                            phoneNumber,
                            gender,
                            blood_Group,
                            password:hashedpassword,
                            details,
                        })
                        user.save()
                    })
                }
                else
                {
                    
                    const {dob,phoneNumber,gender,blood_Group}=details
                    details.dob=undefined;
                    details.phoneNumber=undefined;
                    details.gender=undefined;
                    details.blood_Group=undefined;
                    bcrypt.hash(password,15,(err,hashedpassword)=>{
                        const user=new Users({
                            email,
                            name,
                            role,
                            dob,
                            phoneNumber,
                            gender,
                            blood_Group,
                            password:hashedpassword,
                            details,
                        })
                        user.save()
                    })
                }
                return res.status(201).json({message:'User created Successfully !'});
            }
            catch(error)
            {
                res.status(500).json({error:'Something went wrong !'})
            }
        }    
    }) 
})
module.exports=router;