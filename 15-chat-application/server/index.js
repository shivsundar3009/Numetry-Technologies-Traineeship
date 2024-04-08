import express from "express"
import cors from "cors"
import { ConnectDB } from "./database/db.js"

import dotenv from 'dotenv'
dotenv.config()

const app = express()

import cookieparser from "cookie-parser"
app.use(cookieparser())


app.use(cors())

app.use(express.json())

ConnectDB()

const PORT = process.env.PORT

app.get('/',(req,res) => {
     res.send('hello there Radhe Radhe')
})

app.listen(PORT, () => {
    console.log('server is running at port 8000')
})

import userRoutes from "./routes/user.routes.js"
app.use('/api/v1',userRoutes)


import messageRoutes from "./routes/message.routes.js"
import cookieParser from "cookie-parser"
app.use('/api/v2',messageRoutes)

