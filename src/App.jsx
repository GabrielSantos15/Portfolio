import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline/INDEX.JSX";

import { formacao } from "./data/formacao";
import { experiencia } from "./data/experiencia";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Timeline titulo={"Experiencia"} data={experiencia}></Timeline>
        <Timeline titulo={"Formação"} data={formacao}></Timeline>
        <section style={{ height: 900 }}></section>
      </main>
    </>
  );
}

export default App;
