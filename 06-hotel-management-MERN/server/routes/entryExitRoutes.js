import express from 'express';
import { addGuest, checkInGuest, checkOutGuest , guestLogin} from '../controllers/entryExitController.js';

const router = express.Router();

// Route to add a new guest
router.post('/guests', addGuest);

// Route for guest login
router.post('/guests/login', guestLogin);

// Route to check in a guest
router.put('/guests/:guestId/checkin', checkInGuest);

// Route to check out a guest
router.put('/guests/:guestId/checkout', checkOutGuest);


export default router;