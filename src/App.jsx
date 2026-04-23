import "./App.css";
import Hero from "./components/Hero";
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
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About />
        <SkillsMarquee />
        <ServiceCards />
        <GsapMarquee />
        <Projects />
        <Timeline
          titulo={"Experiência"}
          subtitulo={
            "Vivência corporativa que converte aprendizado em resultados, construindo sistemas eficientes através de colaboração e inovação."
          }
          data={experiencia}
        />
        <Timeline
          titulo={"Formação"}
          subtitulo={`
          Formação que conecta conhecimento, prática e visão de futuro para
          criar tecnologia com propósito.
       `}
          data={formacao}
        />
        <Contact />
      </main>
    </>
  );
}

export default App;
