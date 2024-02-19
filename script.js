const mongoose=require('mongoose')
const express =require('express')
const app=express()

mongoose.connect("mongodb+srv://megi:megi123@cluster0.plqgahu.mongodb.net/?retryWrites=true&w=majority").then(()=>{console.log("Connected to MongoDB");app.listen(5000,(req,res)=>res.send("Welcome to the server"))}
).catch((e)=>console.log(e))
