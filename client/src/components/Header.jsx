import logo from "../assets/logo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white w-full px-[30px] md:px-[50px] lg:px-[100px] py-[20px]">
      <div className=" items-center flex justify-between">
        <div className="flex space-x-1 items-center">
          <img src={logo} alt="logo" width={50} height={30} />
          <h2 className="text-black font-semibold text-2xl">SIRIMAU</h2>
        </div>
        <div className="block md:hidden">
          <button onClick={() => setOpen(!open)}>
            <GiHamburgerMenu
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </button>
        </div>
        <ul className="  space-x-4 items-center hidden md:flex">
          <li className="text-black  font-semibold cursor-pointer">Home</li>
          <li className="text-black  font-semibold cursor-pointer">About</li>
          <li className="text-black font-semibold cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className={open ? "block md:hidden" : "hidden "}>
        <ul className=" items-center my-4">
          <li className="text-black font-semibold cursor-pointer">Home</li>
          <li className="text-black  font-semibold cursor-pointer">About</li>
          <li className="text-black  font-semibold cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
