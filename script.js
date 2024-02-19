const mongoose=require('mongoose')
const express =require('express')
const app=express()

const User=require('./User')

mongoose.connect("mongodb+srv://megi:megi123@cluster0.plqgahu.mongodb.net/practice?retryWrites=true&w=majority").then(()=>{console.log("Connected to MongoDB");app.listen(5000,()=>console.log("Welcome to the server "+5000))}
).catch((e)=>console.log(e))

run()

async function run(){

    try {
        const user= await User.create({name:"Megi",age:22,
        email:"Megireddy21@gmail.com",
        hobbies:["Weight Lifting","Bowling","cricketing"],address:{
            street:"Main st",
            city:"New York"
        }})
        // await User.deleteMany({name:"megi"})
        console.log(user)
        
    } catch (error) {
        console.log(error.message)
    }

   
}
