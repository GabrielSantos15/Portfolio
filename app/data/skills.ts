export interface SkillType {
  nome: string;
  cor: string;
  icon: string;
}

// DESENVOLVIMENTO DE SOFTWARE (Web, Mobile & APIs)
export const skillsDev: SkillType[] = [
  { nome: "HTML", cor: "#e34c26", icon: "/assets/skills/html.svg" },
  { nome: "CSS", cor: "#264de4", icon: "/assets/skills/css.svg" },
  { nome: "Tailwind", cor: "#adf5ff", icon: "/assets/skills/tailwind.svg" },
  { nome: "Bootstrap", cor: "#6d0bc2", icon: "/assets/skills/bootstrap.svg" },
  { nome: "JS", cor: "#f0db4f", icon: "/assets/skills/javascript.svg" },
  { nome: "React", cor: "#61dafb", icon: "/assets/skills/react.svg" },
  { nome: "Next.js", cor: "#ffffff", icon: "/assets/skills/nextjs.svg" },
  { nome: "Node.js", cor: "#49cf20", icon: "/assets/skills/nodejs.svg" },
  { nome: "Java", cor: "#5382a1", icon: "/assets/skills/java.svg" },
  { nome: "Kotlin", cor: "#7F52FF", icon: "/assets/skills/kotlin.svg" }, 
];

//  DADOS, GOVERNANÇA & PRODUTO (Analytics, Banco de Dados, Design & Automação)
export const skillsDataGov: SkillType[] = [
  { nome: "Figma", cor: "#b659ff", icon: "/assets/skills/figma.svg" },
  { nome: "Git", cor: "#f05032", icon: "/assets/skills/git.svg" },
  { nome: "Oracle SQL", cor: "#ef0f14", icon: "/assets/skills/oracle.svg" },
  { nome: "MySQL", cor: "#0f6dcb", icon: "/assets/skills/mysql.svg" },
  { nome: "Python", cor: "#3e92d6", icon: "/assets/skills/python.svg" },
  { nome: "Power BI", cor: "#f2c811", icon: "/assets/skills/powerbi.svg" },
  { nome: "Excel", cor: "#217346", icon: "/assets/skills/excel.svg" },
  { nome: "Power Automate", cor: "#0066ff", icon: "/assets/skills/powerautomate.svg" },
  { nome: "Pacote Office", cor: "#D83B01", icon: "/assets/skills/microsoft-office.svg" }, 
];