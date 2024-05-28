import Invoice from '../models/invoice.model.js';

// Create a new invoice
export const createInvoice = async (req, res) => {
  try {
    const { clientName, clientEmail, productName, price, soldBy } = req.body;

    const newInvoice = new Invoice({
      clientName,
      clientEmail,
      productName,
      price,
      soldBy,
    });

    await newInvoice.save();
    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all invoices
export const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
