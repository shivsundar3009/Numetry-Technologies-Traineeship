import express from "express";

const router = express.Router()


router.post("/signUP",signUP)

router.post("/login",login)

router.post("/logout",logout)
