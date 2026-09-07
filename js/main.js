document.addEventListener("DOMContentLoaded", () => {

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Fermer le menu quand on clique sur un lien
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  }
});

// Blob follower (halo organique qui suit le curseur)
function follow(e) {
  const blob = document.getElementById("blob");
  if (!blob) return;
  blob.style.left = `${e.clientX}px`;
  blob.style.top = `${e.clientY}px`;
}
document.addEventListener("mousemove", follow);


// Change title when user leaves the page
let originalTitle = document.title;

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "Reviens ! - whostmdz";
  } else {
    document.title = originalTitle;
  }
});

// Also handle when window loses focus
window.addEventListener("blur", () => {
  document.title = "Reviens ! - whostmdz";
});

window.addEventListener("focus", () => {
  document.title = originalTitle;
});
