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

// scrool
window.sr = ScrollReveal({ reset: true });

sr.reveal("section:not(#landing-page)", { distance: "100px", duration: 3000 });


// Duplica a linha de tecnologias para mander o looping
const container = document.getElementById("containerHabilidades");

if (window.innerWidth >= 768) {
  const clone = container.cloneNode(true);
  clone.querySelectorAll("span").forEach(el => el.classList.add("clone"));
  container.append(...clone.children); // adiciona só os filhos do clone
}