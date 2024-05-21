// routes/institutionRoutes.js
import express from 'express';
import { createInstitution, getAllInstitutions, getInstitutionById, updateInstitutionById, deleteInstitutionById } from '../controllers/institution.controllers.js';

const router = express.Router();

router.post('/', createInstitution);
router.get('/', getAllInstitutions);
router.get('/:id', getInstitutionById);
router.put('/:id', updateInstitutionById);
router.delete('/:id', deleteInstitutionById);

export default router;
