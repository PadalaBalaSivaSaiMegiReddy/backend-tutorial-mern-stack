const express = require("express");
const app = express();


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

app.listen("3000",()=>{
    console.log("listening")
})