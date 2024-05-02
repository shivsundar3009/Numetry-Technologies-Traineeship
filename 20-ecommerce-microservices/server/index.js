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

import userRoutes from "./routes/user.routes.js"
app.use("/api/v1",userRoutes)

import productRoutes from "./routes/product.routes.js"
app.use("/api/v2",productRoutes)

import cartRoutes from "./routes/cart.routes.js"
app.use("/api/v3",cartRoutes)