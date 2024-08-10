// Fungsi notFound digunakan untuk mengatasi kondisi ketika URL yang diminta tidak ditemukan oleh server.
// Fungsi ini akan membuat objek error baru dengan pesan yang mencakup URL yang diminta oleh pengguna.
// Dengan cara ini, kita dapat mengatur status respons dan pesan khusus untuk kondisi ketika URL yang diminta tidak ditemukan.
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  if (err.name === "CastError" && err.kind === "ObjectId") {
    return res.status(404).send("Resource not found");
  }
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };

// Fungsi errorHandler digunakan untuk mengatur tindakan yang akan diambil ketika terjadi error.
// Fungsi ini akan mengambil parameter error yang berasal dari error yang terjadi.
// Kita akan mengirimkan respons berupa objek berisi pesan error dan stack trace..
