const mongoose=require('mongoose')
const express =require('express')
const app=express()

mongoose.connect("mongodb+srv://megi:megi123@cluster0.plqgahu.mongodb.net/?retryWrites=true&w=majority").then(()=>{console.log("Connected to MongoDB");app.listen(5000,()=>console.log("Welcome to the server "+5000))}
).catch((e)=>console.log(e))
