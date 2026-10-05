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
                        Full Stack
                    </span>

                    <span className={`liquid-glass ${styles.cardAbout}`}>
                        Dados & BI
                    </span>

                    <span className={`liquid-glass ${styles.cardAbout}`}>
                        Automação & APIs
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
                    Desenvolvedor <strong>Full Stack</strong> e profissional de <strong>Dados & Business Intelligence</strong>, com experiência em desenvolvimento web, SQL, Power BI e automação de processos. Minha trajetória também inclui experiência corporativa em <strong>Governança de TI</strong>, conectando tecnologia, dados e necessidades de negócio para criar soluções que resolvem problemas reais.
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