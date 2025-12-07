import { useState } from "react";
import { projects } from "../../data/projetos";
import ProjectView from "../projectView";
import "./Projects.estilos.css";

const Projects = () => {
  const [viewProject, setViewProject] = useState(null);

  return (
    <section className="projetosSection">
      <h2>Projetos</h2>
      {viewProject ? (
        <ProjectView
          projeto={viewProject}
          key={viewProject.id}
        ></ProjectView>
      ) : null}
      {/* <p>
        Ideias que viraram código, telas que ganham vida e experiências que
        funcionam de verdade
      </p> */}
      <div className="projetosContainer">
        {projects.map((projeto) => (
          <article
            className="projeto"
            onClick={() => {
              setViewProject(projeto);
            }}
          >
            <h4 className="numberProjeto">0{projeto.id}</h4>
            <figure>
              <img src={projeto.assets[0]} alt={`Projeto ${projeto.nome}`} />
            </figure>

            <div className="textContainerProjeto">
              <h3>{projeto.nome}</h3>
              <p>{projeto.descricao}</p>
            </div>
            <div className="tecnologiasContainerProjeto">
              {projeto.tecnologias.slice(0, 3).map((tec, index) => (
                <span className="tec-projeto" key={index}>
                  {tec}
                </span>
              ))}
              {projeto.tecnologias.length > 3 && (
                <span
                  className="tec-projeto contador"
                  title={projeto.tecnologias.slice(3).join(", ")}
                >
                  +{projeto.tecnologias.length - 3}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
