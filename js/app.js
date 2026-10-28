import "../sass/app.scss";

// Interacciones de navegación: se implementarán en una fase posterior.

const menuButton = document.querySelector(".site-header__toggle");

const navigation = document.querySelector("#main-navigation");

if (menuButton && navigation) {
  const menuIcon = menuButton.querySelector("svg");

  const openMenu = () => {
    navigation.hidden = false;

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Cerrar menú de navegación");

    menuIcon.innerHTML = '<path d="M5 5l14 14M19 5L5 19" />';
  };

  const closeMenu = () => {
    navigation.hidden = true;

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú de navegación");

    menuIcon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16" />';
  };

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !navigation.hidden) {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      !navigation.hidden &&
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });
}
