// routes/adminRoutes.js
import express from 'express';
import { updateAdminById } from '../controllers/admin.controllers.js';

const router = express.Router();

// Route to update admin by ID
router.put('/:id', updateAdminById);

export default router;
