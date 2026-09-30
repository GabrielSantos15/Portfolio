import Image from "next/image";
import Hero from "./components/sections/Hero";
import Header from "./components/ui/Header";
import About from "./components/sections/About";

export default function Home() {
  return (
    <main>
      <Header ></Header>
      <Hero ></Hero>
      <About></About>
      <section style={{height: 900}}></section>
    </main>
  );
}
