"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./GsapMarquee.module.css";
import { FiActivity, FiCpu, FiHexagon } from "react-icons/fi";
import { BiDiamond } from "react-icons/bi";
import { TbSparkles } from "react-icons/tb";

export default function GsapMarquee() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

const items: string[] = [
    "Desenvolvimento",
    "Business Intelligence",
    "Automação",
    "Pensamento Analítico",
];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (contentRef.current) {
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
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <aside className={styles.gsapMarqueeContainer}>
      <div className={styles.gsapMarquee} ref={wrapperRef}>
        <div ref={contentRef} className={styles.marqueeContent}>
          {items.map((item, index) => (
            <React.Fragment key={"a" + index}>
              <span className={styles.separatorItem}>{item}</span>
              <span className={styles.separator}>{"✦"}</span>
            </React.Fragment>
          ))}
          {items.map((item, index) => (
            <React.Fragment key={"b" + index}>
              <span className={styles.separatorItem}>{item}</span>
              <span className={styles.separator}>{"✦"}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
}