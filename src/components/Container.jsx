import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `flex flex-col flex-none flex-nowrap items-center justify-center h-min max-w-[75rem] mx-auto overflow-hidden p-0 relative w-[90%] gap-20`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
