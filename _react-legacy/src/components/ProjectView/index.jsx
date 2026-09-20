import {
  FaGithub,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
} from "react-icons/fa6";
import "./ProjectView.estilo.css";
import ScreenAsset from "../ScreenAsset";
import { useEffect, useState } from "react";

export default function ProjectView({ projeto, onClose }) {
  const totalImages = projeto.assets.length || 0;
  const lastImageIndex = totalImages - 1;

  const [currentScreen, SetCurrentScreen] = useState(0);

  useEffect(() => {
    SetCurrentScreen(0);
  }, [projeto]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!projeto) return null;

  const handlePrev = () => {
    SetCurrentScreen((prev) => (prev > 0 ? prev - 1 : lastImageIndex));
  };

  const handleNext = () => {
    SetCurrentScreen((prev) => (prev < lastImageIndex ? prev + 1 : 0));
  };

  return (
    <div className="overlay" onClick={onClose}>
      <section id="project-view-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>
          <FaArrowLeft /> Retornar aos projetos
        </button>
        <div className="project-content">
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
              {projeto.linkRepositorio && (
                <a
                  href={projeto.linkRepositorio}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="link-project silver-reflection-bg">
                    <FaGithub /> Ver código
                  </button>
                </a>
              )}
              {projeto.linkProjeto && (
                <a href={projeto.linkProjeto} target="_blank" rel="noreferrer">
                  <button className="link-project silver-reflection-bg">
                    <FaGlobe /> Ver projeto
                  </button>
                </a>
              )}
            </div>
          </article>

          <div className="tv-wrapper">
            <div className="tv-bezel">
              <div className="tv-screen">
                <div className="tv-glare"></div>
                {projeto.assets[currentScreen] && (
                  <ScreenAsset path={projeto.assets[currentScreen]} key={currentScreen}/>
                )}
              </div>
              <div className="tv-logo"></div>
            </div>
            <div className="tv-neck"></div>
            <div className="tv-stand"></div>
            <div className="tv-controls">
              <button onClick={handlePrev} className="btn-tv">
                <FaChevronLeft />
              </button>
              <div className="dots">
                {Array.from({ length: totalImages }).map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentScreen ? "active" : ""}`}
                  />
                ))}
              </div>
              <button onClick={handleNext} className="btn-tv">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
