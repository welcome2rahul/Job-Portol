const mongoose=require('mongoose');

const registerSchema=new mongoose.Schema({
    fullname:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,min:5},
    dob:{type:Date,required:true},
    mobile:{type:Number,required:true},
    role:{type:String,default:'user'}
},{timestamps:true})

const registerModel=mongoose.model('users',registerSchema)
module.exports=registerModel