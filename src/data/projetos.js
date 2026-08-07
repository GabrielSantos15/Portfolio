export const projects = [
  {
    id: 1,
    nome: "OrçaPro",
    tipo: "Aplicação Full Stack",
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
  },
  {
    id: 2,
    nome: "SendPro",
    tipo: "Fullstack", // Tag para filtro futuro
    // Caminho absoluto partindo da pasta public
    assets: [
      "/assets/projetos/SendPro/home.png",
      "/assets/projetos/SendPro/gerador.png",
      "/assets/projetos/SendPro/email.png",
      "/assets/projetos/SendPro/sendpro.mp4",
    ],
    videoPoster: "/assets/projetos/SendPro/home.png",
    descricao:
    "Plataforma completa de e-mail marketing desenvolvida para otimizar campanhas corporativas. Permite a criação visual de templates HTML, personalização dinâmica e disparo automático via Nodemailer. Foca na autonomia do usuário para baixar assets ou integrar diretamente com serviços de envio.",
    tecnologias: ["React", "Node.js", "Express", "Nodemailer", "CSS"],
    linkRepositorio:
    "https://github.com/GabrielSantos15/gerador_de_email_marketing",
    linkProjeto: null,
  },
  
  {
    id: 3,
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
  },
  {
    id: 4,
    nome: "Cine Analytics",
    tipo: "Data Analytics / BI",
    assets: [
      "/assets/projetos/dashboard-filmes/capa.png",
      "/assets/projetos/dashboard-filmes/Tendencias.png",
      "/assets/projetos/dashboard-filmes/Faturamento.png",
      "/assets/projetos/dashboard-filmes/AtoresRank.png",
      "/assets/projetos/dashboard-filmes/Filme.png",
      "/assets/projetos/dashboard-filmes/Faturamento.png",
      "/assets/projetos/dashboard-filmes/apresentacao.mp4",
    ],
    descricao:
    "Dashboard analítico dos Top 500 filmes (API TMDB), com coleta automatizada em Python, modelagem DAX avançada e parâmetros dinâmicos para analisar tendências, ROI e faturamento, priorizando UX e clareza visual para apoiar decisões estratégicas.",
    tecnologias: ["Power BI", "DAX", "Python", "API", "UX/UI", "Storytelling"],
    
    linkRepositorio:
    "https://github.com/GabrielSantos15/powerbi-portfolio-movies",
  },
  {
    id: 5,
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
  },
{
    id: 6,
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
  },

  // {
  //   id: 7,
  //   nome: "Calculadora React",
  //   tipo: "App",
  //   assets: [
  //     "/assets/projetos/calculadora/calculadora.png",
  //     "/assets/projetos/calculadora/calculadoraMobile.png",
  //   ],
  //   descricao:
  //     "Aplicação SPA (Single Page Application) que explora os fundamentos do React. Utiliza o hook useState para gerenciamento de memória de cálculo e manipulação de eventos em tempo real. Interface projetada com foco em UX mobile-first.",
  //   tecnologias: ["React", "Firebase Hosting", "CSS3"],
  //   linkRepositorio: "https://github.com/GabrielSantos15/Calculadora-React",
  //   linkProjeto: "https://calculadora-react-db34e.web.app/",
  // },
  // {
  //   id: 8,
  //   nome: "Tech Quiz",
  //   tipo: "Game",
  //   assets: [
  //     "/assets/projetos/Quiz/quizInicio.png",
  //     "/assets/projetos/Quiz/quizPergunta.png",
  //     "/assets/projetos/Quiz/quizResultado.png",
  //   ],
  //   descricao:
  //     "Aplicação interativa de perguntas e respostas com lógica de pontuação imediata. Destaca o uso de manipulação do DOM para feedback visual (respostas certas/erradas) e transição de estados da aplicação sem recarregamento.",
  //   tecnologias: ["Javascript", "HTML", "CSS"],
  //   linkRepositorio: "https://github.com/GabrielSantos15/Quiz/",
  //   linkProjeto: "https://gabrielsantos15.github.io/Quiz/",
  // },
  // {
  //   id: 9,
  //   nome: "Task Manager",
  //   tipo: "Produtividade",
  //   assets: [
  //     "/assets/projetos/listaTarefas/listaDeTarefas.png",
  //     "/assets/projetos/listaTarefas/listaDeTarefas2.png",
  //   ],
  //   descricao:
  //     "Gerenciador de tarefas focado em organização pessoal. Implementa operações CRUD (Criar, Ler, Atualizar, Deletar) via Javascript puro, salvando o estado das tarefas e níveis de prioridade diretamente no navegador do usuário.",
  //   tecnologias: ["Javascript", "LocalStorage", "CSS", "HTML"],
  //   linkRepositorio: "https://github.com/GabrielSantos15/lista-de-tarefas",
  //   linkProjeto: "https://gabrielsantos15.github.io/lista-de-tarefas/",
  // },
];
