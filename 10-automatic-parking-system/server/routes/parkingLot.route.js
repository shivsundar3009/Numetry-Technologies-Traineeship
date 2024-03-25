import express from 'express';
import { getAllParkingLots, createParkingLot, bookParkingSlot } from '../controllers/parkingLotController';

const router = express.Router();

router.get('/', getAllParkingLots);
router.post('/', createParkingLot);
router.post('/:id/book', bookParkingSlot);

export default router;