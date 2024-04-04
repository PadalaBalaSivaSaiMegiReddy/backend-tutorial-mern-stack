const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

require("dotenv").config();

app.use(express.json());

const posts = [
  {
    username: "Megi",
    title: "Post 1",
  },
  {
    username: "Sita",
    title: "Post 2",
  },
  {
    username: "Jesse",
    title: "Post 3",
  },
];

app.get("/posts",authenticateToken, (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  //Authenticate User

  const username = req.body.username;

  const user = {
    name: username,
  };

  const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
  res.json({accessToken:accessToken});
});

function authenticateToken(req,res,next){

}

app.listen(3000, () => {
    console.log("listening server1 on port 3000");
});
