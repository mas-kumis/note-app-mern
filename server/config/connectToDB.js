import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Memanggil fungsi connect dari mongoose untuk terhubung ke database
    // Menggunakan URI database yang diambil dari environment variable
    // Menampilkan pesan pada console bahwa terhubung ke database
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Menampilkan pesan kesalahan jika terjadi kesalahan saat terhubung
    // Keluar dari proses dengan kode kesalahan 1
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
