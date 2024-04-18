import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

},{
    timestamps:true
})

export const User = new mongoose.model("User",userSchema)