import Image from "next/image";
import Hero from "./components/sections/Hero";
import Header from "./components/ui/Header";
import About from "./components/sections/About";
import SkillsMarquee from "./components/sections/SkillsMarquee";
import ServiceCards from "./components/sections/ServiceCards";

export default function Home() {
  return (
    <main>
      <Header ></Header>
      <Hero ></Hero>
      <About></About>
      <SkillsMarquee></SkillsMarquee>
      <ServiceCards></ServiceCards>
      <section style={{ height: 900 }}></section>
    </main>
  );
}
