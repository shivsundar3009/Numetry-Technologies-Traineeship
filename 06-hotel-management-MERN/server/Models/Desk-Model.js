import mongoose from "mongoose";

const deskSchema = new mongoose.Schema({
    number: Number,
    isOccupied: Boolean
});

const Desk = mongoose.model("Desk", deskSchema);

export default Desk;