import express from 'express';
import {
  createNote,
  getAllNotes,
  getNoteById,
  editNote,
  deleteNote

} from '../controller/note-controller.js';
import { notePayloadSchema, noteQuerySchema } from '../validator/schema.js';
import validate from '../../../middlewires/validate.js';
import { validateQuery } from '../../../middlewires/validate.js';

const router = express.Router();

router.post('/notes', validate(notePayloadSchema), createNote);
router.get('/notes', validateQuery(noteQuerySchema), getAllNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', validate(notePayloadSchema), editNote);
router.delete('/notes/:id', deleteNote);

export default router;