import { useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
const Button = ({ title, href, icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className=" flex-none relative w-full h-14 md:w-52">
      <div className=" contents">
        <a
          href={href}
          className=" bg-primary h-full w-full opacity-100 rounded-[1.125rem] shadow-none hover:shadow-custom-purple transition-shadow duration-500 flex flex-nowrap justify-center items-center gap-2 relative no-underline py-4 px-[1.625rem]  "
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className={`flex flex-col flex-none justify-start flex-shrink-0 outline-none relative whitespace-pre h-auto w-auto transition-transform duration-700 ${
              hovered && icon
                ? "trasnform -translate-x-2"
                : "transform-none translate-x-2 "
            }  `}
          >
            <p className=" font-outfit text-xl font-semibold text-white">
              {title}
            </p>
          </div>
          {icon && hovered && (
            <div
              className={` h-6 w-6 relative flex items-center transition-opacity duration-500 text-white ${
                hovered ? "opacity-100 " : "opacity-0"
              } `}
            >
              <FaCircleArrowRight className=" h-5 w-5" />
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default Button;
