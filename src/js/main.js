document.addEventListener("DOMContentLoaded", () => {
  // background-image
  Array.from(document.querySelectorAll(".background-image")).forEach(bgi => {
    if (bgi.dataset.src) {
      bgi.style.backgroundImage = `url(${bgi.dataset.src})`;
      delete bgi.dataset.src;
    }
  });

  // switch
  document.addEventListener("click", e => {
    if (e.target.classList.contains("switch")) {
      e.target.classList.toggle("switch_turn_on");
      
      const ariaChecked = e.target.getAttribute("aria-checked");
      if (ariaChecked && ariaChecked === "false") {
        e.target.setAttribute("aria-checked", "true");
      } else {
        e.target.setAttribute("aria-checked", "false");
      }
    }
  });

  // burger
  document.addEventListener("click", e => {
    const burger = e.target.closest(".burger");

    if (burger) {
      burger.classList.toggle("burger_cross");

      const ariaPressed = burger.getAttribute("aria-pressed")
      if (ariaPressed && ariaPressed === "false") {
        burger.setAttribute("aria-pressed", "true");
      } else {
        burger.setAttribute("aria-pressed", "false");
      }
    }
  });

  // connect #mobile-menu-burger to #mobile-menu
  const mobileMenuBurger = document.querySelector("#mobile-menu-burger");
  const mobileMenu = document.querySelector("#mobile-menu");
  if (mobileMenuBurger && mobileMenu) {
    mobileMenuBurger.addEventListener("click", () => mobileMenu.classList.toggle("mobile-menu_open"));
  }

  // mobile-menu__scroll-area_shadow
  document.addEventListener("scroll", e => {
    const mobileMenuScrollArea = e.target;
    if (mobileMenuScrollArea !== document && mobileMenuScrollArea.classList.contains("mobile-menu__scroll-area")) {
      if (mobileMenuScrollArea.scrollTop !== 0) {
        mobileMenuScrollArea.classList.add("mobile-menu__scroll-area_shadow")
      } else {
        mobileMenuScrollArea.classList.remove("mobile-menu__scroll-area_shadow")
      }
    }
  }, true);

  // #theme-switch
  const themeSwitch = document.querySelector("#theme-switch");
  if (themeSwitch) {
    themeSwitch.addEventListener("click", () => {
      document.querySelectorAll(".page-wrapper").forEach(item => item.classList.toggle("page-wrapper_theme_dark"));
      document.querySelectorAll(".logo").forEach(item => item.classList.toggle("logo_theme_dark"));
      document.querySelectorAll(".nav").forEach(item => item.classList.toggle("nav_theme_dark"));
      document.querySelectorAll(".burger").forEach(item => item.classList.toggle("burger_theme_dark"));
      document.querySelectorAll(".mobile-menu").forEach(item => item.classList.toggle("mobile-menu_theme_dark"));
    });
  }
});