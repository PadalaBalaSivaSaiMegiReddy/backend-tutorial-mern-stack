const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());



const posts =[
    {
        username:"Megi",
        title:"Post 1"
    },
    {
        username:"Sita",
        title:"Post 2"
    },
    {
        username:"Jesse",
        title:"Post 3"
    },
]

app.get("/posts",(req,res)=>{
    res.json(posts)
})

app.post('/login',(req,res)=>{
    //Authenticate User


    const username = req.body.username

    
    
})

app.listen("3000",()=>{
    console.log("listening")
})