const ImageCard = ({ imgsrc, title, subtitle }) => {
  return (
    <div className=" w-full h-full relative justify-self-start self-start max-w-full ">
      <div className=" flex flex-col items-center justify-center h-min overflow-hidden gap-0 relative will-change-transform w-full max-w-full border border-solid border-[#EDEDFA] rounded-[1.25rem]">
        <div className=" aspect-square flex-none h-72 w-full relative rounded-[1.25rem]">
          <img
            src={imgsrc}
            alt={`${title}-image`}
            className=" block w-full h-full md:scale-100 object-center object-cover"
          />
        </div>
        <div className=" flex flex-none flex-col items-start justify-end relative w-full gap-0.5 md:gap-2.5 pt-4 pb-5 md:py-8 px-7 ">
          <h3 className=" text-[1.375rem] md:text-[1.5625rem] font-semibold tracking-[-.5px] leading-[1.3em] text-left text-color ">
            {title}
          </h3>
          <p className=" font-inter text-base font-medium tracking-normal leading-[1.5em] text-start text-text2 ">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
