const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String,
    maxLength:20},
    age:{type:Number,min:-1,max:124,
    validate:{
        validator:v=>v%2==0,
        message:props=>`${props.value} is not even`
    }},
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    },
    updatedAt:{
        type:Date,
        default:()=>Date.now()
    },
    bestFriend:mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address:{
        street:String,
        city:String
    }

})

userSchema.method.sayHi=function(){
    console.log(`Name of the user id ${this.name}`)
}

userSchema.statics.findByName=function(name){
    return this.find({name: new RegExp(name,'i')})
}

userSchema.query.byName=function(name){
    return this.where({name: new RegExp(name,'i')})
}

module.exports=mongoose.model("User",userSchema)