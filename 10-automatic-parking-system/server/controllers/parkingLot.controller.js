import ParkingLot from '../models/ParkingLot';

export const getAllParkingLots = async (req, res) => {
    try {
        const parkingLots = await ParkingLot.find();
        res.json(parkingLots);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const createParkingLot = async (req, res) => {
    const { name, location, capacity } = req.body;
    try {
        const newParkingLot = new ParkingLot({
            name,
            location,
            capacity,
            slots: Array.from({ length: capacity }, (_, i) => ({
                slotNumber: i + 1,
                status: 'available',
                bookedBy: null
            }))
        });
        const savedParkingLot = await newParkingLot.save();
        res.status(201).json(savedParkingLot);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const bookParkingSlot = async (req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    try {
        const parkingLot = await ParkingLot.findById(id);
        if (!parkingLot) {
            return res.status(404).json({ message: 'Parking lot not found' });
        }
        const availableSlot = parkingLot.slots.find(slot => slot.status === 'available');
        if (!availableSlot) {
            return res.status(400).json({ message: 'No available slots' });
        }
        availableSlot.status = 'booked';
        availableSlot.bookedBy = username;
        await parkingLot.save();
        res.json(availableSlot);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};