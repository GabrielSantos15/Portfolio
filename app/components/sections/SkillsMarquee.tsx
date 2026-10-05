import { SkillType, skillsDev, skillsDataGov } from "../../data/skills";
import styles from "./SkillsMarquee.module.css";

// Multiplicamos por 3 (ou 4) em vez de 2, porque as listas agora são mais pequenas (têm 9-10 itens).
const duplicatedDev = [...skillsDev, ...skillsDev, ...skillsDev, ...skillsDev];
const duplicatedDataGov = [...skillsDataGov, ...skillsDataGov, ...skillsDataGov, ...skillsDataGov];

type SkillProps = SkillType & {
  className?: string;
};

export function Skill({ icon, nome, cor, className }: SkillProps) {
  return (
    <span
      className={`${styles.skill} ${className ?? ""}`}
      style={{ "--corSkill": cor } as React.CSSProperties}
    >
      <figure className={styles.iconWrapper}>
        <img src={icon} alt={nome} className={styles.icon} />
      </figure>
      <h3 className={styles.nome}>{nome}</h3>
    </span>
  );
}

export default function SkillsMarquee() {
  const renderSkillsRow = (
    items: SkillType[],
    originalLength: number,
    isReverse: boolean = false
  ) => (
    <div className={`${styles.skillsRow} ${isReverse ? styles.reverse : ""}`}>
      {items.map((skill, index) => (
        <Skill
          key={`skill-${skill.nome}-${index}`}
          {...skill}
          className={index >= originalLength ? styles.clone : ""}
        />
      ))}
    </div>
  );

  return (
    <section id="skillsSection" className={styles.section}>
      <article className={styles.fogEfect}>
        <h4 className={styles.mobileSectionTitle}>Desenvolvimento Web & Mobile</h4>
        {renderSkillsRow(duplicatedDev, skillsDev.length, false)}

        <h4 className={styles.mobileSectionTitle}>Dados, Automação & Design</h4>
        {renderSkillsRow(duplicatedDataGov, skillsDataGov.length, true)}
      </article>
    </section>
  );
}