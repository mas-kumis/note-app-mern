import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-[500px] w-full flex items-center justify-center">
      <div className="border border-gray-200 rounded-lg p-4 w-[600px] space-y-5 px-4 flex flex-col items-center">
        <h1 className=" font-bold text-3xl">Register</h1>
        <div>
          <label className="text-gray-500" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="border border-gray-400 p-2 rounded-lg w-[300px]"
          />
          <label className="text-gray-500" htmlFor="username">
            Password
          </label>
          <input
            type="password"
            id="username"
            placeholder="Enter your password"
            className="border border-gray-400 p-2 rounded-lg w-[300px]"
          />
          <label className="text-gray-500" htmlFor="username">
            Confirm Password
          </label>
          <input
            type="password"
            id="username"
            placeholder="Enter your password"
            className="border border-gray-400 p-2 rounded-lg w-[300px]"
          />
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 p-2 text-whote text-white rounded-lg">
            Register
          </button>
        </div>
        <p>
          Sudah punya akun?
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
