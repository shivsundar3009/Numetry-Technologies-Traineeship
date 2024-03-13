import express from "express";
import connectDB from "./Database/db.js";
import cors from 'cors'

const app = express()

app.use(cors())

connectDB()

app.use(express.json()) 

const PORT = 3000

import entryExitRoutes from './routes/entryExitRoutes.js';
app.use('/api/v1', entryExitRoutes);

import deskAllocationRoutes from './routes/deskAllocationRoutes.js';
app.use('/api/v1', deskAllocationRoutes);

import mealVisitRoutes from './routes/mealVisitRoutes.js';
app.use('/api/v1', mealVisitRoutes);

app.get('/',(req,res) => {
    res.send('server is running properly')
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})
