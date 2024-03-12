import Desk from "../Models/Desk-Model.js";

// Controller function to assign a desk to a guest
export const assignDesk = async (req, res) => {
  try {
    const { number } = req.body;
    const desk = await Desk.findOneAndUpdate(
      { number },
      { occupied: true },
      { new: true }
    );
    if (!desk) {
      return res.status(404).json({ message: 'Desk not found' });
    }
    res.json(desk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to release a desk
export const releaseDesk = async (req, res) => {
  try {
    const { number } = req.params;
    const desk = await Desk.findOneAndUpdate(
      { number },
      { occupied: false },
      { new: true }
    );
    if (!desk) {
      return res.status(404).json({ message: 'Desk not found' });
    }
    res.json(desk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};