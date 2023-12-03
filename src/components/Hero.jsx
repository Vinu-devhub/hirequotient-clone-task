import Button from "./Button";
import SecondaryBtn from "./SecondaryBtn";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto overflow-visible relative whitespace-pre-wrap w-full break-words z-1 max-w-[75rem] pb-8">
        <h1 className=" text-[3.375rem] lg:text-[5.3125rem] font-medium tracking-[-2px] leading-[1em] text-center no-underline normal-case ">
          Empower your business with{" "}
          <span className="text-[#fe8162]">Strategic</span> insights
        </h1>
      </div>

      <div className=" w-[90%] lg:w-full flex flex-col justify-start flex-shrink-0 outline-none flex-none h-auto max-w-[43.75rem] whitespace-pre-wrap">
        <p className=" font-inter text-lg lg:text-xl font-medium text-center text-text2 tracking-[-.5px] leading-[1.5em] no-underline normal-case ">
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </p>
      </div>

      <div className=" flex flex-col md:flex-row flex-none flex-nowrap h-min w-full md:w-min  z-[1] justify-center items-center gap-6 overflow-visible pt-8 relative ">
        <Button href={"#"} title={"Get Started"} icon={true} />
        <SecondaryBtn href={"#"} title={"Watch Demo"} icon={true} />
      </div>
    </div>
  );
};

export default Hero;
