document.addEventListener("DOMContentLoaded", () => {
    const menuHamburguer = document.querySelector(".menu-hamburguer");
    const navMenu = document.querySelector("header nav");
  
    menuHamburguer.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  });