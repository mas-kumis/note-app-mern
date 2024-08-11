// Ini adalah entry point utama dari project frontend.
// homepage dari namadomain.com /namaserverreact.com adalah File ini.

// React Router DOM adalah library yang digunakan untuk membuat routing pada aplikasi React.
// Routing pada aplikasi web adalah proses mengatur tau bagaimana aplikasi web menangani permintaan dari pengguna.

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import Page from "./pages/Page";
import CreatePage from "./pages/CreatePage";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/notes"
          element={
            <PrivateRoute>
              <Page />
            </PrivateRoute>
          }
        />
        <Route path="/newnotes" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
