import express from 'express';
import { getCurrencyConversion, getAllConversions, addConversion, convertCurrency, updateConversion, deleteConversionRate } from '../controller/currency.controller.js';

const router = express.Router();

// Routes for currency conversion
router.post('/convert', convertCurrency);

router.post('/add', addConversion); // Add new conversion rate

router.put('/update', updateConversion); // Update existing conversion rate

router.get('/allconversions/', getAllConversions);

router.get('/getCurrencyConversion/:fromCurrency', getCurrencyConversion);
// Routes for deleting conversion rates
router.delete('/delete', deleteConversionRate);

export default router;