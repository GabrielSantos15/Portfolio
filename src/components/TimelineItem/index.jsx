import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "./TimelineItem.estilos.css";

export default function TimelineItem({ item }) {
  const [slideCurrent, setSlideCurrent] = useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(".timeline-item-data", {
        boxShadow: "0 0 10px #ffffff7c, 0 0 15px #F350C2, 0 0 20px #9025CB",
        duration: 0.6,
        filter: "grayscale(0)",
        scale: 1,
        scrollTrigger: {
          trigger: ".timeline-item-data",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          markers: true,
        },
      });
    }, itemRef);

    return () => ctx.revert();
  }, []);

  const handlePrev = () => {
    setSlideCurrent((prev) =>
      prev > 0 ? prev - 1 : item.trajetoria.length - 1
    );
  };

  const handleNext = () => {
    setSlideCurrent((prev) =>
      prev < item.trajetoria.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <article ref={itemRef} className="timeline-item">
      <div className="timeline-item-titulo">
        <img src={item.logo} alt={item.instituicao} className="logoIcon" />

        <span>
          <h3>{item.titulo}</h3>
          <h4>{item.instituicao}</h4>
        </span>

        <div className="skills-experience">
          {item.skills.map((skill, i) => (
            <span key={i} className="tec-projeto">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <span className="timeline-item-data">
        {item.dataInicio} - {item.dataFim}
      </span>

      <div className="timeline-item-descricao">
        <div className="slide-content-wrapper">
          <article
            key={slideCurrent}
            className="slide-content animated-fade-in"
          >
            <figure>
              <img
                width={700}
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
      </div>
    </article>
  );
}
