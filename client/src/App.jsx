// Ini adalah entry point utama dari project frontend.
// homepage dari namadomain.com /namaserverreact.com adalah File ini.

// React Router DOM adalah library yang digunakan untuk membuat routing pada aplikasi React.
// Routing pada aplikasi web adalah proses mengatur tau bagaimana aplikasi web menangani permintaan dari pengguna.

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
