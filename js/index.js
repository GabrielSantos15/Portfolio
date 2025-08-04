// Verifica o tema salvo no localStorage e aplica ao carregar a página
function aplicarTemaSalvo() {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "dark") {
    ativarModoEscuro();
    document.getElementById("DarkMode").checked = true;
  } else if (temaSalvo === "light") {
    desativarModoEscuro();
    document.getElementById("LightMode").checked = true;
  } else {
    // modo sistema
    aplicarTemaDoSistema();
    document.getElementById("SystemMode").checked = true;
  }
}

aplicarTemaSalvo();

// Listener para os radios
document.querySelectorAll('input[name="theme"]').forEach((el) => {
  el.addEventListener('change', () => {
    if (el.id === 'LightMode') {
      desativarModoEscuro();
      localStorage.setItem("tema", "light");
    } else if (el.id === 'DarkMode') {
      ativarModoEscuro();
      localStorage.setItem("tema", "dark");
    } else if (el.id === 'SystemMode') {
      aplicarTemaDoSistema();
      localStorage.setItem("tema", "system");
    }
  });
});

// Funções
function ativarModoEscuro() {
  document.body.classList.add("dark");
}

function desativarModoEscuro() {
  document.body.classList.remove("dark");
}

function aplicarTemaDoSistema() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    ativarModoEscuro();
  } else {
    desativarModoEscuro();
  }
}

// menu mobile

function menu() {
  const menuMobile = document.querySelector("#menuMobile");

  menuMobile.classList.toggle("hide")
}

document.querySelector("#overlayMenu").addEventListener("click", () => {
  if (!document.querySelector("#menuMobile").classList.contains("hide")) menu();
});


// Duplica a linha de tecnologias para mander o looping
const container = document.getElementById("containerHabilidades");

// mostrar os porjetos

const projetosContainer = document.querySelector("#containerProjetos");
const tecnologiaContainer = document.querySelector("#containerHabilidades");

window.addEventListener("load", () => {
  let html = "";

  const allTechs = tecnologias.concat(tecnologias);

  html = allTechs.map((tecnologia, i) => `
  <span ${i >= tecnologias.length ? ' class="clone"' : ''} style="--cor-bg: ${tecnologia.cor}">
    <figure>
      <img src="${tecnologia.imagem}">
    </figure>
    <h3>${tecnologia.nome}</h3>
  </span>
`).join("");
  tecnologiaContainer.innerHTML = html;

  tecnologiaContainer.innerHTML = html;
  html = ""

  projetos.forEach((projeto, i) => {
    html += `
        <article class="projeto card bottomSr" Onclick = "detalhar(${i})">
          <figure>
              <img src="${projeto.imagens[0]}" alt="foto do projeto ${projeto.nome
      }">
          </figure>
          <div>
              <h3>${projeto.nome}</h3>
              <p>${projeto.descricao}</p>
              <div class="tecnologiasContainer">
                 ${projeto.tecnologias.length
        ? (() => {
          const primeiras = projeto.tecnologias
            .slice(0, 3)
            .map((tec) => `<span>${tec}</span>`)
            .join("");
          const extras =
            projeto.tecnologias.length > 3
              ? `<span>${projeto.tecnologias.length - 3}+</span>`
              : "";
          return primeiras + extras;
        })()
        : ""
      }

              </div>
          </div>
         </article>
    `;
  });
  projetosContainer.innerHTML = html;
  scrollEfect()
});

function detalhar(i) {
  const carrossel = document.getElementById("carrossel");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  document.querySelector("#containerTextosDetalhe h3").innerHTML =
    projetos[i].nome;
  document.querySelector("#containerTextosDetalhe p").innerHTML =
    projetos[i].descricao;
  document.querySelector(
    "#containerTextosDetalhe .tecnologiasContainer"
  ).innerHTML = projetos[i].tecnologias
    .map((tec) => `<span>${tec}</span>`)
    .join("");
  document.querySelector("#ropositorioLink").href = projetos[i].linkRepositorio;
  document.querySelector("#projetoLink").href = projetos[i].linkProjeto;
  carrossel.innerHTML = projetos[i].imagens
    .map(
      (img, i) =>
        `<img src="${img}" alt="Imagem ${i + 1} do projeto ${projetos[i].nome
        }">`
    )
    .join("");

  document.querySelector("#detalhesProjeto").classList.remove("hidden");
  document.body.classList.add("no-scroll");

  nextBtn.addEventListener("click", () => {
    carrossel.scrollBy({ left: carrossel.clientWidth, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carrossel.scrollBy({ left: -carrossel.clientWidth, behavior: "smooth" });
  });
}

function esconderDetalhes() {
  document.querySelector("#detalhesProjeto").classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

document.querySelector("#overlayDetalhes").addEventListener("click", () => {
  esconderDetalhes()
})

function scrollEfect() {

  window.sr = ScrollReveal({ reset: true });
  // sr.reveal("section:not(#landing-page)", { distance: "100px", origin: "bottom", duration: 3500 });
  sr.reveal(".leftSr", { distance: "200px", origin: "left", duration: 2000 });
  sr.reveal(".rightSr", { distance: "200px", origin: "right", duration: 2000 });
  sr.reveal(".bottomSr", { distance: "200px", origin: "bottom", duration: 3000, reset: false});
}
