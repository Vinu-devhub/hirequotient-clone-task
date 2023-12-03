import { FaCirclePlay } from "react-icons/fa6";
const SecondaryBtn = ({ title, href, icon }) => {
  return (
    <div className=" flex-none relative w-full h-14 md:w-52">
      <div className=" contents">
        <a
          href={href}
          className=" h-full w-full opacity-100 border border-solid border-[#ddd9d4] hover:border-[#767575] rounded-[1.125rem] shadow-none transition-colors duration-500 flex flex-nowrap justify-center items-center gap-2 relative no-underline py-4 px-[1.625rem]  "
        >
          <div
            className={`flex flex-col flex-none justify-start flex-shrink-0 outline-none relative whitespace-pre h-auto w-auto`}
          >
            <p className=" font-outfit text-xl font-semibold text-color">
              {title}
            </p>
          </div>
          {icon && (
            <div className={` h-6 w-6 relative flex items-center opacity-100 `}>
              <FaCirclePlay className=" h-5 w-5" />
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default SecondaryBtn;
