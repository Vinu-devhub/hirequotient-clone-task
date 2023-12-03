import Badge from "./Badge";
import ImageCard from "./ImageCard";

const PremiumFeatures = () => {
  return (
    <div className=" py-14 md:pt-20 md:pb-32 flex flex-col items-center justify-center gap-14">
      <div className="flex flex-col justify-center items-center gap-4">
        <Badge heading={"PREMIER FEATURES"} unicode={"🔥"} />
        <div className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto overflow-visible relative whitespace-pre-wrap w-full break-words z-1 max-w-[75rem]">
          <h2 className=" text-4xl lg:text-[3.5rem] font-medium tracking-[-1px] leading-[1em] text-center no-underline normal-case ">
            Discover our product&apos;s{" "}
            <span className="text-[#fe8162]">Capabilities</span>
          </h2>
        </div>

        <div className="w-full flex flex-col justify-start flex-shrink-0 outline-none flex-none h-auto max-w-[37.5rem] whitespace-pre-wrap">
          <p className=" font-inter text-lg lg:text-xl font-medium text-center text-text2 tracking-[-.5px] leading-[1.5em] no-underline normal-case ">
            Don&apos;t settle for mediocrity - embrace the future of management
            with Manage Wise.
          </p>
        </div>
      </div>

      {/* Cards */}

      <div className=" flex flex-col justify-center items-center gap-14">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className=" flex-none h-auto w-full max-w-[46.875rem] relative ">
            <div className=" flex flex-col flex-nowrap justify-center items-start h-min w-full max-w-full bg-background rounded-[1.25rem] gap-2.5  relative pt-20 pb-9 px-10 ">
              <div className=" flex justify-center items-center p-2.5 overflow-hidden gap-2.5 h-12 w-12 relative bg-white rounded-[1.2rem]">
                <div>
                  <p className=" text-3xl font-semibold">⭐</p>
                </div>
              </div>
              <div>
                <h3 className=" text-[1.6875rem] md:text-[2.625rem] font-medium text-left tracking-[-1px] leading-[1.3em]">
                  Boost productivity and streamline workflow with us. Enjoy our
                  intuitive interface and robust features.
                </h3>
              </div>
            </div>
          </div>
          <ImageCard
            imgsrc={"/assets/features/taskmanagement.webp"}
            title={"Smart Task Management"}
            subtitle={
              "Say goodbye to chaos with our smart task management system"
            }
          />
        </div>

        <div className=" grid grid-flow-row md:grid-flow-col gap-5 md:gap-10 col-span-1">
          <ImageCard
            imgsrc={"/assets/features/flexscheduling.webp"}
            title={"Flexible Scheduling"}
            subtitle={"Stay productive with our flexible scheduling system"}
          />
          <ImageCard
            imgsrc={"/assets/features/easycommunication.webp"}
            title={"Easy Communication"}
            subtitle={"Collaborate seamlessly with your team in real-time"}
          />
          <ImageCard
            imgsrc={"/assets/features/analytics.webp"}
            title={"Analytics"}
            subtitle={
              "Gain valuable insights with our advanced analytics feature"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatures;
