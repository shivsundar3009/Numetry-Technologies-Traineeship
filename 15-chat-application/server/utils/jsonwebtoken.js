import jwt from "jsonwebtoken"

export const generateToken = async (userID,res) =>{

    const token = jwt.sign({userID},process.env.JWTSECRET,{expiresIn: '15'})

    res.cookie("jwt",token,{
        maxAge: 15 * 60 * 1000,
        httpOnly: true,
        samesite: "strict"
    })
}