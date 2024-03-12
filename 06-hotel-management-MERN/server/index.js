import express from "express";
import connectDB from "./Database/db.js";

const app = express()

connectDB()

app.use(express.json()) 

const PORT = 3000

import userRoute from './routes/user-route.js'
app.use('/api/v1',userRoute)

app.get('/',(req,res) => {
    res.send('server is running properly')
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})

// app.post('/checkin', async (req, res) => {
//     try {
//         const { name, stayable } = req.body;
//         const guest = new Guest({ name, stayable });
//         await guest.save();
//         res.status(201).send("Guest checked in successfully.");
//     } catch (error) {
//         res.status(500).send("Error checking in guest.");
//     }
// });

// app.delete('/checkout/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         await Guest.findByIdAndDelete(id);
//         res.status(200).send("Guest checked out successfully.");
//     } catch (error) {
//         res.status(500).send("Error checking out guest.");
//     }
// });

// app.post('/allocateDesk', async (req, res) => {
//     try {
//         const desks = await Desk.find({ isOccupied: false }).limit(1);
//         if (desks.length > 0) {
//             desks[0].isOccupied = true;
//             await desks[0].save();
//             res.status(200).send(`Desk ${desks[0].number} allocated.`);
//         } else {
//             res.status(400).send("No desks available.");
//         }
//     } catch (error) {
//         res.status(500).send("Error allocating desk.");
//     }
// });

// app.post('/recordMealVisit', async (req, res) => {
//     try {
//         const { mealType } = req.body;
//         const mealTypes = ["breakfast", "lunch", "dinner"];
//         if (mealTypes.includes(mealType)) {
//             // Record meal visit logic here
//             res.status(200).send(`Meal visit recorded for ${mealType}.`);
//         } else {
//             res.status(400).send("Invalid meal type.");
//         }
//     } catch (error) {
//         res.status(500).send("Error recording meal visit.");
//     }
// });
