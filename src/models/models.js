import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    Firstname:{
        type:String,
        required:true, 
    },
    Lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    passwordForgottenToken:String,
    passwordForgottenTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date

})

const User = mongoose.models.User || mongoose.model("user", userSchema);

export default User;