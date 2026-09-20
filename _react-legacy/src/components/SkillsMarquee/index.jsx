import "./SkillsMarquee.estilos.css";
import { Skill } from "./Skill";
import { skills } from "../../data/skills";

const duplicatedSkills = [...skills, ...skills];

export default function SkillsMarquee() {
  const renderSkillsRow = () => (
    <div className="containerHabilidades">
      {duplicatedSkills.map((skill, index) => (
        <Skill
          key={`skill-${skill.nome}-${index}`}
          nome={skill.nome}
          cor={skill.cor}
          icon={skill.icon}
          className={index >= skills.length ? "clone" : ""}
        />
      ))}
    </div>
  );

  return (
    <section id="skillsSection">
      <article className="fogEfect">
        {renderSkillsRow()}
        {renderSkillsRow()}
      </article>
    </section>
  );
}
