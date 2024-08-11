import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../store/api/adminApiSlice";
import { setCredentials } from "../store/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const { adminInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (adminInfo) {
      navigate("/notes");
    }
  }, [navigate, adminInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Login Successful");
      navigate("/notes");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      console.log(err);
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
          <label className="text-gray-500">Password</label>
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
          {isLoading ? (
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
