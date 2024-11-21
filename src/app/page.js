import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <div className="bg-[#030712]">
        <Hero />
      </div>
      <AboutMe />
    </>
  );
}
