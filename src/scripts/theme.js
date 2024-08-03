export function criaEvento() {
  const button = document.querySelector(".header_theme-btn");
  const divButton = document.querySelector(".tema-button");
  const bodyDark = document.querySelector("body");
  const logoDark = document.querySelector(".header-logo");
  const genreDark = document.querySelector(".title-genre");
  const buttonDark = document.querySelector(".button-filter");
  const titlePriceDark = document.querySelector(".title-price");
  const h1Dark = document.querySelector(".album-title");
  const priceDark = document.querySelector(".price-album");
  const titleAlbumDark = document.querySelector(".title-style-album");
  const albumStyleDarkMode = document.querySelector(".list-album-style");

  button.addEventListener("click", function () {
    button.classList.toggle("header_theme-btn--sun");
    bodyDark.classList.toggle("dark-mode");

    if (bodyDark.classList.contains("dark-mode")) {
      localStorage.setItem("@openMusic:theme", "dark");
    } else {
      localStorage.removeItem("@openMusic:theme");
    }
  });

  function verificarModo() {
    const dark = localStorage.getItem("@openMusic:theme");

    if (dark) {
      button.classList.toggle("header_theme-btn--sun");
      bodyDark.classList.toggle("dark-mode");
    }
  }

  verificarModo();
}

const button = document.querySelector(".img-moon");
// const container_geral = document.querySelector(".container_geral");
// let darkMode = false;

// function themeChange() {
//   darkMode = !darkMode;
//   container_geral.classList.toggle("dark-mode");

//   localStorage.setItem("temaPreferencia", JSON.stringify(darkMode));
// }

button.addEventListener("click",themeChange)
// // esta funcionando pois tem um onClick no button no index.html. se tirar o onClick usar o addEvenetListiner

// // Verifica se existe uma preferência salva no localStorage
// const savedTheme = localStorage.getItem("temaPreferencia");

// if (savedTheme !== null) {
//   darkMode = JSON.parse(savedTheme);
//   container_geral.classList.toggle("dark-mode", darkMode);
// }
