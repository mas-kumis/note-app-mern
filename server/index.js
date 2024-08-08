// Ini adalah entry point dari project kita. Kita menggunakan framework Express.
import express from "express";
import dotenv from "dotenv";

// Memulai sebuah perintah Express dan menetapkannya ke variabel "app".
const app = express();

// Import dotenv, yang memungkinkan kita untuk memuat variabel lingkungan dari file .env ke dalam project kita
// "dotenv.config()" adalah function untuk menggunakan environment variables (.env).
dotenv.config();
const port = process.env.PORT;

// "app.listen()" adalah metode yang digunakan untuk memulai server dan mulai mendengarkan perintah dari code kita.
// Dalam callback function ini, kita console.log yang memberitahukan kepada kita port mana yang didengarkan oleh server.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
