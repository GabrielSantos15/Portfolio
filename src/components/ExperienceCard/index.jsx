import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "./ExperienceCard.estilos.css";

export default function ExperienceCard({ item , key}) {
  const [slideCurrent, SetSlideCurrent] = useState(0);

  const handlePrev = () => {
    SetSlideCurrent((prev) =>
      prev > 0 ? prev - 1 : item.trajetoria.length - 1
    );
  };

  const handleNext = () => {
    SetSlideCurrent((prev) =>
      prev < item.trajetoria.length - 1 ? prev + 1 : 0
    );
  };

  const figure = ({ src, alt }) => {
    return <img src={src} alt={alt} />;
  };

  return (
    <article key={key} className="trajectory-element">
      <span className="trajectory-element-titulo">
        <img src={item.logo} alt={item.instituicao} className="logoIcon" />
        <span>
          <h3>{item.titulo}</h3>
          <h4>
            {item.instituicao} •{" "}
          </h4>
        </span>
      </span>

      <div className="slide-content-wrapper">
        <article key={slideCurrent} className="slide-content animated-fade-in">
          <figure>
            <div>
              <h4>{item.trajetoria[slideCurrent].titulo}</h4>
            </div>
            <img
            width={700}
            src={item.trajetoria[slideCurrent].img}
            alt="Foto da trajetória"
            />
            <p>{item.trajetoria[slideCurrent].descrição}</p>
          </figure>
        </article>
      </div>
      <div className="skills-experience">
        {item.skills.map((skill) => (
          <span className="tec-projeto">{skill}</span>
        ))}
      </div>
      {/* BOTÕES */}
      <div className="slide-controls">
        <span>
          {slideCurrent + 1} / {item.trajetoria.length}
        </span>
        <div>
          <button onClick={handlePrev} className="silver-reflection-bg">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="silver-reflection-bg">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </article>
  );
}
