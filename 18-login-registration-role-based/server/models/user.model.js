import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["ADMIN","MANAGER","STAFF","EMPLOYEE"]
    },
    profilePicture:{
        type:String
    }

},{
    timestamps:true
})

export const User = new mongoose.model("User",userSchema)