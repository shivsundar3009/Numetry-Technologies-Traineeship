import express from "express"
import cors from "cors"
import { ConnectDB } from "./database/db.js"

const app = express()

app.use(cors())

app.use(express.json())

ConnectDB()

const PORT = 3000

app.get('/',(req,res) => {
     res.send('hello there Radhe Radhe')
})

app.listen(PORT, () => {
    console.log('server is running at port 3000')
})

// import User from "./models/user.model.js"
// const createAdminAccount = async () => {
//     try {
//       const admin = await User.findOne({ role: 'admin' });
//       if (!admin) {
//         const newAdmin = new User({
//           fullName: 'Admin',
//           username: 'admin',
//           email: 'admin@gmail.com',
//           password: 'Admin@123',
//           role: 'admin'
//         });
//         await newAdmin.save();
//         console.log('Admin account created successfully');
//       } else {
//         console.log('Admin account already exists');
//       }
//     } catch (error) {
//       console.error('Error creating admin account:', error);
//     }
//   };
  
  
  // Check for admin account on server start
  // createAdminAccount();


// import userRoutes from "./routes/user.routes.js"
// app.use("/api/v1",userRoutes)

// import attendanceRoutes from "./routes/attendance.routes.js"
// app.use("/api/v2",attendanceRoutes)