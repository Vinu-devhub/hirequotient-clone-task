import Badge from "./components/Badge";
import Container from "./components/Container";
import Footer from "./components/Footer";
import HappyUsers from "./components/HappyUsers";
import Hero from "./components/Hero";
import HeroImage from "./components/HeroImage";
import Navbar from "./components/Navbar";
import PremiumFeatures from "./components/PremiumFeatures";
import ProductivityFeatures from "./components/ProductivityFeatures";

const Home = () => {
  return (
    <div className=" min-h-full">
      <Navbar />
      <header className=" flex flex-col flex-none flex-nowrap h-min justify-center overflow-hidden gap-2 relative w-full pt-24">
        <Container>
          <Badge heading={"WELCOME TO MANAGE WISE!"} unicode={"👋"} />
        </Container>
        <Container>
          <Hero />
        </Container>
        <HeroImage />
      </header>
      <main className="">
        <Container className={" w-full"}>
          <PremiumFeatures />
        </Container>
        <div className={" w-full bg-color text-white"}>
          <ProductivityFeatures />
        </div>
        <HappyUsers />
      </main>
      <div className=" flex-none h-auto w-full relative">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
