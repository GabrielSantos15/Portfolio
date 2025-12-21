import { useEffect, useRef, useState } from "react";
import {
  FaGlobe,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
  FaDiamond,
} from "react-icons/fa6";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./TimelineItem.estilos.css";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineItem({ item }) {
  const [slideCurrent, setSlideCurrent] = useState(0);
  const itemRef = useRef(null);
  const dataRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(dataRef.current, {
        width: 0,
        opacity: 0,
        scrollTrigger: {
          trigger: dataRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.6,
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
      <div className="timeline-item-instituicao">
        <div className="timeline-item-titulo ">
          <img src={item.logo} alt={item.instituicao} className="logoIcon" />
          <span>
            <h3>{item.titulo}</h3>
            <nav>
              {item.site ? (
                <a href={item.site} rel="noopener noreferrer" target="blank">
                  <FaGlobe />
                </a>
              ) : null}
              {item.linkedin ? (
                <a
                  href={item.linkedin}
                  rel="noopener noreferrer"
                  target="blank"
                >
                  <FaLinkedin />
                </a>
              ) : null}
            </nav>
          </span>
        </div>
        <p>{item.fraseImpacto}</p>
        <div className="skills-timeline">
          {item.skills.map((skill, i) => (
            <span key={i} className="tec-projeto">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div ref={dataRef} className="timeline-item-period">
        <span className="period-bullet"></span>
        <span className="period-date">
          {item.dataInicio} - {item.dataFim}
        </span>
      </div>

      <div className="timeline-item-cards">
        <article
          key={slideCurrent}
          className="slide-content-wrapper slide-content animated-fade-in"
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
            <p>{item.trajetoria[slideCurrent].descricao}</p>
          </div>
        </article>

        <div className="slide-controls">
          <button onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <span>
            {slideCurrent + 1} / {item.trajetoria.length}
          </span>

          <button onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </article>
  );
}
