const express = require('express')
const PORT = process.env.PORT || 8001
const app = express()
const bodyparser = require('body-parser');
const {MONGOURI} = require('./config/keys.js');
const mongoose = require('mongoose')
const path=require('path')
mongoose.connect("mongodb://127.0.0.1:27017/Enterprise_Resource_Planning",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("Connected to dataBase");
})
mongoose.connection.on('error',(error)=>{
    console.log("Error Connecting : ",error);
})
require('./models/users')
require('./models/roles')
require('./models/departments')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(require('./routes/auth'))
app.use(require('./routes/getDetails'))
app.use(require('./routes/roles'))
app.use(require('./routes/department'))
app.use(express.json())
if(process.env.NODE_ENV=="production"){
    app.use(express.static(path.join(__dirname,'public')));
        app.get("*",(req,res)=>{
            res.sendFile(path.join(__dirname,'public/index.html'))
        })
        }
app.listen(PORT,()=>{
    console.log("Server Running on PORT ",PORT)
})