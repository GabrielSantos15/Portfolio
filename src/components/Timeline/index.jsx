import TrajectoryElement from "../ExperienceCard";

import "./Timeline.estilos.css"; // Se tiver CSS
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Timeline({ titulo, data }) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const svg = document.querySelector(".linha-vetorial svg");
    const path = svg.querySelector("path");
    const container = document.querySelector(".trajectory-container");

    const totalLen = path.getTotalLength();

    // converte um ponto SVG (x,y) para coords de tela
    function svgPointToScreen(pt) {
      const svgPt = svg.createSVGPoint();
      svgPt.x = pt.x;
      svgPt.y = pt.y;
      const screenPt = svgPt.matrixTransform(svg.getScreenCTM());
      return screenPt;
    }

    // encontra o primeiro length onde o ponto do path crossover a Y da tela (targetScreenY)
    function findLengthAtScreenY(targetScreenY, options = {}) {
      const { samples = 200, binaryIter = 20 } = options;

      let foundLen = null;
      let prevLen = 0;
      let prevY = svgPointToScreen(path.getPointAtLength(0)).y;

      for (let i = 1; i <= samples; i++) {
        const len = (i / samples) * totalLen;
        const pt = path.getPointAtLength(len);
        const screenY = svgPointToScreen(pt).y;

        if (screenY >= targetScreenY) {
          foundLen = { lo: prevLen, hi: len, loY: prevY, hiY: screenY };
          break;
        }

        prevLen = len;
        prevY = screenY;
      }

      if (!foundLen) return totalLen;

      let lo = foundLen.lo;
      let hi = foundLen.hi;
      for (let i = 0; i < binaryIter; i++) {
        const mid = (lo + hi) / 2;
        const screenY = svgPointToScreen(path.getPointAtLength(mid)).y;
        if (screenY >= targetScreenY) {
          hi = mid;
        } else {
          lo = mid;
        }
      }

      return hi; // comprimento onde a linha cruza targetScreenY
    }

    // Função que configura/recálcula a animação
    function setup() {
      // limpa triggers existentes
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // calcula target
      const containerRect = container.getBoundingClientRect();
      const targetScreenY = containerRect.bottom;

      // comprimento do path até o ponto visível final
      const lengthAtContainerBottom = findLengthAtScreenY(targetScreenY, {
        samples: 300,
        binaryIter: 24,
      });

      const dashVisible = Math.max(0, lengthAtContainerBottom);

      gsap.set(path, {
        strokeDasharray: totalLen,
        strokeDashoffset: totalLen,
      });

      // animação só até o ponto visível
      gsap.to(path, {
        strokeDashoffset: Math.max(0, totalLen - dashVisible),
        ease: "none",
        scrollTrigger: {
          trigger: ".trajectory-container",
          start: "top 60%",
          end: "bottom bottom",
          scrub: 2,
          markers: true,
        },
      });

      // atualiza ScrollTrigger
      ScrollTrigger.refresh();
    }

    // inicializa
    setup();

    // recalc ao redimensionar (debounce simples)
    let resizeTimeout;
    function onResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setup();
      }, 120);
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="experienceSection">
      <div className="trajectory-container">
        <div className="linha-vetorial">
          <svg
            width="1312"
            height="1970"
            viewBox="0 0 1312 1970"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.760742 31.9594C265.761 24.626 804.761 19.217 985.261 76.461C1193.26 142.426 1293.63 252.96 1266.26 379.961C1239.64 503.46 1115.82 635.176 924.761 612.96C731.261 590.46 463.761 369.46 271.761 433.461C80.7968 497.116 58.7607 640.461 67.2607 760.961C75.7607 881.461 153.261 985.961 239.261 1011.46C421.261 1065.43 596.761 913.46 826.261 940.461C1073.08 969.499 1164.71 1023.91 1226.26 1095.96C1287.76 1167.96 1303.76 1259.46 1257.26 1358.46C1177.55 1528.17 866.504 1539.26 736.761 1463.46C508.261 1329.96 207.761 1262.46 94.2607 1487.46C-27.7789 1729.39 163.576 1961.83 924.761 1777.46C1069.26 1742.46 1169.76 1841.46 1169.76 1969.96"
              stroke="black"
              stroke-width="55"
            />
          </svg>
        </div>

        <h2>{titulo}</h2>

        {data.map((item) => (
          <TrajectoryElement key={item.id} item={item}></TrajectoryElement>
        ))}
      </div>
    </section>
  );
}
