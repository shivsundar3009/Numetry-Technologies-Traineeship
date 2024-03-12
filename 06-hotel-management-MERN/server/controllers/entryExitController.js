import Guest from '../models/Guest-Model.js';

// Controller function to add a new guest
export const addGuest = async (req, res) => {
  try {
    const { name } = req.body;
    const guest = await Guest.create({ name });
    res.status(201).json(guest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to check in a guest
export const checkInGuest = async (req, res) => {
  try {
    const { guestId } = req.params;
    const guest = await Guest.findByIdAndUpdate(
      guestId,
      { checkedIn: true, checkInTime: new Date() },
      { new: true }
    );
    res.json(guest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to check out a guest
export const checkOutGuest = async (req, res) => {
  try {
    const { guestId } = req.params;
    const guest = await Guest.findByIdAndUpdate(
      guestId,
      { checkedIn: false, checkOutTime: new Date() },
      { new: true }
    );
    // Calculate stay duration and update guest record
    if (guest.checkInTime && guest.checkOutTime) {
      const stayDuration = Math.abs(guest.checkOutTime - guest.checkInTime) / (1000 * 60 * 60 * 24);
      guest.stayDuration = stayDuration;
      await guest.save();
    }
    res.json(guest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};