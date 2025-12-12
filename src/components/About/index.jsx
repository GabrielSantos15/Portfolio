import Foto from "../../assets/Gabriel_foto.png";
import "./About.estilos.css";
import Curriculo from "../../assets/Currículo_Gabriel.pdf";

export default function About() {
  return (
    <section id="AboutSection">
      <figure>
        <img src={Foto} width={700} alt="" />
        <span className="liquid-glass card-about">UX Eficiente</span>
        <span className="liquid-glass card-about">SEO & Performance</span>
        <span className="liquid-glass card-about">Experiência com Valor</span>
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
        <a href={Curriculo} download>
          <button id="downloadCv" className="silver-reflection-bg">
            Download CV
          </button>
        </a>
      </article>
    </section>
  );
}
