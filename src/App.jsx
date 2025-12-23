import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

import { formacao } from "./data/formacao";
import { experiencia } from "./data/experiencia";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home></Home>
        <About></About>
        <Skills></Skills>
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
