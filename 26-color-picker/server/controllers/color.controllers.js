// server/controllers/colorController.js
import Color from '../models/color.model.js';

export const getColors = async (req, res) => {
  try {
    const colors = await Color.find();
    res.json(colors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addColor = async (req, res) => {
  const { name, hex } = req.body;

  if (!name || !hex) {
    return res.status(400).json({ message: 'Name and Hex code are required' });
  }

  const color = new Color({ name, hex });

  try {
    const newColor = await color.save();
    res.status(201).json(newColor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
