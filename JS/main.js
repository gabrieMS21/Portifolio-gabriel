const menuHamburguer = document.querySelector(".menu-hamburguer");
const headerLinks = document.querySelector(".header-links");
let isMenuOpen = false;

// Function to check if we're on mobile
function isMobile() {
  return window.innerWidth <= 768; // Adjust this value based on your mobile breakpoint
}

menuHamburguer.addEventListener("click", () => {
  if (!isMobile()) return; // Only apply mobile menu behavior on mobile

  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    headerLinks.style.display = "flex";
    headerLinks.style.flexDirection = "column";
    headerLinks.style.position = "absolute";
    headerLinks.style.top = "100%";
    headerLinks.style.left = "0";
    headerLinks.style.width = "100%";
    headerLinks.style.backgroundColor = "rgba(42, 49, 64, 0.94)";
    headerLinks.style.padding = "20px 0";
    headerLinks.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.41)";
    headerLinks.style.zIndex = "0";
  } else {
    headerLinks.style.display = "none";
  }
});

document.addEventListener("click", (event) => {
  if (!isMobile()) return; // Only apply mobile menu behavior on mobile

  if (
    isMenuOpen &&
    !event.target.closest(".header-links") &&
    !event.target.closest(".menu-hamburguer")
  ) {
    isMenuOpen = false;
    headerLinks.style.display = "none";
  }
});

const menuLinks = document.querySelectorAll(".header-links a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!isMobile()) return; // Only apply mobile menu behavior on mobile
    isMenuOpen = false;
    headerLinks.style.display = "none";
  });
});

// Handle window resize
window.addEventListener("resize", () => {
  if (!isMobile()) {
    // Reset mobile menu styles when switching to desktop
    headerLinks.style.display = "";
    headerLinks.style.flexDirection = "";
    headerLinks.style.position = "";
    headerLinks.style.top = "";
    headerLinks.style.left = "";
    headerLinks.style.width = "";
    headerLinks.style.backgroundColor = "";
    headerLinks.style.padding = "";
    headerLinks.style.boxShadow = "";
    headerLinks.style.zIndex = "";
    isMenuOpen = false;
  }
});
