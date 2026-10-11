export interface Project {
  id: number;
  slug: string;
  nome: string;
  tipo: "Full-Stack" | "Data Analytics / BI" | "E-commerce" | "Game" | "Outros";
  assets: string[];
  descricao: string;
  tecnologias: string[];
  linkRepositorio: string;
  linkProjeto?: string;
  destacado: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "orcapro",
    nome: "OrçaPro",
    tipo: "Full-Stack",
    assets: [
      "/assets/projetos/orcapro/orcapro.png",
      "/assets/projetos/orcapro/dashboard.png",
      "/assets/projetos/orcapro/dashboard-dark.png",
      "/assets/projetos/orcapro/OrcaPro.mp4",
    ],
    descricao:
      "Sistema completo de gestão financeira com autenticação, controle de receitas, despesas, orçamentos e investimentos. Desenvolvido com frontend responsivo (Next.js e Tailwind) com suporte a temas e Dark Mode. O backend robusto foi construído com Java e Spring Boot, utilizando PostgreSQL (Neon) para persistência de dados.",
    tecnologias: [
      "Next.js",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    linkRepositorio: "https://github.com/GabrielSantos15/Orcapro",
    linkProjeto: "https://orcapro-sigma.vercel.app/",
    destacado: true,
  },
  {
    id: 2,
    slug: "sendpro",
    nome: "SendPro",
    tipo: "Full-Stack",
    assets: [
      "/assets/projetos/SendPro/home.png",
      "/assets/projetos/SendPro/gerador.png",
      "/assets/projetos/SendPro/email.png",
      "/assets/projetos/SendPro/sendpro.mp4",
    ],
    descricao:
      "Plataforma completa de e-mail marketing desenvolvida para otimizar campanhas corporativas. Permite a criação visual de templates HTML, personalização dinâmica e disparo automático via Nodemailer. Foca na autonomia do usuário para baixar assets ou integrar diretamente com serviços de envio.",
    tecnologias: ["React", "Node.js", "Express", "Nodemailer", "CSS"],
    linkRepositorio:
      "https://github.com/GabrielSantos15/gerador_de_email_marketing",
    destacado: true,
  },
  {
    id: 3,
    slug: "brazilian-market-analytics",
    nome: "Brazilian Market Analytics",
    tipo: "Data Analytics / BI",
    assets: [
      "/assets/projetos/marketAnalytics/macro.png",
      "/assets/projetos/marketAnalytics/acoes.png",
      "/assets/projetos/marketAnalytics/fundos.png",
      "/assets/projetos/marketAnalytics/ativo.png",
      "/assets/projetos/marketAnalytics/apresentacao.mp4",
    ],
    descricao:
      "Terminal interativo do mercado financeiro integrando análise de risco e retorno. Conta com pipeline de dados em Python (yfinance) automatizado via CI/CD, modelagem em Star Schema e customização de front-end injetada com HTML/CSS.",
    tecnologias: ["Power BI", "DAX", "Python", "GitHub Actions"],
    linkRepositorio:
      "https://github.com/GabrielSantos15/powerbi-portfolio-movies",
    destacado: true,
  },
  {
    id: 4,
    slug: "house-edge-simulator",
    nome: "House Edge Simulator",
    tipo: "Data Analytics / BI",
    assets: [
      "/assets/projetos/house-edge/capa.png",
      "/assets/projetos/house-edge/jogadores.png",
      "/assets/projetos/house-edge/casa.png",
      "/assets/projetos/house-edge/estrategias.png",
    ],
    descricao:
      "Simulação em Python analisando a Lei dos Grandes Números aplicada a 4.000 jogadores de roleta, validando estatisticamente a vantagem da casa (House Edge). Os dados gerados foram integrados a um dashboard interativo no Power BI para visualização dos resultados.",
    tecnologias: [
      "Python",
      "Power BI",
      "DAX",
      "Estatística",
      "Simulação",
      "Data Viz",
    ],
    linkRepositorio: "https://github.com/GabrielSantos15/house-edge-simulator",
    linkProjeto: "https://lnkd.in/p/dah9BztG",
    destacado: true,
  },
  {
    id: 5,
    slug: "urbanflow",
    nome: "UrbanFlow",
    tipo: "E-commerce",
    assets: [
      "/assets/projetos/UrbanFlow/urbanFlow.png",
      "/assets/projetos/UrbanFlow/urbanFlowProdutos.png",
      "/assets/projetos/UrbanFlow/urbanFlowProduct.png",
      "/assets/projetos/UrbanFlow/UrbanFlow.mp4",
    ],
    descricao:
      "Simulação robusta de um e-commerce de arte urbana. O destaque técnico é o sistema de carrinho de compras com persistência de dados via LocalStorage, garantindo que o usuário não perca seus itens ao recarregar a página. Conta com fluxo simulado de checkout e design responsivo focado em conversão.",
    tecnologias: ["ReactJS", "Componentização", "LocalStorage"],
    linkRepositorio: "https://github.com/GabrielSantos15/UrbanFlow",
    linkProjeto: "https://urban-flow-kappa.vercel.app/",
    destacado: true,
  },
  {
    id: 6,
    slug: "atlas-arena",
    nome: "Atlas Arena",
    tipo: "Game",
    assets: [
      "/assets/projetos/Atlasquiz/QuizCover.png",
      "/assets/projetos/Atlasquiz/QuizLobby.png",
      "/assets/projetos/Atlasquiz/QuizGameplay.png",
      "/assets/projetos/Atlasquiz/QuizPodio.png",
      "/assets/projetos/Atlasquiz/Atlasquiz.mp4",
    ],
    descricao:
      "Plataforma interativa de quiz multiplayer focada em comunicação em tempo real e sincronização de estado. Desenvolvida para suportar múltiplos usuários simultâneos, garantindo uma experiência competitiva fluida e de alta performance através de conexões bidirecionais e arquitetura moderna.",
    tecnologias: ["React", "Node.js", "Socket.io", "CSS3"],
    linkRepositorio: "https://github.com/GabrielSantos15/Atlas-Arena",
    linkProjeto: "https://atlas-arena-quiz.vercel.app",
    destacado: true,
  },
];