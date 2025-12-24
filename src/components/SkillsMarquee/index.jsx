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
    { nome: "HTML", cor: "#e34c26", icon: "/assets/skills/HTML.png" },
    { nome: "CSS", cor: "#264de4", icon: "/assets/skills/CSS.png" },
    {
      nome: "JS",
      cor: "#f0db4f",
      icon: "/assets/skills/JavaScript.png",
    },
    { nome: "GIT", cor: "#f05032", icon: "/assets/skills/GIT.png" },
    {
      nome: "React",
      cor: "#61dafb",
      icon: "/assets/skills/React.png",
    },
    {
      nome: "Bootstrap",
      cor: "#6d0bc2ff",
      icon: "/assets/skills/Bootstrap.png",
    },
    {
      nome: "Power Bi",
      cor: "#f2c811",
      icon: "/assets/skills/powerBi.webp",
    },
    {
      nome: "Power Automate",
      cor: "#0066ff",
      icon: "/assets/skills/PowerAutomate.png",
    },
    { nome: "PHP", cor: "#6548c2ff", icon: "/assets/skills/php.png" },
    {
      nome: "MySql",
      cor: "#0f6dcbff",
      icon: "/assets/skills/mysql.png",
    },
    {
      nome: "Figma",
      cor: "#B659FF",
      icon: "/assets/skills/figma.png",
    },
    {
      nome: "Pacote Office",
      cor: "#ea3e23",
      icon: "/assets/skills/Office.png",
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
