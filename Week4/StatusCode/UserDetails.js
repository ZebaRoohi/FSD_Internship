const express=require('express')
const app=express()
const port=3000

let users=[]
//Middleware for incoming request
app.use((req,res,next)=>{
    console.log(`Request receiver at ${new Date()}`)
    next()
})
//to parase
app.use(express.json())

//Validation on middleware
const validate=(req,res,next)=>{
    const{username,password}=req.body;
    if(!username || !password){
        return res.status(400).send('Username and password are required')
    }
    if(password.length<6){
        return res.status(400).send('Password length should be atleast six characters long')
    }
    next()
}

//Post 
app.post('/register',validate,(req,res)=>{
    const{username,password}=req.body;
    users.push({username,password})
    res.status(200).send(users)
})

//Get
app.get('/register',(req,res)=>{
    res.status(200).send(users)
})

//Delete
app.delete('/register/:username',(req,res)=>{
    const{username}=req.params
    users=users.filter(user=>user.username!==username)
    res.status(200).send(`User ${username} deleted successfully`)
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})
