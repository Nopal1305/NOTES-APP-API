import express from 'express';
import {
  createNote,
  getAllNotes,
  getNoteById,
  editNote,
  deleteNotes
} from '../controller/note-controller.js';
import { notePayloadSchema, noteQuerySchema } from '../validator/schema.js';
import validate from '../../../middlewires/validate.js';
import { validateQuery } from '../../../middlewires/validate.js';
import authenticateToken from '../../../middlewires/auth.js';

const router = express.Router();

router.post('/notes', authenticateToken, validate(notePayloadSchema), createNote);
router.get('/notes', authenticateToken, validateQuery(noteQuerySchema), getAllNotes);
router.get('/notes/:id', authenticateToken, getNoteById);
router.put('/notes/:id', authenticateToken, validate(notePayloadSchema), editNote);
router.delete('/notes/:id', authenticateToken, deleteNotes);

export default router;