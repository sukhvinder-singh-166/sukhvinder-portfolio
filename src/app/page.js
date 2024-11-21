import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
export default function Home() {
  return (
    <>
      <div className="bg-[rgb(3,7,18)]">
        <Hero />
      </div>
      <AboutMe />
      <Skill />
      <Experience />
    </>
  );
}
