const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bcrypt=require('bcrypt')
const RegisterModel=require('./models/Register')
const app=express()
const port=3001
app.use(cors())
app.use(express.json())

//Database connection
mongoose.connect('mongodb://localhost:27017/registration')

//post for registration
app.post('/register',async(req,res)=>{
    const{name,email,password}=req.body
    try{
        const existingUser=await RegisterModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json('Email already exisists')
        }
        //Hash the password before saving in db
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=new RegisterModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        await newUser.save() //saves info in db
        res.status(201).json('Account created successfully')
    }catch(err){
        res.status(500).json(err.message)
    }
})

app.listen(port,()=>{
    console.log(`Server is runnung at ${port}`)
})