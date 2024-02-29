const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const expenseRoutes=require('./routes/expenseRoutes')
const app=express()
const port=3000

app.use(express.json())
app.use(cors())

//connect to db
mongoose.connect('mongodb://localhost:27017/expensetracker')

//Routes
app.use('/expenses',expenseRoutes)

//Start server
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})