import { FaMobileButton } from "react-icons/fa6";
import { HiBell, HiFire } from "react-icons/hi";
import Badge from "./Badge";
import Container from "./Container";
import ProductiveCard from "./ProductiveCard";

const ProductivityFeatures = () => {
  return (
    <Container className={" gap-10 md:gap-16 pt-16 md:pt-28  "}>
      <div className="">
        <div className="flex flex-col items-start  gap-5">
          <Badge
            heading={"AND MORE..."}
            unicode={"🤩"}
            className={" justify-start"}
          />

          <div className="outline-none flex flex-col justify-start items-start flex-shrink-0 flex-none h-auto overflow-visible relative whitespace-pre-wrap w-full break-words z-1 max-w-[75rem]">
            <h2 className=" text-4xl lg:text-[3.5rem] font-medium tracking-[-1px] leading-[1em] text-left no-underline normal-case ">
              Explore an array of features that elevate your{" "}
              <span className="text-[#fe8162]">Productivity </span>
              to new heights
            </h2>
          </div>

          <div className="w-full flex flex-col justify-start flex-shrink-0 outline-none flex-none h-auto max-w-[34.375rem] whitespace-pre-wrap">
            <p className=" font-inter text-lg lg:text-xl font-medium text-left text-text2 tracking-[-.5px] leading-[1.5em] no-underline normal-case ">
              Discover the tools that will revolutionize the way you manage and
              optimize your operations
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-5 md:gap-10 h-min w-full overflow-visible pb-20 relative ">
        <ProductiveCard
          svgImg={
            <FaMobileButton
              className=" h-full w-full text-background"
              width={24}
              height={24}
            />
          }
          heading={"Cross-Platform Compatibility"}
          subheading={
            "Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
          }
        />
        <ProductiveCard
          svgImg={<HiBell className=" h-full w-full text-background" />}
          heading={"Stay Informed with Essential Notifications"}
          subheading={
            "Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
          }
        />
        <ProductiveCard
          svgImg={<HiFire className=" h-full w-full text-background" />}
          heading={"Secure Data Encryption at all times"}
          subheading={
            "Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
          }
        />
      </div>

      <Container>
        <div className="flex flex-col justify-center items-center gap-4">
          <Badge
            heading={"INTEGRATIONS"}
            unicode={"🛠"}
            className={"text-primary"}
          />
          <div className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto overflow-visible relative whitespace-pre-wrap w-full break-words z-1 max-w-[37.5rem]">
            <h2 className=" text-4xl lg:text-[3.5rem] font-medium tracking-[-1px] leading-[1em] text-center no-underline normal-case ">
              Enable
              <span className="text-[#fe8162]"> integration</span> with other
              popular tools and platforms
            </h2>
          </div>

          <div className="w-full flex flex-col justify-start flex-shrink-0 outline-none flex-none h-auto max-w-[28rem] whitespace-pre-wrap">
            <p className=" font-inter text-lg lg:text-xl font-medium text-center text-text2 tracking-[-.5px] leading-[1.5em] no-underline normal-case ">
              Seamlessly connect and amplify your workflow by enabling
              integration with a diverse array of widely-used tools and
              platforms.
            </p>
          </div>
          <div className=" max-w-[34.4rem] pt-14">
            <img
              src="/assets/features/managewisesearchconnect.webp"
              alt="connect app image"
              className=" w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ProductivityFeatures;
