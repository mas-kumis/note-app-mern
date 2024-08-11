// Ini adalah entry point dari project kita. Kita menggunakan framework Express.
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import NoteRoutes from "./routes/NoteRoutes.js";
import AdminRoutes from "./routes/AdminRoutes.js";
import connectDB from "./config/connectToDB.js";
import { notFound, errorHandler } from "./middleware/error.js";

// Memulai sebuah perintah Express dan menetapkannya ke variabel "app".
// Import dotenv, yang memungkinkan kita untuk memuat variabel lingkungan dari file .env ke dalam project kita
// "dotenv.config()" adalah function untuk menggunakan environment variables (.env).
const app = express();
dotenv.config();
connectDB();
const port = process.env.PORT;

// function yang digunakan untuk memberi tahu Express bahwa kita akan mengirimkan data JSON dari client ke server.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/api/notes", NoteRoutes);
app.use("/api/admin", AdminRoutes);
app.use(notFound);
app.use(errorHandler);
// "app.listen()" adalah metode yang digunakan untuk memulai server dan mulai mendengarkan perintah dari code kita.
// Dalam callback function ini, kita console.log yang memberitahukan kepada kita port mana yang didengarkan oleh server.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
