import Image from "next/image";
import Hero from "./components/sections/Hero";
import Header from "./components/ui/Header";
import About from "./components/sections/About";
import SkillsMarquee from "./components/sections/SkillsMarquee";

export default function Home() {
  return (
    <main>
      <Header ></Header>
      <Hero ></Hero>
      <About></About>
      <SkillsMarquee></SkillsMarquee>
      <section style={{height: 900}}></section>
    </main>
  );
}
