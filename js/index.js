function recuperarDarkMode() {
  const storageDark = localStorage.getItem("dark");
  if (storageDark) darkMode();
}

recuperarDarkMode();

function darkMode() {
  const body = document.querySelector("body");
  const buttonDarkMode = document.querySelector("#buttonDarkMode");

  localStorage.clear();

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");

    buttonDarkMode.classList.remove("fa-moon");
    buttonDarkMode.classList.add("fa-sun");
  } else {
    body.classList.add("dark");
    localStorage.setItem("dark", 1);

    buttonDarkMode.classList.remove("fa-sun");
    buttonDarkMode.classList.add("fa-moon");
  }
}

// menu mobile

function menu() {
  const menuMobile = document.querySelector("#menuMobile");

  menuMobile.classList.contains("hide")
    ? menuMobile.classList.remove("hide")
    : menuMobile.classList.add("hide");
}

document.querySelector("#overlay").addEventListener("click", () => {
  if (!document.querySelector("#menuMobile").classList.contains("hide")) menu();
});


// Duplica a linha de tecnologias para mander o looping
const container = document.getElementById("containerHabilidades");

if (window.innerWidth >= 768) {
  const clone = container.cloneNode(true);
  clone.querySelectorAll("span").forEach((el) => el.classList.add("clone"));
  container.append(...clone.children); // adiciona só os filhos do clone
}

// mostrar os porjetos

const projetosContainer = document.querySelector("#containerProjetos");

window.addEventListener("load", () => {
  let html = "";
  projetos.forEach((projeto, i) => {
    html += `
        <article class="projeto card" Onclick = "detalhar(${i})">
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
    projetosContainer.innerHTML = html;
  });
});

let autoScroll;

function detalhar(i) {
  const carrossel = document.getElementById("carrossel");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  document.querySelector("#containerTextosDetalhe h3").innerHTML =
    projetos[i].nome;
  document.querySelector("#containerTextosDetalhe p").innerHTML =
    projetos[i].descricao;
  document.querySelector(
    "#containerTextosDetalhe .tecnologiasProjetos"
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

  projetosContainer.style.display = "none";
  document.querySelector("#detalhesProjeto").style.display = "flex";
  document.querySelector("#projetos").scrollIntoView({ behavior: "smooth" });

  nextBtn.addEventListener("click", () => {
    carrossel.scrollBy({ left: carrossel.clientWidth, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carrossel.scrollBy({ left: -carrossel.clientWidth, behavior: "smooth" });
  });

}

function esconderDetalhes() {
  projetosContainer.style.display = "flex";
  document.querySelector("#detalhesProjeto").style.display = "none";
  clearInterval(autoScroll);
}

// scrool
window.sr = ScrollReveal({ reset: false });

sr.reveal("section:not(#landing-page)", { distance: "100px", origin: "bottom", duration: 2000 });
