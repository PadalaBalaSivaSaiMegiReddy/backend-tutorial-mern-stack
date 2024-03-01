const express=require("express");
const app=express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    console.log("App get success");
    res.render("index",{text:"world"})
})

const userRouter=require('./routes/users')

app.use('/users',userRouter)

app.listen(3000,()=>{
    console.log("App listening to port 3000");
})


