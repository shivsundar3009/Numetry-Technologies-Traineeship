import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()

export const ConnectDB = async () => {
    try {
          
        await mongoose.connect(process.env.MONGODB_URI)

        console.log('db connection successfull')
        
    } catch (error) {
        
        console.log('db connection failed',error)



        
    }
}
