import { GoDotFill } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

const navLinks = [
  {
    title: "Features",
    link: "#features",
  },
  {
    title: "FAQ",
    link: "#faq",
  },
  {
    title: "Pricing",
    link: "#pricing",
  },

  {
    title: "Testimonials",
    link: "#testimonials",
  },
];

const Navbar = () => {
  return (
    <div className=" flex-none h-auto w-full relative z-10">
      <div className=" contents">
        <div className=" flex flex-nowrap justify-between items-center h-min w-full relative py-4 px-6 border-b-2 border-[rgb(118 117 117 / 5%)] border-solid bg-[rgb(253, 242, 236)] transform-none origin-center opacity-100 ">
          <div className=" flex-none overflow-visible relative w-44 h-auto transform-none origin-center opacity-100">
            <div className=" top-0 right-0 bottom-0 left-0">
              <img
                src="/src/assets/logo/managewise_logo512.png"
                alt="logo"
                sizes="180px"
                className=" block w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="md:hidden">
            <button type="button">
              <IoMenu className=" h-10 w-10" />
              {/* <IoClose width={24} height={24} /> */}
            </button>
          </div>
          <div className="hidden md:flex ">
            <ul className=" flex justify-center items-center">
              {navLinks.map(({ title, link }, index) => (
                <li className=" p-[10px]" key={title}>
                  <div className=" flex gap-2 items-center">
                    <a href={link} className="">
                      <p className=" font-inter text-color hover:text-primary font-medium text-center ">
                        {title}
                      </p>
                    </a>
                    {index !== navLinks.length - 1 && (
                      <div className=" px-4 ">
                        <GoDotFill className=" h-2 w-2  " fill="#fbcbbf" />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
