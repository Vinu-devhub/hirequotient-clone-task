import Container from "./Container";

const HeroImage = () => {
  return (
    <Container className={" py-12  md:pt-[3.75rem] md:pb-[6.25rem] "}>
      <div className="  shadow-heroShadow origin-hero-transform flex flex-grow flex-shrink-0 flex-col flex-nowrap justify-center items-center gap-[10px] max-w-[75rem] overflow-hidden p-0 relative w-full will-change-transform z-[1] rounded-[1.6875rem]">
        <div className="">
          <img
            src="/assets/hero/managewise_heroimg.webp"
            alt="hero-image"
            srcSet="/assets/hero/managewisehero512.webp 512w, /assets/hero/managewisehero1024.webp 1024w, /assets/hero/managewisehero2048.webp 2048w, /assets/hero/managewisehero4096.webp 4096w"
            className=" block w-full h-full object-center object-contain "
            sizes="min(90vw, 75rem)"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroImage;
