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
            <h3>Engenharia Front-end</h3>
            <p>
              Desenvolvo interfaces que vão além do visual, com foco em{" "}
              <strong>arquitetura, SEO, acessibilidade e performance</strong>,
              garantindo produtos escaláveis e bem estruturados.
            </p>
          </div>
          <FiCode className="card-icon" />
        </div>

        <div className="service-card">
          <div className="card-content">
            <h3>UI / UX</h3>
            <p>
              Crio interfaces intuitivas, pensadas na jornada do usuário, unindo
              clareza visual, usabilidade e fluidez na navegação.
            </p>
          </div>
            <FiPenTool className="card-icon" />
        </div>

        <div className="service-card">
          <div className="card-content">
            <h3>Performance</h3>
            <p>
              Otimização de carregamento, interações e estrutura para entregar
              experiências rápidas, responsivas e eficientes.
            </p>
          </div>
          <FiZap className="card-icon" />
        </div>

        <div className="service-card">
          <div className="card-content">
            <h3>Visão de Negócio</h3>
            <p>
              Experiência em <strong> Governança de TI</strong>, alinhando código às
              necessidades reais do negócio e processos corporativos.
            </p>
          </div>
          <FiTarget className="card-icon" />
        </div>

        <div className="service-card">
          <div className="card-content">
            <h3>Dados & Decisão</h3>
            <p>
              Uso de <strong>Power BI</strong> para transformar dados em
              visualizações claras que apoiam decisões estratégicas.
            </p>
          </div>
          <FiTrendingUp className="card-icon" />
        </div>

        <div className="service-card">
          <div className="card-content">
            <h3>Soluções Digitais</h3>
            <p>
              Uso o front-end como ferramenta para resolver problemas reais e
              transformar ideias em produtos digitais funcionais.
            </p>
          </div>
          <FiLayers className="card-icon" />
        </div>
      </div>
    </section>
  );
}
