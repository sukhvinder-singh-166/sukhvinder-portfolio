import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Work from "./components/Work";
export default function Home() {
  return (
    <>
      <div className="bg-[#030712]">
        <Hero />
      </div>
      <AboutMe />
      <Skill />
      <Experience />
      <Work />
      <Footer />
    </>
  );
}
