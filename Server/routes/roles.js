const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Roles = mongoose.model('Roles'); 
const isAuth =require('../middleware/auth')

// to add a new role in clg
router.post('/addRole',isAuth,async(req,res)=>{
    const {role}=req.body;
    const {_id,name}=req.user;
    Roles.findOne({role:role})
    .then(savedUser=>{
        if(savedUser)
        return res.json({error:'Role already exists !'})
        else
        {
            const Role=new Roles({
                role,
                createdById:_id,
                createdByName:name
            })
            Role.save()
            return res.status(202).json({message:"Role Created !"})
        }
    })
})

// to get the roles in clg
router.get('/getRoles',isAuth,async(req,res)=>{
    const data=await Roles.find({})
    let result=[]
    for(let i of data)
    result.push(i.role);
    res.status(200).send(result);
})
module.exports=router;