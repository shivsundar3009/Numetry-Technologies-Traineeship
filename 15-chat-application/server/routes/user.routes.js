import express from "express";

const router = express.Router()

import {signUP,login,logout} from "../controllers/user.controllers.js"

router.post("/signUP",signUP)

router.post("/login",login)

router.post("/logout",logout)



export default router
