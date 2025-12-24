import "./SkillsMarquee.estilos.css";
export default function SkillsMarquee() {
  const Skill = ({ icon, nome, cor, className }) => {
    return (
      <span className={className} style={{ "--corSkill": cor }}>
        <figure>
          <img src={icon} />
        </figure>
        <h3>{nome}</h3>
      </span>
    );
  };

  const skills = [
    { nome: "HTML", cor: "#e34c26", icon: "../../src/assets/skills/HTML.png" },
    { nome: "CSS", cor: "#264de4", icon: "../../src/assets/skills/CSS.png" },
    {
      nome: "JS",
      cor: "#f0db4f",
      icon: "../../src/assets/skills/JavaScript.png",
    },
    { nome: "GIT", cor: "#f05032", icon: "../../src/assets/skills/GIT.png" },
    {
      nome: "React",
      cor: "#61dafb",
      icon: "../../src/assets/skills/React.png",
    },
    {
      nome: "Bootstrap",
      cor: "#6d0bc2ff",
      icon: "../../src/assets/skills/Bootstrap.png",
    },
    {
      nome: "Power Bi",
      cor: "#f2c811",
      icon: "../../src/assets/skills/powerBi.webp",
    },
    {
      nome: "Power Automate",
      cor: "#0066ff",
      icon: "../../src/assets/skills/PowerAutomate.png",
    },
    { nome: "PHP", cor: "#6548c2ff", icon: "../../src/assets/skills/php.png" },
    {
      nome: "MySql",
      cor: "#0f6dcbff",
      icon: "../../src/assets/skills/mysql.png",
    },
    {
      nome: "Figma",
      cor: "#B659FF",
      icon: "../../src/assets/skills/figma.png",
    },
    {
      nome: "Pacote Office",
      cor: "#ea3e23",
      icon: "../../src/assets/skills/Office.png",
    },
  ];

  // Duplica as habilidades para criar o efeito de loop infinito
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skillsSection">
      {/* <p>
        Código não se escreve sozinho,
        <br /> mas essas tecnologias me ajudam bastante
      </p> */}
      <article className="fogEfect">
        <div className="containerHabilidades">
          {duplicatedSkills.map((skill, index) => (
            <Skill
              key={index}
              nome={skill.nome}
              cor={skill.cor}
              icon={skill.icon}
              className={index >= skills.length ? "clone" : ""}
            />
          ))}
        </div>
        <div className="containerHabilidades">
          {duplicatedSkills.map((skill, index) => (
            <Skill
              key={index}
              nome={skill.nome}
              cor={skill.cor}
              icon={skill.icon}
              className={index >= skills.length ? "clone" : ""}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
