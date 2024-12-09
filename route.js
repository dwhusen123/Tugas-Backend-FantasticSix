import express from "express";
import {addNotes, getNotes, getNotesId, updateNotes, deleteNotes} from "../controller/notes.js";
const router = express.Router();

router.get("/notes", getNotes);
router.post("/notes", addNotes);
router.get("/notes/:id", getNotesId);
router.get("/notes/:id", updateNotes);
router.delete("/notes/:id", deleteNotes);

export default router;

