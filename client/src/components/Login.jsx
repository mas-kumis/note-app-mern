import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const adminInfo = localStorage.getItem("adminInfo");
    if (adminInfo) {
      navigate("/notes");
    }
  }, [navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/admin/auth",
        { email, password },
        config
      );
      localStorage.setItem("adminInfo", JSON.stringify(data));
      setLoading(false);
      toast.success("Login Successful");
      navigate("/notes");
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message || error.error);
    }
  };

  return (
    <section className="h-[500px] w-full flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="border border-gray-200 rounded-lg p-4 w-[600px] space-y-5 px-4 flex flex-col items-center justify-center"
      >
        <h1 className=" font-bold text-3xl">Login</h1>
        {/*div for input email */}
        <div className="flex flex-col">
          <label className="text-gray-500">E-mail</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg w-[300px]"
          />
        </div>
        {/*div for input password */}
        <div className="flex flex-col">
          <label className="text-gray-500">COnfirm Pasword</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg w-[300px]"
          />
        </div>
        {/*div for button */}
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
              Login
            </button>
          )}
        </div>
        {/*div for paragraph optionol */}
        <p>
          Belum punya akun?
          <span>
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login;
