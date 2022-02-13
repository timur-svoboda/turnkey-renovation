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
    mobileMenuBurger.addEventListener("click", () => {
      mobileMenu.classList.toggle("mobile-menu_open");
      document.body.classList.toggle("page-wrapper_disable-scrolling");
    });
  }

  // mobile-menu__scroll-area_shadow
  const mobileMenuScrollArea = document.querySelector(".mobile-menu__scroll-area");
  if (mobileMenuScrollArea) {
    mobileMenuScrollArea.addEventListener("scroll", e => {
      mobileMenuScrollArea.classList.toggle("mobile-menu__scroll-area_shadow", mobileMenuScrollArea.scrollTop !== 0);
    });
  }

  // #theme-switch
  const themeSwitch = document.querySelector("#theme-switch");
  if (themeSwitch) {
    themeSwitch.addEventListener("click", () => {
      document.querySelectorAll(".page-wrapper").forEach(item => item.classList.toggle("page-wrapper_theme_dark"));
      document.querySelectorAll(".header").forEach(item => item.classList.toggle("header_theme_dark"));
      document.querySelectorAll(".logo").forEach(item => item.classList.toggle("logo_theme_dark"));
      document.querySelectorAll(".nav").forEach(item => item.classList.toggle("nav_theme_dark"));
      document.querySelectorAll(".burger").forEach(item => item.classList.toggle("burger_theme_dark"));
      document.querySelectorAll(".mobile-menu").forEach(item => item.classList.toggle("mobile-menu_theme_dark"));
      document.querySelectorAll(".first-screen").forEach(item => item.classList.toggle("first-screen_theme_dark"));
      document.querySelectorAll(".button").forEach(item => item.classList.toggle("button_theme_dark"));
      document.querySelectorAll(".title").forEach(item => item.classList.toggle("title_theme_dark"));
      document.querySelectorAll(".arrow-link").forEach(item => item.classList.toggle("arrow-link_theme_dark"));
      document.querySelectorAll(".section-about").forEach(item => item.classList.toggle("section-about_theme_dark"));
      document.querySelectorAll(".section-statistics").forEach(item => item.classList.toggle("section-statistics_theme_dark"));
      document.querySelectorAll(".letter").forEach(item => {
        item.classList.toggle("letter_theme_light");
        item.classList.toggle("letter_theme_dark");
      });
      document.querySelectorAll(".section-projects").forEach(item => {
        item.classList.toggle("section-projects_theme_light");
        item.classList.toggle("section-projects_theme_dark");
      });
    });
  }

  // header
  const header = document.querySelector(".header");
  if (header) {
    document.addEventListener("scroll", () => header.classList.toggle("header_sticky", window.pageYOffset > 0))
  }

  // popup
  function closePopup(popup) {
    popup.classList.add("popup_close");

    const video = popup.querySelector(".popup__content_youtube-video");
    if (video) {
      const videoSrc = video.src;
      video.src = videoSrc;
    }
  }

  document.addEventListener("click", e => {
    if (e.target.classList.contains("popup")) closePopup(e.target);
  });

  document.addEventListener("click", e => {
    if (e.target.closest(".popup__cross")) closePopup(e.target.closest(".popup"));
  });

  // video-preview
  document.addEventListener("click", e => {
    const videoPreview = e.target.closest(".video-preview");
    const popup = e.target.closest(".popup");
    if (videoPreview && !popup) {
      videoPreview.querySelector(".popup").classList.remove("popup_close");
    }
  })
  

  // arrow-link
  document.addEventListener("mouseenter", e => {
    if (e.target.classList && e.target.classList.contains("arrow-link")) {
      e.target.classList.add("arrow-link_hovered");
    }
  }, true);

  document.addEventListener("mouseleave", e => {
    if (e.target.classList && e.target.classList.contains("arrow-link")) {
      e.target.classList.remove("arrow-link_hovered");
    }
  }, true);

  // section-projects
  Array.from(document.querySelectorAll(".section-projects__project-slider")).forEach(projectSlider => {
    const paginationElement = projectSlider.querySelector(".section-projects__project-slider-pagination");

    new Swiper(projectSlider, {
      pagination: {
        el: paginationElement,
        type: "bullets",
        bulletClass: "section-projects__project-slider-bullet",
        bulletActiveClass: "section-projects__project-slider-bullet_active"
      }
    });
  });
});