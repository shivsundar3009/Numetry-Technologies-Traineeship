// server/routes/colorRoutes.js
import express from 'express';
import { getColors, addColor } from '../controllers/color.controllers.js';

const router = express.Router();

router.get('/colors', getColors);
router.post('/colors', addColor);

export default router;
