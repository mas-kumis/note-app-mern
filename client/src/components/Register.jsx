import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/admin/register",
        { name, email, password },
        config
      );
      localStorage.setItem("adminInfo", JSON.stringify(data));
      toast.success(data.message);
      setLoading(false);
      navigate("/notes");
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message || error.error);
    }
  };
  return (
    <section className=" mt-[30px] w-full flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="border border-gray-200 rounded-lg p-4 w-[600px] space-y-5 px-4 flex flex-col items-center"
      >
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
            type="password"
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
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg w-[300px]"
          />
        </div>
        <div className="">
          {loading ? (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 p-2 w-[300px] text-white rounded-lg"
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 p-2 w-[300px] text-white rounded-lg"
            >
              Register
            </button>
          )}
        </div>
        <p>
          Sudah punya akun?
          <span>
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </span>
        </p>
      </form>
    </section>
  );
};

export default Register;
