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

import Admin from "./models/admin.model.js";

const createAdminAccount = async () => {
  try {
    const admin = await Admin.findOne({ role: 'admin' });
    if (!admin) {
      const newAdmin = new Admin({
        fullName: 'Admin',
        userName: 'admin',
        email: 'admin@gmail.com',
        password: 'Admin@123',
        role: 'admin'
      });
      await newAdmin.save();
      console.log('Admin account created successfully');
    } else {
      console.log('Admin account already exists');
    }
  } catch (error) {
    console.error('Error creating admin account:', error);
  }
};

createAdminAccount();

import adminRoutes from "./routes/admin.routes.js"
app.use("/admin",adminRoutes)

import staffRoutes from "./routes/staff.routes.js"
app.use("/staff",staffRoutes)

import studentRoutes from "./routes/student.routes.js"
app.use("/student",studentRoutes)

import parentRoutes from "./routes/parent.routes.js"
app.use("/parent",parentRoutes)

import attendanceRoutes from "./routes/attendance.routes.js"
app.use("/attendance",attendanceRoutes)