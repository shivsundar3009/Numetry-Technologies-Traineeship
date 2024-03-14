import express from 'express'

import { Register } from '../controllers/user.controller.js'

const Router = express.Router()

Router.post('/register',Register)

export default Router