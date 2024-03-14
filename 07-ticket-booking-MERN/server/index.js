import express from "express";

import { ConnectDB } from "./db/database.js";

import cors from "cors"

const app = express()

app.use(cors())

app.use(express.json())

ConnectDB()

const PORT = 3000

app.get('/',(req,res) => {
     res.send('hello there I was Waiting For You')
})

app.listen(PORT, () => {
    console.log('server is running at port 3001')
})

import userRoutes from './routes/user.routes.js'
app.use('',userRoutes)