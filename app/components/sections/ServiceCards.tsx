import {
  FiCode,
  FiPenTool,
  FiZap,
  FiTarget,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";
import styles from "./ServiceCards.module.css";
import DataWave from "../ui/DataWave";

interface ServiceData {
  id: string;
  title: string;
  description: React.ReactNode;
  icon: React.ElementType;
}

const services: ServiceData[] = [
  {
    id: "dev-web",
    title: "Engenharia Full-Stack",
    description: (
      <>
        Arquitetura e desenvolvimento de aplicações robustas com <strong>Next.js, React, Java e Node.js</strong>. Soluções escaláveis orientadas a performance.
      </>
    ),
    icon: FiCode,
  },
  {
    id: "dados-decisao",
    title: "Análise de Dados & BI",
    description: (
      <>
        Transformação de dados brutos em inteligência acionável utilizando <strong>Python, SQL e Power BI</strong> para guiar decisões precisas.
      </>
    ),
    icon: FiTrendingUp,
  },
  {
    id: "ui-ux",
    title: "Design & Interações",
    description: "Criação de interfaces imersivas e responsivas. Foco absoluto em usabilidade, microinterações fluidas e experiência do utilizador.",
    icon: FiPenTool,
  },
  {
    id: "performance",
    title: "Otimização & SEO",
    description: "Aplicação de Clean Code, otimização rigorosa de Core Web Vitals e estratégias avançadas para máxima retenção e velocidade.",
    icon: FiZap,
  },
  {
    id: "visao-negocio",
    title: "Governança & Produto",
    description: "Alinhamento estratégico entre TI e objetivos corporativos. Automação de fluxos e processos para ganho de eficiência real.",
    icon: FiTarget,
  },
  {
    id: "aprendizado",
    title: "Arquitetura & Evolução",
    description: "Exploração constante de novos paradigmas, desenvolvimento mobile nativo e arquitetura de software orientada a escalabilidade.",
    icon: FiLayers,
  },
];

export default function ServiceCards() {
  return (
    <section className={styles.featuresSection}>

      <div className={styles.sectionDivider}>
        <span className={styles.line}></span>
        <h2 className={styles.dividerText}>ENGENHARIA, DADOS & DESIGN</h2>
        <span className={styles.line}></span>
      </div>

      <div className={styles.bentoGrid}>
        {services.map(({ id, title, description, icon: Icon }) => (
          <article key={id} className={styles.serviceCard}>
            <div className={styles.cardContent}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <Icon className={styles.cardIcon} />
          </article>
        ))}
      </div>
    </section>
  );
}