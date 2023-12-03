import Badge from "./Badge";
import Button from "./Button";
import Container from "./Container";

const HappyUsers = () => {
  return (
    <div className=" py-14">
      <Container>
        <div className=" flex flex-col md:flex-row justify-center items-center gap-20 md:gap-5 pt-24 pb-8 ">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-4 max-w-[31.5rem] p-8 md:p-0">
            <Badge
              heading={"DON'T MISS OUT"}
              unicode={"👋"}
              className={" md:justify-start"}
            />
            <div className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto overflow-visible relative whitespace-pre-wrap w-full break-words z-1 max-w-full">
              <h2 className=" text-4xl lg:text-[3.5rem] font-medium tracking-[-1px] leading-[1em] text-center md:text-left no-underline normal-case ">
                Unleash your <span className="text-[#fe8162]">Potential</span>{" "}
                with us
              </h2>
            </div>

            <div className=" flex flex-col justify-center md:justify-start flex-shrink-0 outline-none h-auto w-full max-w-[70%]  whitespace-pre-wrap">
              <p className=" font-inter text-lg lg:text-xl font-medium text-center md:text-left text-text2 tracking-[-.5px] leading-[1.5em] no-underline normal-case ">
                Join our community of ambitious individuals and organizations
                eager to make a difference.
              </p>
            </div>
            <div className=" w-52 md:w-full">
              <Button title={"Try out now"} href={"#"} icon={true} />
            </div>
          </div>
          <div className=" max-w-md">
            <p className=" font-outfit text-center text-2xl font-semibold ">
              <span className=" text-primary">200+</span> Happy users
            </p>
            <img
              src="/src/assets/features/happyusersmanagewise.webp"
              alt="users"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HappyUsers;
