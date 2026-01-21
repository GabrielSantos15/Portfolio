import Foto from "../../assets/Gabriel_foto.png";
import "./About.estilos.css";

export default function About() {
  return (
    <section id="AboutSection">
      <figure>
        <img src={Foto} width={700} alt="Foto do Gabriel" />
        <span className="liquid-glass card-about">UX Eficiente</span>
        <span className="liquid-glass card-about">SEO & Performance</span>
        <span className="liquid-glass card-about">Experiência com Valor</span>
        <svg className="tech-ring" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--corTema)" stopOpacity="0" />
        <stop offset="100%" stopColor="var(--corTema)" stopOpacity="1" />
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
      <article>
        <h1>Gabriel dos Santos</h1>
        <p>
          Minha atuação vai além da estética: foco na engenharia por trás da
          interface, priorizando
          <strong> acessibilidade, SEO e performance</strong> para garantir que
          o produto não seja apenas bonito, mas funcional e escalável. Busco
          oportunidades onde possa aplicar conceitos de Clean Code e tecnologias
          modernas como React para resolver problemas reais de usuários e
          negócios
        </p>
        <a href="Gabriel dos Santos - Desenvolvedor de Software.pdf" download>
          <button id="downloadCv" className="silver-reflection-bg">
            Download CV
          </button>
        </a>
      </article>
    </section>
  );
}
