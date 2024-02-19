const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://megi:megi123@cluster0.plqgahu.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Connected to MongoDB"))
