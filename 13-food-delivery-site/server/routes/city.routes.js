import express from 'express';
import { getAllCities, createCity } from '../controllers/city.controller.js';

const router = express.Router();

// Route to get all cities
router.get('/get', getAllCities);
router.post('/create', createCity);

export default router;