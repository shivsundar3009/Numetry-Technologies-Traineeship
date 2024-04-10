import mongoose from "mongoose"

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

export const NOTE = new mongoose.model("NOTE",notesSchema)