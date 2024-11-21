import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <>
      <div className="bg-[#030712]">
        <Hero />
      </div>
      <AboutMe />
      <Skill />
    </>
  );
}
