import Image from "next/image";
import Hero from "./components/sections/Hero";
import Header from "./components/ui/Header";

export default function Home() {
  return (
    <main>
      <Header ></Header>
      <Hero ></Hero>
      <section style={{height: 900}}></section>
    </main>
  );
}
