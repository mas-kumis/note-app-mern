import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <section className=" mt-[30px] w-full flex items-center justify-center">
      <div className="border border-gray-200 rounded-lg p-4 w-[600px] space-y-5 px-4 flex flex-col items-center">
        <h1 className=" font-bold text-3xl">Register</h1>
        <div className="flex flex-col">
          <label className="text-gray-500" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg w-[300px]"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-500" htmlFor="username">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg w-[300px]"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-500" htmlFor="username">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg w-[300px]"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-500" htmlFor="username">
            Confirm Password
          </label>
          <input
            type="text"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg w-[300px]"
          />
        </div>
        <div className="">
          <button className="bg-blue-500 hover:bg-blue-700 p-2 w-[300px] text-white rounded-lg">
            Register
          </button>
        </div>
        <p>
          Sudah punya akun?
          <span>
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
