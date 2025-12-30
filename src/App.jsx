import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

import Projects from "./components/Projects";

import { formacao } from "./data/formacao";
import { experiencia } from "./data/experiencia";
import Header from "./components/Header";
import Contact from "./components/Contact";
import SkillsMarquee from "./components/SkillsMarquee";
import Timeline from "./components/Timeline";
import ServiceCards from "./components/ServiceCards";
import GsapMarquee from "./components/GsapMarquee";
import { useEffect, useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

    useEffect(() => {
      document.body.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Home darkMode={darkMode}></Home>
        <About></About>
        <SkillsMarquee></SkillsMarquee>
        <ServiceCards></ServiceCards>
        <GsapMarquee></GsapMarquee>
        <Projects></Projects>
        <Timeline titulo={"Experiência"} subtitulo={`Vivência corporativa que converte aprendizado em resultados, construindo sistemas eficientes através de colaboração e inovação.`}  data={experiencia}></Timeline>
        <Timeline titulo={"Formação"} subtitulo={`
          Formação que conecta conhecimento, prática e visão de futuro para
          criar tecnologia com propósito.
       `} data={formacao}></Timeline>
        <Contact/>
      </main>
    </>
  );
}

export default App;
