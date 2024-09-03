import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="bg-white w-full px-[100px] py-[30px] items-center flex justify-between">
      <div className="flex space-x-1 items-center">
        <img src={logo} alt="logo" width={75} height={50} />
        <h2 className="text-black font-semibold text-2xl">Sirimau</h2>
      </div>
      <div>Wildan</div>
    </nav>
  );
};

export default Header;
