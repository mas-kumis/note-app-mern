import { Link } from "react-router-dom";

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
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
