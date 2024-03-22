import express from 'express';
import { getAllConversions, addConversion, convertCurrency, updateConversion, deleteConversionRate } from '../controller/currency.controller.js';

const router = express.Router();

// Routes for currency conversion
router.post('/convert', convertCurrency);

router.post('/add', addConversion); // Add new conversion rate

router.put('/update', updateConversion); // Update existing conversion rate

router.get('/allconversions', getAllConversions);
// Routes for deleting conversion rates
router.delete('/delete-rate', deleteConversionRate);

export default router;