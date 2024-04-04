import express from "express"
import cors from "cors"
import { ConnectDB } from "./database/db.js"

import dotenv from 'dotenv'
dotenv.config()

const app = express()

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
