import Image from "next/image";
import styles from "./About.module.css";
import DataWave from "../ui/DataWave";

export default function About() {

    const isWorkana = process.env.NEXT_PUBLIC_PORTFOLIO_VARIANT === "workana";

    return (
        <section className={styles.aboutSection}>
            <div className={styles.glitchWrapper}>
                <figure className={styles.figure}>
                    <div className={styles.imageMask}>
                        <Image src="/assets/a.png" width={700} height={700} alt="Foto do Gabriel" />
                    </div>

                    <span className={`liquid-glass ${styles.cardAbout}`}>
                        UX Eficiente
                    </span>
                    <span className={`liquid-glass ${styles.cardAbout}`}>
                        SEO & Performance
                    </span>
                    <span className={`liquid-glass ${styles.cardAbout}`}>
                        Experiência com Valor
                    </span>
                    <svg
                        className={styles.techRing}
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient
                                id="tech-gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                                <stop offset="100%" stopColor="#FFF" stopOpacity="1" />
                            </linearGradient>
                        </defs>

                        {/* O Círculo */}
                        <circle
                            cx="50"
                            cy="50"
                            r="48"
                            fill="none"
                            stroke="url(#tech-gradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="200 300"
                        />
                    </svg>
                </figure>
            </div>
            <article className={styles.article}>
                <h1>Gabriel dos Santos</h1>
                <p>
                    Desenvolvedor focado em performance, UX e arquitetura escalável. Minha
                    atuação une <strong>desenvolvimento web, análise de dados e governança de TI</strong>.
                    O objetivo é integrar tecnologia e inteligência de negócios para criar
                    produtos modernos e resolver problemas reais.
                </p>
                {
                    !isWorkana &&
                    <a href="/Gabriel dos Santos - Desenvolvedor de Software.pdf" download>
                        <button className={`${styles.downloadCv} silver-reflection-bg`}>
                            Download CV
                        </button>
                    </a>
                }
            </article>

        </section >
    );
}