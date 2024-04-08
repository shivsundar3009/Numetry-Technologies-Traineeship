import jwt from "jsonwebtoken"

const protectRoutes = async (req,res,next) => {
    try {
        const token = req.cookies.jwt

        if(!token) {
            return res.status(400).send({
                error: "unauthorised no-token provided"
            })
        }

        const decoded = jwt.verify(token,process.env.JWTSECRET)

        if(!decoded) {
            return res.status(400).send({
                error: "unauthorised invalid token"
            })
        }

        const 
        

    } catch (error) {
        res.status(500).send("error in protect routes")
    }
}