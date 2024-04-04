import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({

    fullname: {
        type:String,
        required:true,
    },
    username: {
        type:String,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
    },
    profilepic:{
        type:String,
    }
    


},{timestamps: true})



export const User = new mongoose.model("User",userSchema)