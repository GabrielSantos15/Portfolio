import {
  FaGithub,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaForwardStep,
  FaBackwardStep, 
} from "react-icons/fa6";
import "./ProjectView.estilo.css";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectView({ projeto }) {

  const totalImages = projeto.assets.length || 0;
  const lastImageIndex = totalImages - 1;

  const [currentScreen, SetCurrentScreen] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    SetCurrentScreen(0);
    ScrollTrigger.refresh()
  }, [projeto]);

  if (!projeto) return null;

  const handlePrev = () => {
    SetCurrentScreen((prev) => (prev > 0 ? prev - 1 : lastImageIndex));
  };

  const handleNext = () => {
    SetCurrentScreen((prev) => (prev < lastImageIndex ? prev + 1 : 0));
  };

const ScreenAsset = ({ path }) => {
    if (!path) return null;
    // Pega a extensão "
    const extension = path.split(".").pop().toLowerCase();

    if (["png", "jpg", "jpeg", "webp", "svg", "ico"].includes(extension)) {
      return (
        <img
          src={path}
          alt={`Tela ${currentScreen + 1} do projeto ${projeto.nome}`}
          className="asset-content"
        />
      );
    } else {
      return (
        <video
          src={path}
          className="asset-content"
          autoPlay
          loop
          controls
          playsInline
        ></video>
      );
    }
  };
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
          {projeto.linkRepositorio && (
            <a href={projeto.linkRepositorio} target="_blank" rel="noreferrer">
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
              <ScreenAsset path={projeto.assets[currentScreen]} />
            )}
          </div>
          <div className="tv-logo"></div>
        </div>
        <div className="tv-neck"></div>
        <div className="tv-stand"></div>
        <div className="tv-controls">
          <button onClick={handlePrev} className="btn-tv silver-reflection-bg">
            <FaChevronLeft />
          </button>
          <span>
            {currentScreen + 1} / {totalImages}
          </span>
          <button onClick={handleNext} className="btn-tv silver-reflection-bg">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
