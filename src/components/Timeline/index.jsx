import ExperienceCard from "../ExperienceCard";

import "./Timeline.estilos.css"; // Se tiver CSS
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Timeline({ titulo, data }) {
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const linhaPath = document.querySelector(".linha-vetorial path");
  //   const comprimento = linhaPath.getTotalLength();

  //   gsap.set(linhaPath, {
  //     strokeDasharray: comprimento,
  //     strokeDashoffset: comprimento,
  //   });

  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: ".trajectory-container",
  //         start: "top 60%",
  //         end: "bottom 60%",
  //         scrub: 3,
  //         invalidateOnRefresh: true,
  //       },
  //     })
  //     .to(linhaPath, {
  //       strokeDashoffset: 0,
  //       ease: "none",
  //     });

  //   ScrollTrigger.refresh();
  // }, []);

  return (
    <section id="experienceSection">
      <div className="trajectory-container">
        {/* <div className="linha-vetorial">
<svg
  viewBox="0 0 1822 2050"
  preserveAspectRatio="xMidYMin meet"
  className="linha-svg"
>
            <path
              d="M2.81006 121.88
     C410.43 162.27 811.3 47.43 1216.76 29.97
     C1326.25 25.26 1441.55 29.04 1536.48 83.8
     C1671.26 161.55 1732.76 322.16 1767.46 473.85
     C1784.65 549 1797.79 626.12 1791.39 702.95
     C1784.99 779.78 1757.37 857.01 1702.69 911.35
     C1602.94 1010.46 1447.41 1011.43 1316.83 998.26
     C1187.31 985.2 1058.55 954.78 935.01 914.07
     C809.51 872.72 686.91 820.33 556.43 796.06
     C487.09 783.16 413.45 778.81 347.83 804.66
     C235.64 848.85 171.95 974.21 166.65 1094.67
     C157.62 1299.92 298.29 1507.2 500.63 1558.23
     C603.15 1584.08 712.77 1564.79 810.71 1524.96
     C908.65 1485.14 997.16 1425.77 1085.9 1368.28
     C1231.61 1273.88 1484.6 1104.7 1642.32 1267.79
     C1693.89 1321.11 1718.09 1396.78 1719.69 1470.94
     C1720.54 1510.49 1714.96 1551.53 1694.05 1585.11
     C1667.49 1627.77 1619.55 1652.92 1570.97 1665.82
     C1484.86 1688.7 1393.67 1678.91 1305.24 1689.86
     C1151.95 1708.83 1060.48 1804.39 1080.83 1961.81
     L1080.83 2050"
              stroke="white"
              stroke-width="55"
              fill="none"
            />
          </svg>
        </div> */}

        <h2>{titulo}</h2>

        {data.map((item) => (
          <ExperienceCard key={item.id} item={item}></ExperienceCard>
        ))}
      </div>
    </section>
  );
}
