const tecnologias = [
  { nome: "HTML", imagem: "imagens/linguagens/HTML.png", cor: "#e34c26" },
  { nome: "CSS", imagem: "imagens/linguagens/CSS.png", cor: "#264de4" },
  { nome: "JS", imagem: "imagens/linguagens/JavaScript.png", cor: "#f0db4f" },
  { nome: "GIT", imagem: "imagens/linguagens/GIT.png", cor: "#f05032" },
  { nome: "React", imagem: "imagens/linguagens/React.png", cor: "#61dafb" },
  { nome: "Bootstrap", imagem: "imagens/linguagens/Bootstrap.png", cor: "#6d0bc2ff" },
  { nome: "Power Bi", imagem: "imagens/linguagens/powerBi.webp", cor: "#f2c811" },
  { nome: "Power Automate", imagem: "imagens/linguagens/PowerAutomate.png", cor: "#0066ff" },
  // { nome: "Pacote Office", imagem: "imagens/linguagens/Office.png", cor: "#ea3e23" },
  { nome: "PHP", imagem: "imagens/linguagens/php.png", cor: "#6548c2ff" },
  { nome: "MySql", imagem: "imagens/linguagens/mysql.png", cor: "#0f6dcbff" }
];


const projetos = [
  {
    nome: "Calculadora",
    imagens: ["imagens/projetos/calculadora/calculadora.png","imagens/projetos/calculadora/calculadoraMobile.png"],
    descricao: "Projeto simples e funcional desenvolvido com React. A calculadora realiza operações básicas (adição, subtração, multiplicação e divisão) com uma interface responsiva e intuitiva. O foco foi aplicar conceitos como componentes reutilizáveis, estados (useState) e manipulação de eventos no React.",
    tecnologias: ["React", "Firebase", "HTML", "CSS", "JS"],
    linkRepositorio: "https://github.com/GabrielSantos15/Calculadora-React",
    linkProjeto: "https://calculadora-react-db34e.web.app/"
  },
  {
    nome: "Lista de tarefas",
    imagens: ["imagens/projetos/listaTarefas/listaTarefas.png"],
    descricao:
    "Aplicação desenvolvida com JavaScript puro que permite adicionar, marcar e remover tarefas, com suporte a data e nível de importância. As informações são salvas no LocalStorage, garantindo que as tarefas permaneçam mesmo após fechar o navegador. Interface simples, prática e funcional, pensada para organização pessoal.",
    tecnologias: ["HTML", "CSS", "JS"],
    linkRepositorio: "https://github.com/GabrielSantos15/lista-de-tarefas",
    linkProjeto: "https://gabrielsantos15.github.io/lista-de-tarefas/"
  },
  {
    nome: "Santos Wine",
    imagens: ["imagens/projetos/santosWine/santosWine.png", "imagens/projetos/santosWine/santosWineMobile.png"],
    descricao:
      "Projeto desenvolvido como trabalho de encerramento de semestre no SENAI, com a proposta de criar uma empresa fictícia do zero. A Santos Wine é uma vinícola criada especialmente para esse projeto, e a landing page apresenta a identidade visual da marca e informações da empresa. O site foi desenvolvido com foco em apresentação clara, visual atrativo e navegação intuitiva, representando de forma completa o conceito da empresa.",
    tecnologias: ["HTML", "CSS", "JS"],
    linkRepositorio: "https://github.com/GabrielSantos15/Santos-Wine",
    linkProjeto: "https://gabrielsantos15.github.io/Santos-Wine/"
  },
  {
    nome: "UrbanFlow",
    imagens: ["imagens/projetos/UrbanFlow/UrbanFlow.png", "imagens/projetos/UrbanFlow/UrbanFlowProdutos.png","imagens/projetos/UrbanFlow/UrbanFlowSobre.png"],
    descricao:
      "Projeto desenvolvido para o IFSP, simula uma loja online de materiais de arte com foco em latas de spray. O site possui um sistema de carrinho de compras funcional com LocalStorage, permitindo adicionar e remover itens com persistência de dados. Conta também com uma seção de pagamento simulada, projetada apenas para fins visuais. O layout é responsivo e pensado para destacar produtos de forma criativa e organizada, oferecendo uma experiência realista de navegação e compra.",
    tecnologias: ["HTML", "CSS", "JS"],
    linkRepositorio: "https://github.com/GabrielSantos15/DesenvolvimentoProjeto",
    linkProjeto: "https://gabrielsantos15.github.io/Santos-Wine/"
  },
  {
    nome: "Api GitHub",
    imagens: ["imagens/projetos/githubApi.png"],
    descricao:
      "Aplicação desenvolvida com base na API pública do GitHub, que permite buscar perfis de usuários e exibir informações como avatar, bio, repositórios, localização e seguidores. O site foi criado com foco em responsividade, design limpo e consumo eficiente de API, oferecendo uma navegação fluida e uma experiência intuitiva para quem deseja explorar perfis na plataforma.",
    tecnologias: ["HTML", "CSS", "JS"],
    linkRepositorio: "https://github.com/GabrielSantos15/GitHub-API/",
    linkProjeto: "https://gabrielsantos15.github.io/GitHub-API/",
  },
  {
    nome: "Login e Cadastro",
    imagens: ["imagens/projetos/login-cadastro.png"],
    descricao: "Projeto simples de login e cadastro",
    tecnologias: ["HTML", "CSS", "JS"],
    linkRepositorio: "https://gabrielsantos15.github.io/Login-e-Cadastro/",
  },
  {
    nome: "Sorveteria",
    imagens: ["imagens/projetos/sorveteria.png"],
    descricao:
      "Desenvolvimento de uma landing page para uma sorveteria fictícia.",
    tecnologias: ["HTML", "CSS", "JS"],
    linkRepositorio: "https://gabrielsantos15.github.io/Sorveteria/",
  }
];
