import Event from '../models/event.model.js'

// Controller to create a new event
export const createEvent = async (req, res) => {
  try {
    const { title, start, end } = req.body;
    const event = await Event.create({ title, start, end });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update an event
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, start, end } = req.body;
    const event = await Event.findByIdAndUpdate(id, { title, start, end }, { new: true });
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete an event
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
