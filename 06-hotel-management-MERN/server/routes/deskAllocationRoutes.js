import express from 'express';
import { assignDesk, releaseDesk } from '../controllers/deskAllocationController.js';

const router = express.Router();

// Route to assign a desk to a guest
router.put('/desks/:number/assign', assignDesk);

// Route to release a desk
router.put('/desks/:number/release', releaseDesk);

export default router;