import image from "../assets/image.png";
import { ImNewTab } from "react-icons/im";

const RecentBlog = () => {
  return (
    <div className="px-[30px] md:px-[50px] lg:px-[100px] py-[20px]">
      <h4 className="text-[24px] font-bold my-[20px]">Recent Blog Posts</h4>
      <div className="lg:flex lg:space-x-8">
        {/* Card */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[228px] md:w-full lg:w-full bg-black">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[#6941C6] text-[14px] font-semibold py-[20px]">
            Date, 1 Jan 1900
          </p>
          <div className="flex justify-between items-center">
            <h4 className="text-[24px] font-semibold">
              UX Review Presentation
            </h4>
            <ImNewTab width={20} height={20} className="cursor-pointer" />
          </div>
          <p className="text-[#667085] my-[20px]">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[228px] md:w-full lg:w-full bg-black">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[#6941C6] text-[14px] font-semibold py-[20px]">
            Date, 1 Jan 1900
          </p>
          <div className="flex justify-between items-center">
            <h4 className="text-[24px] font-semibold">
              UX Review Presentation
            </h4>
            <ImNewTab width={20} height={20} className="cursor-pointer" />
          </div>
          <p className="text-[#667085] my-[20px]">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
