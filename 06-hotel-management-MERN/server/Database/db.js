import mongoose from 'mongoose'

const connectDB = async () => {
   try {
      await mongoose.connect('mongodb://127.0.0.1:27017/pappu')
      console.log('db connected');
   } catch (error) {
     console.log('db connection failed');
     console.log(error);
   } 
}

export default connectDB