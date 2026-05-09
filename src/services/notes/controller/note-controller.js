import NoteRepositories from '../repositories/note-repositories.js';
import { InvariantError, NotFoundError } from '../../../exception/index.js';
import response from '../../../utils/response.js';

export const createNote = async (req, res, next) => {
  const { title, tags, body } = req.validated;
  const note = await NoteRepositories.createNote({
    title,
    body,
    tags
  });


  if (!note) {
    return next(new InvariantError('Catatan gagal ditambahkan'));
  }

  return response(res, 201, 'Catatan berhasil ditambahkan', note);
};

export const getAllNotes = async (req, res) => {
  const notes = await NoteRepositories.getNotes();
  return response(res, 200, 'success', notes);
};

export const getNoteById = async (req, res, next) => {
  const { id } = req.params;
  const note = await NoteRepositories.getNotebyId(id);

  if (!note) {
    return next(new NotFoundError('Catatan tidak ditemukan'));
  }

  return response(res, 200, 'Catatan sukses ditampilkan', note);
};

export const editNote = async (req, res, next) => {
  const { id } = req.params;
  const { title, tags, body } = req.validated;

  const note = await NoteRepositories.editNote({
    id,
    title,
    body,
    tags
  });

  if (!note) {
    return next(new NotFoundError('Catatan tidak ditemukan'));
  }

  return response(res, 200, 'Catatan berhasil diperbarui', note);
};

export const deleteNoteById = async (req, res, next) => {
  const { id } = req.params;
  const deleteNote = await NoteRepositories.deleteNote(id);

  if (!deleteNote) {
    return next(new NotFoundError('Catatan tidak ditemukan'));
  }

  return response(res, 200, 'Catatan berhasil dihapus', deleteNote);
};