const ProductiveCard = ({ svgImg, heading, subheading }) => {
  return (
    <div className=" flex flex-col flex-nowrap justify-start items-center gap-5 relative pt-12 pb-14 px-8 bg-[#212121] w-full h-full min-h-[24rem] border rounded-[1.88rem] border-white/5 ">
      <div className=" flex flex-none flex-nowrap justify-center items-center gap-2.5 h-min w-min relative p-3 rounded-[1.9rem] bg-primary">
        <div className=" relative h-9 w-9 ">{svgImg}</div>
      </div>
      <div className=" flex flex-none flex-nowrap flex-col justify-center items-center h-min w-full p-0 relative gap-2.5">
        <div className=" flex-none h-auto overflow-visible relative whitespace-pre-wrap w-full flex flex-col justify-start flex-shrink-0 outline-none ">
          <p className=" font-outfit text-[1.5625rem] font-semibold tracking-[-.5px] leading-[1.3em] text-center text-background  ">
            {heading}
          </p>
        </div>
        <div className=" flex-none h-auto overflow-visible relative whitespace-pre-wrap w-full outline-none flex flex-col justify-start flex-shrink-0 ">
          <p className=" font-inter text-base font-medium tracking-normal leading-[1.5em] text-center text-[#767575]">
            {subheading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductiveCard;
