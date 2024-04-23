// routes/weatherRoutes.js
import express from 'express';
import { createWeatherData, getWeatherDataByCity, getAllWeatherData } from '../controllers/weather.controllers.js';

const router = express.Router();

router.post('/', createWeatherData);
router.get('/:city', getWeatherDataByCity);
router.get('/', getAllWeatherData);

export default router;
