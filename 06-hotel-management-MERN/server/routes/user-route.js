import express from 'express'
const router = express.Router() 

import Register from '../controllers/user-controller.js'
router.post('/register', Register)

export default router