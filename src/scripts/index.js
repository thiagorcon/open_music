

document.addEventListener("DOMContentLoaded", () => {
     const genreButtons = document.querySelectorAll(".genre-button");
   
     genreButtons.forEach(button => {
       button.addEventListener("click", () => {
         genreButtons.forEach(btn => btn.classList.remove("active"));
         button.classList.add("active");
       });
     });
   });
   

