const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../config/keys')
const mongoose=require('mongoose')
const Users = mongoose.model('Users');

// for security purposes middleware 
module.exports=(req,res,next)=>{
    const {authorization}= req.headers
    if (!authorization){
    return res.status(401).json({error:"Please log in"})}
    const token=authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(error,payload)=>{
        if(error){       
                 return res.status(401).json({error:"Please log in"})
                }
        const {id}=payload
        Users.findById(id).then(userdata=>{
            req.user= userdata
            next()
        })
    })
}