import {albumList} from "./albunsDataBase.js";
//import imagem from"../assets/imgs/Album Cover (1).svg"

document.addEventListener("DOMContentLoaded", () => {
  const genreButtons = document.querySelectorAll(".genre-button");

  genreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      genreButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
  
});




function albunsList() {
  const albuns = albumList.map((e) => {
      return `
     <li class="albunList">
               <img class="albumImage" src="${e.img}" alt="albuns de musica" />
              <p>album :</p>
              <div class="space_band_cat">
                <p>${e.band}</p>
              <p>${e.genre}</p>
              </div>
              
              <div class="price_comprar">
                <p>${e.price}</p>
              <button>comprar</button>
              </div>
            </li>`;
    })
    .join("");

  return albuns;;
}

document.querySelector('.section_albuns_list').innerHTML = albunsList();


