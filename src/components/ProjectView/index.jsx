import { FaGithub, FaGlobe } from "react-icons/fa6";
import "./ProjectView.estilo.css";
import { useEffect, useRef } from "react";

export default function ProjectView({ projeto }) {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [projeto]);

  if (!projeto) return null;

  return (
    <section id="project-view-container" ref={sectionRef}>
      <article>
        <h2>{projeto.nome}</h2>
        <p>{projeto.descricao}</p>
        <div className="tecnologiasContainerProjeto">
          {projeto.tecnologias.map((tec, index) => (
            <span className="tec-projeto" key={index}>
              {tec}
            </span>
          ))}
        </div>
        <div className="links-project-container">
          {projeto.linkRepositorio ? (
            <a href={projeto.linkRepositorio} target="_blank">
              <button className="link-project silver-reflection-bg">
                <FaGithub /> Ver código
              </button>
            </a>
          ) : null}
          {projeto.linkProjeto ? (
            <a href={projeto.linkProjeto} target="_blank">
              <button className="link-project silver-reflection-bg">
                <FaGlobe /> Ver projeto
              </button>
            </a>
          ) : null}
        </div>
      </article>

      <div className="tv-wrapper">
        {/* 1. MOLDURA */}
        <div className="tv-bezel">
          {/* TELA */}
          <div className="tv-screen">
            <div className="tv-glare"></div>
            {/* PROJETO */}
            <img src={projeto.imagens[0]} alt="Interface do SendPro" />
          </div>

          {/*LED */}
          <div className="tv-logo"></div>
        </div>

        {/*SUPORTE*/}
        <div className="tv-neck"></div>
        <div className="tv-stand"></div>
      </div>
    </section>
  );
}
