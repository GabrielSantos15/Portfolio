import { useState } from "react";
import "./ExperienceCard.estilos.css"

export default function ExperienceCard({ item }) {
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

  const figure = ({src,alt})=>{
    return(
      <img src={src} alt={alt} />
    )
  }

  return (
    <article className="trajectory-element" >
      <span className="trajectory-element-titulo">
        <img src={item.logo} alt={item.instituicao} className="logoIcon" />
        <span>
          <h3>{item.curso}</h3>
          <h4>
            {item.instituicao} •{" "}
            <small>
              {item.dataInicio} - {item.dataFim}
            </small>
          </h4>
        </span>
      </span>

      <div className="slide-content-wrapper">
        <article
          key={slideCurrent}
          className="slide-content animated-fade-in"
        >
          <figure>
            <img
              src={item.trajetoria[slideCurrent].img}
              alt="Foto da trajetória"
            />
          </figure>
          <div>
            <h4>{item.trajetoria[slideCurrent].titulo}</h4>
            <p>{item.trajetoria[slideCurrent].descrição}</p>
          </div>
        </article>
      </div>

      {/* BOTÕES */}
      <div className="slide-controls">
        <button onClick={handlePrev}>Voltar</button>
        <span>
          {slideCurrent + 1} / {item.trajetoria.length}
        </span>
        <button onClick={handleNext}>IR</button>
      </div>
    </article>
  );
}
