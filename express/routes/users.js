const express=require('express');
router=express.Router()

router.get('/',(req,res)=>{
    res.send("User List")
})

router.get('/new',(req,res)=>{
    res.send("User New form")
})

module.exports=router