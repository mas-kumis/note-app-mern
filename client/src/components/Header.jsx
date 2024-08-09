import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[500px] w-full flex items-center justify-center">
      <div className="border border-gray-200 rounded-lg p-4 w-[600px] space-y-5 px-4 flex flex-col items-center">
        <h1 className=" font-bold text-3xl">Note App</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quasi
          commodi nulla fuga perferendis eius amet totam at, dolores magnam hic
          rem! Laborum nemo magnam rem ad, numquam harum placeat.
        </p>
        <div className="flex space-x-4 ">
          <Link to="login">
            <button className="bg-blue-500 hover:bg-blue-700 p-2 text-whote text-white rounded-lg">
              Login
            </button>
          </Link>
          <Link to="register">
            <button className="bg-blue-500 hover:bg-blue-700 p-2 text-whote text-white rounded-lg">
              Register
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

//    Link react-router-dom adalah komponen yang digunakan untuk membuat link atau tautan pada aplikasi react.
//    Dengan menggunakan link ini, kita dapat membuat navigasi antar halaman pada aplikasi kita.
//    Contoh penggunaannya seperti berikut:

//    <Link to="/login">Login</Link>

//    Kode di atas akan membuat link yang dapat diklik untuk mengarahkan pengguna ke halaman login.
//    Jika pengguna mengklik link tersebut, maka halaman yang ditampilkan pada aplikasi akan diganti menjadi halaman login.
//    Properti `to` digunakan untuk menentukan halaman yang ingin dituju.
