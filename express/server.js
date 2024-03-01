const express=require("express");
const app=express()

app.get('/',(req,res)=>{
    console.log("App get success");
    res.sendStatus(301)
})

app.listen(3000,()=>{
    console.log("App listening to port 3000");
})


