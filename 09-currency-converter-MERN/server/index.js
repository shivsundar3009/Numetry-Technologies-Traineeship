import express from "express"
import cors from "cors"
import { ConnectDB } from "./database/db.js"

const app = express()

app.use(cors())

app.use(express.json())

ConnectDB()

const PORT = 3000

app.get('/',(req,res) => {
     res.send('hello there I was Waiting For You')
})

app.listen(PORT, () => {
    console.log('server is running at port 3000')
})

import currencyRoutes from './routes/currency.routes.js'
app.use('',currencyRoutes)