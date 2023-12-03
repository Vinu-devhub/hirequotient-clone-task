import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import Container from "./Container";

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

const Footer = () => {
  return (
    <footer className=" flex justify-center items-center h-min w-full relative overflow-visible pt-20 pb-10 px-0 bg-background">
      <Container>
        <div className=" flex flex-col w-full gap-10 md:gap-40">
          <div className=" w-full h-min flex flex-col md:flex-row justify-center md:justify-between   items-center md:items-start flex-none overflow-visible p-0 relative gap-10 ">
            <div className=" flex-none overflow-visible relative w-48 h-12">
              <img
                src="/assets/logo/managewise_logo512.png"
                alt="logo"
                className=" block w-full h-full object-center object-cover"
              />
            </div>
            <div>
              <ul className=" flex flex-col justify-center gap-3 ">
                {navLinks.map(({ title, link }) => (
                  <li key={title}>
                    <div className=" flex gap-2 items-center justify-center">
                      <a href={link}>
                        <p className=" font-inter text-color hover:text-[#767575] font-medium text-center ">
                          {title}
                        </p>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" w-full flex flex-col md:flex-row gap-5 pt-5 justify-between items-center ">
            <div className=" font-inter font-medium text-base tracking-normal leading-[1.5em]">
              &copy; 2022 ManageWise, Inc.
            </div>
            <div className=" flex gap-4 ">
              <PiInstagramLogoFill className=" h-6 w-6" />
              <FaSquareXTwitter className=" h-6 w-6" />
              <FaLinkedinIn className=" h-6 w-6" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
