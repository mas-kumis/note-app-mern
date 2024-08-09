import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-400 w-screen h-[50px] px-[100px] flex items-center">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-white font-bold">Note App</h1>
          <div>
            <input
              type="text"
              className="h-[30px] rounded-lg focus:outline-none w-[200px] px-2"
            />
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// NavLink adalah komponen dari react-router-dom yang digunakan untuk membuat link yang mengarah ke halaman lain di dalam aplikasi.Dengan menggunakan NavLink, kita dapat menambahkan class styling khusus ketika link tersebut sedang aktif (aktif).

// Contoh penggunaannya:

// <NavLink to="/login" className={({ isActive }) => (isActive ? "font-bold" : "")}> Login </NavLink>

// Dalam contoh di atas, ketika link Login sedang aktif, class "font-bold" akan ditambahkan ke elemen tersebut.
