import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
          
        await mongoose.connect('mongodb://127.0.0.1:27017/invoice-app')

        console.log('db connection successfull')
        
    } catch (error) {
        
        console.log('db connection failed',error)



        
    }
}
