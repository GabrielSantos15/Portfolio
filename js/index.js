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

// scrool
window.sr = ScrollReveal({reset:true})

sr.reveal('#apresentacao',{distance: '100px',duration: 1500})
sr.reveal('.containerHabilidades',{ distance: '100px',duration: 1500})
sr.reveal('#projetos',{duration: 1500})