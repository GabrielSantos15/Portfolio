import {
  FiCode,
  FiPenTool,
  FiZap,
  FiTarget,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";
import "./ServiceCards.estilos.css";

export default function ServiceCards() {
  return (
    <section className="features-section">
      <div className="bento-grid">
        <div className="service-card">
  <div className="card-content">
    <h3>Desenvolvimento Web</h3>
    <p>
      Desenvolvimento de aplicações modernas utilizando
      <strong> React, Next.js, Java, Node.js e APIs REST</strong>,
      criando soluções funcionais, escaláveis e orientadas ao usuário.
    </p>
  </div>
  <FiCode className="card-icon" />
</div>

<div className="service-card">
  <div className="card-content">
    <h3>UI / UX</h3>
    <p>
      Criação de interfaces intuitivas e responsivas, com foco em
      usabilidade, acessibilidade e experiência do usuário.
    </p>
  </div>
  <FiPenTool className="card-icon" />
</div>

<div className="service-card">
  <div className="card-content">
    <h3>Performance</h3>
    <p>
      Aplicação de boas práticas de desenvolvimento, otimização de
      performance, SEO e manutenção de código limpo e organizado.
    </p>
  </div>
  <FiZap className="card-icon" />
</div>

<div className="service-card">
  <div className="card-content">
    <h3>Visão de Negócio</h3>
    <p>
      Experiência em Governança de TI, automação de processos e
      alinhamento entre tecnologia e necessidades de negócio.
    </p>
  </div>
  <FiTarget className="card-icon" />
</div>

<div className="service-card">
  <div className="card-content">
    <h3>Dados & Decisão</h3>
    <p>
      Construção de dashboards e análise de indicadores utilizando
      <strong> SQL e Power BI</strong> para apoiar tomadas de decisão.
    </p>
  </div>
  <FiTrendingUp className="card-icon" />
</div>

<div className="service-card">
  <div className="card-content">
    <h3>Aprendizado Contínuo</h3>
    <p>
      Interesse constante por novas tecnologias, arquitetura de software,
      cloud, IA e desenvolvimento full stack.
    </p>
  </div>
  <FiLayers className="card-icon" />
</div>
      </div>
    </section>
  );
}
