import { Message } from "../models/message.model.js"

export const sendMessage = async (req,res) => {
    try {

        const {message} = req.body

        const {id:recieverID} = req.params

        const senderID = req.user.id

         res.send(id)

        res.status(200).send("messsage sen succesfully")
        
    } catch (error) {
        return res.status(400).send("error in sending message")
    }
}