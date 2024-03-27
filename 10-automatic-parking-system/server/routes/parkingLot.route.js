import express from 'express';
import { getAllParkingLots, createParkingLot, bookParkingSlot } from '../controllers/parkingLot.controller.js';

const router = express.Router();

router.get('/api/parkingLots', getAllParkingLots);
router.post('/', createParkingLot);
router.post('/:id/book', bookParkingSlot);

export default router;