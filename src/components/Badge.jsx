import { twMerge } from "tailwind-merge";

const Badge = ({ heading, unicode, className }) => {
  return (
    <div className={twMerge(` w-full flex justify-center`, className)}>
      <div className=" flex justify-center items-center gap-2 h-min min-w-min px-2.5 relative border border-solid border-[#8247ff33] bg-white opacity-100 rounded-lg ">
        <span className=" flex-none text-lg font-semibold ">{unicode}</span>{" "}
        <span className=" flex-none text-xs font-semibold text-primary uppercase tracking-[0.08em] ">
          {heading}
        </span>
      </div>
    </div>
  );
};

export default Badge;
