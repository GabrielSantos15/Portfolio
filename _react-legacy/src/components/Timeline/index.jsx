import { useLayoutEffect, useRef } from "react";
import TimelineItem from "../TimelineItem";
import "./Timeline.estilos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Timeline({ titulo, subtitulo, data }) {
  const timelineRef = useRef(null);
  const timelineCentraLineRef = useRef(null);
  const timelineContainerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineCentraLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: timelineContainerRef.current,
            start: "top 60%",
            end: "bottom 0%",
            scrub: true
          },
        }
      );
    }, timelineRef);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

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
      <div ref={timelineContainerRef} className="trajectory-container">
        <div ref={timelineCentraLineRef} className="timeline-central-line"></div>
        {data.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
