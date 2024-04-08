import  mongoose  from "mongoose";

const messageSchema = new mongoose.Schema({
    senderID:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"User",
        required:true
    },
    recieverID:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"User",
        required:true
    },
    message:{
        type: String,
        required: true
    }
},{
    timestamps:true
})

export const Message = new mongoose.model("Message",messageSchema)
