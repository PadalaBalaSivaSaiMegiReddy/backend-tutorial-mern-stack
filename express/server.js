const express=require("express");
const app=express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    console.log("App get success");
    res.render("index")
})

app.listen(3000,()=>{
    console.log("App listening to port 3000");
})


