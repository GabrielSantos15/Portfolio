import { useEffect, useRef } from "react";
import TimelineItem from "../TimelineItem";
import "./Timeline.estilos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Timeline({ titulo, subtitulo, data }) {
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-central-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: ".trajectory-container",
            start: "top 60%",
            end: "bottom 0%",
            scrub: true
          },
        }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={timelineRef}
      id={titulo + "Section"}
      className="trajectory-section"
    >
      <header className="section-header">
        <h2>{titulo}</h2>
        <p>{subtitulo} </p>
      </header>
      <div className="trajectory-container">
        <div className="timeline-central-line"></div>
        {data.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
