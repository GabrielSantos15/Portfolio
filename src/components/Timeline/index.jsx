import { useEffect, useRef } from "react";
import TimelineItem from "../TimelineItem";
import "./Timeline.estilos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Timeline({ titulo, data }) {
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
            start: "top 80%",
            end: "bottom 40%",
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
      <h2>{titulo}</h2>
      <div className="trajectory-container">
        <div className="timeline-central-line"></div>
        {data.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
