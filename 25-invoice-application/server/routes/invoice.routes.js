import express from 'express';
import { createInvoice, getInvoices } from '../controllers/invoice.controllers.js';

const router = express.Router();

// Route to create a new invoice
router.post('/', createInvoice);

// Route to get all invoices
router.get('/', getInvoices);

export default router;
