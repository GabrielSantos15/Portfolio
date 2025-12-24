import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./GsapMarquee.estilos.css";

export default function GsapMarquee() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  const items = [
    "Front-end",
    "Power BI",
    "Análise de Dados",
    "Dashboards Interativos",
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        x: "-50%",
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "+=200%",
          scrub: 5,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <aside className="gsap-marquee-container" >
      <div className="gsap-marquee" ref={wrapperRef}>
        <div ref={contentRef}>
          {items.map((item, index) => (
            <React.Fragment key={"a" + index}>
              <span className="separator-item">{item}</span>
              <span className="separator">{"</>"}</span>
            </React.Fragment>
          ))}
          {items.map((item, index) => (
            <React.Fragment key={"b" + index}>
              <span className="separator-item">{item}</span>
              <span className="separator">{"</>"}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
}
