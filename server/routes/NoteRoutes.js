import express from "express";
import { getNotes, createNotes } from "../controllers/NoteController.js";
const router = express.Router();

router.get("/", getNotes);
router.post("/", createNotes);

export default router;

/*  
    Route digunakan untuk mengatur tata ruang URL pada aplikasi web. 
    Ketika pengguna mengakses URL tertentu, maka aplikasi akan mengarahkan pengguna ke halaman yang sesuai. 
    Dalam kode yang telah ditulis, kita menggunakan Express.js untuk membuat route.
*/
