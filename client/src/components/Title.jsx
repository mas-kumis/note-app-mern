import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div>
      <div className="my-[30px] px-[100px] flex flex-col space-y-4">
        <h4 className="text-3xl border-b-2 border-gray-200">
          Welcome to Notes
        </h4>
        <Link to="/newnotes">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[150px]">
            Create Notes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Title;
