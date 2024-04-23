import { createUser, getUserById, getUsers } from "../controllers/user.controllers.js"

import express from "express"

const router = express.Router()

router.get("/getUsers", getUsers)

router.get("/getUser/:id", getUserById)

router.post("/createUser", createUser)