export const projects = [
  {
    id: 1,
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
    id: 2,
    nome: "UrbanFlow",
    tipo: "E-commerce",
    assets: [
      "/assets/projetos/UrbanFlow/urbanFlow.png",
      "/assets/projetos/UrbanFlow/urbanFlowProdutos.png",
      "/assets/projetos/UrbanFlow/urbanFlowSobre.png",
    ],
    descricao:
      "Simulação robusta de um e-commerce de arte urbana. O destaque técnico é o sistema de carrinho de compras com persistência de dados via LocalStorage, garantindo que o usuário não perca seus itens ao recarregar a página. Conta com fluxo simulado de checkout e design responsivo focado em conversão.",
    tecnologias: ["Javascript", "LocalStorage", "HTML5", "CSS3"],
    linkRepositorio:
      "https://github.com/GabrielSantos15/DesenvolvimentoProjeto",
    linkProjeto: "https://gabrielsantos15.github.io/DesenvolvimentoProjeto/",
  },
  {
    id: 3,
    nome: "Calculadora React",
    tipo: "App",
    assets: [
      "/assets/projetos/calculadora/calculadora.png",
      "/assets/projetos/calculadora/calculadoraMobile.png",
    ],
    descricao:
      "Aplicação SPA (Single Page Application) que explora os fundamentos do React. Utiliza o hook useState para gerenciamento de memória de cálculo e manipulação de eventos em tempo real. Interface projetada com foco em UX mobile-first.",
    tecnologias: ["React", "Firebase Hosting", "CSS3"],
    linkRepositorio: "https://github.com/GabrielSantos15/Calculadora-React",
    linkProjeto: "https://calculadora-react-db34e.web.app/",
  },
  {
    id: 4,
    nome: "GitHub User Finder",
    tipo: "Integração API",
    assets: [
      "/assets/projetos/githubApi/githubApi.png",
      "/assets/projetos/githubApi/repositorios.png",
    ],
    descricao:
      "Ferramenta de busca que consome a API pública do GitHub. O projeto demonstra competência em requisições assíncronas (Async/Await), tratamento de dados JSON e renderização dinâmica de informações de perfil e repositórios.",
    tecnologias: ["Javascript", "Fetch API", "HTML", "CSS"],
    linkRepositorio: "https://github.com/GabrielSantos15/GitHub-API/",
    linkProjeto: "https://gabrielsantos15.github.io/GitHub-API/",
  },
  {
    id: 5,
    nome: "Santos Wine",
    tipo: "Landing Page",
    assets: [
      "/assets/projetos/SantosWine/SantosWine.png",
      "/assets/projetos/SantosWine/SantosWineMobile.png",
    ],
    descricao:
      "Landing Page institucional criada para uma vinícola fictícia. O projeto foca inteiramente na fidelidade do Design System, tipografia e hierarquia visual, servindo como demonstração de capacidade de transformar protótipos em código pixel-perfect.",
    tecnologias: ["HTML", "CSS3", "Javascript"],
    linkRepositorio: "https://github.com/GabrielSantos15/Santos-Wine",
    linkProjeto: "https://gabrielsantos15.github.io/Santos-Wine/",
  },
  {
    id: 6,
    nome: "Tech Quiz",
    tipo: "Game",
    assets: [
      "/assets/projetos/Quiz/quizInicio.png",
      "/assets/projetos/Quiz/quizPergunta.png",
      "/assets/projetos/Quiz/quizResultado.png",
    ],
    descricao:
      "Aplicação interativa de perguntas e respostas com lógica de pontuação imediata. Destaca o uso de manipulação do DOM para feedback visual (respostas certas/erradas) e transição de estados da aplicação sem recarregamento.",
    tecnologias: ["Javascript", "HTML", "CSS"],
    linkRepositorio: "https://github.com/GabrielSantos15/Quiz/",
    linkProjeto: "https://gabrielsantos15.github.io/Quiz/",
  },
  {
    id: 7,
    nome: "Task Manager",
    tipo: "Produtividade",
    assets: [
      "/assets/projetos/listaTarefas/listaDeTarefas.png",
      "/assets/projetos/listaTarefas/listaDeTarefas2.png",
    ],
    descricao:
      "Gerenciador de tarefas focado em organização pessoal. Implementa operações CRUD (Criar, Ler, Atualizar, Deletar) via Javascript puro, salvando o estado das tarefas e níveis de prioridade diretamente no navegador do usuário.",
    tecnologias: ["Javascript", "LocalStorage", "CSS", "HTML"],
    linkRepositorio: "https://github.com/GabrielSantos15/lista-de-tarefas",
    linkProjeto: "https://gabrielsantos15.github.io/lista-de-tarefas/",
  },
  {
    id: 8,
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
tecnologias: [
  "Power BI",
  "DAX",
  "Python",
  "API",
  "UX/UI",
  "Storytelling"
],

    linkRepositorio: "https://github.com/GabrielSantos15/powerbi-portfolio-movies",
  },

  {
    id: 9,
    nome: "Arcade JS",
    tipo: "Game",
    assets: [
      "/assets/projetos/Jogos/Games.png",
      "/assets/projetos/Jogos/portasAbertas.png",
      "/assets/projetos/Jogos/portasAbertas2.png",
    ],
    descricao:
      "Coletânea de jogos desenvolvidos com Canvas API para o evento IFSP Portas Abertas. Demonstra lógica complexa de colisão, renderização de gráficos 2D e loops de jogo (Game Loop), provando o poder do Javascript puro para multimídia.",
    tecnologias: ["Canvas API", "Javascript", "HTML"],
    linkRepositorio: "https://github.com/GabrielSantos15/Jogos-Menu/",
    linkProjeto: "https://gabrielsantos15.github.io/Jogos-Menu/",
  },
];
