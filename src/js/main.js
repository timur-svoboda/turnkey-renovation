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
      document.querySelectorAll(".button").forEach(button => {
        if (!button.classList.contains("button_theme_outlined")) {
          button.classList.toggle("button_theme_light");
          button.classList.toggle("button_theme_dark");
        }
      });
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
      document.querySelectorAll(".workflow-step").forEach(item => {
        item.classList.toggle("workflow-step_theme_light");
        item.classList.toggle("workflow-step_theme_dark");
      });
      document.querySelectorAll(".tab-bar").forEach(tabBar => {
        tabBar.classList.toggle("tab-bar_theme_light");
        tabBar.classList.toggle("tab-bar_theme_dark");
      });
      document.querySelectorAll(".section-calculator").forEach(tabBar => {
        tabBar.classList.toggle("section-calculator_theme_light");
        tabBar.classList.toggle("section-calculator_theme_dark");
      });
      document.querySelectorAll(".calculator").forEach(tabBar => {
        tabBar.classList.toggle("calculator_theme_light");
        tabBar.classList.toggle("calculator_theme_dark");
      });
      document.querySelectorAll(".range").forEach(tabBar => {
        tabBar.classList.toggle("range_theme_light");
        tabBar.classList.toggle("range_theme_dark");
      });
      document.querySelectorAll(".radio").forEach(tabBar => {
        tabBar.classList.toggle("radio_theme_light");
        tabBar.classList.toggle("radio_theme_dark");
      });
      document.querySelectorAll(".checkbox-list").forEach(tabBar => {
        tabBar.classList.toggle("checkbox-list_theme_light");
        tabBar.classList.toggle("checkbox-list_theme_dark");
      });
      document.querySelectorAll(".footer-nav").forEach(tabBar => {
        tabBar.classList.toggle("footer-nav_theme_light");
        tabBar.classList.toggle("footer-nav_theme_dark");
      });
      document.querySelectorAll(".footer").forEach(tabBar => {
        tabBar.classList.toggle("footer_theme_light");
        tabBar.classList.toggle("footer_theme_dark");
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

  // tab-bar
  document.addEventListener("mouseenter", e => {
    if (e.target.classList && e.target.classList.contains("tab-bar__tab")) {
      e.target.classList.add("tab-bar__tab_hover");
    }
  }, true);

  document.addEventListener("mouseleave", e => {
    if (e.target.classList && e.target.classList.contains("tab-bar__tab")) {
      e.target.classList.remove("tab-bar__tab_hover");
    }
  }, true);

  document.addEventListener("click", e => {
    const tab = e.target;
    if (e.target.classList && e.target.classList.contains("tab-bar__tab")) {
      if (!tab.classList.contains("tab-bar__tab_active")) {
        const tabBar = tab.closest(".tab-bar");
        Array.from(tabBar.querySelectorAll(".tab-bar__tab")).forEach(tab => {
          tab.classList.remove("tab-bar__tab_active");
          tab.setAttribute("aria-selected", "false");
        });
        tab.classList.add("tab-bar__tab_active");
        tab.setAttribute("aria-selected", "true");
        tabBar.dataset.value = tab.dataset.value;
        tabBar.dispatchEvent(new CustomEvent("change", {
          bubbles: true,
          value: () => tabBar.dataset.value
        }));
      }
    }
  });

  // button 
  document.addEventListener("mouseenter", e => {
    if (e.target.classList && e.target.classList.contains("button")) {
      if (e.target.classList.contains("button_theme_light")) {
        e.target.classList.add("button_theme_light-hover");
      } else if (e.target.classList.contains("button_theme_dark")) {
        e.target.classList.add("button_theme_dark-hover");
      }
    }
  }, true);

  document.addEventListener("mouseleave", e => {
    if (e.target.classList && e.target.classList.contains("button")) {
      if (e.target.classList.contains("button_theme_light")) {
        e.target.classList.remove("button_theme_light-hover");
      } else if (e.target.classList.contains("button_theme_dark")) {
        e.target.classList.remove("button_theme_dark-hover");
      }
    }
  }, true);

  // section-calculator
  const calculatorSlider = document.querySelector(".section-calculator__slider");
  if (calculatorSlider) {
    const slider = new Swiper(calculatorSlider, {
      allowTouchMove: false
    });

    const calculatorTabBar = document.querySelector(".section-calculator__tab-bar");
    if (calculatorTabBar) {
      calculatorTabBar.addEventListener("change", () => {
        const value = calculatorTabBar.dataset.value;
        switch (value) {
          case "standard":
            slider.slideTo(0);
            break;
          case "comfort":
            slider.slideTo(1);
            break;
          case "premium":
            slider.slideTo(2);
            break;
        }
      });
    }
  }

  document.addEventListener("change", e => {
    if (e.target.classList && e.target.classList.contains("calculator__range")) {
      const output = e.target.nextElementSibling;
      output.value = e.target.dataset.value + " м2"
    }
  });

  {
    const planPrice = document.querySelector(".section-calculator__plan-price");
    const tabBar = document.querySelector(".section-calculator__tab-bar");
    const range = document.querySelector(".section-calculator__range");
    const radio = document.querySelector(".section-calculator__radio");
    const checkboxList = document.querySelector(".section-calculator__checkbox-list");
    if (planPrice && tabBar && range && radio && checkboxList) {
      function calcPrice() {
        let base = 4000;

        switch (tabBar.dataset.value) {
          case "standard":
            base *= 1;
            break;
          case "comfort":
            base *= 1.2;
            break;
          case "premium":
            base *= 1.5;
            break;
        }

        base *= 1 + (range.dataset.value - range.dataset.min) / (range.dataset.max - range.dataset.min);

        base *= 1 + +("0." + (radio.dataset.value - 1));

        const checkboxValues = checkboxList.dataset.values === "" ? [] : checkboxList.dataset.values.split(",");
        base *= 1 + +("0." + (checkboxValues.length));

        return Math.round(base);
      }

      document.addEventListener("change", e => {
        if (e.target === tabBar || e.target === range || e.target === radio || e.target === checkboxList) {
          planPrice.value = calcPrice();
        }
      });
    }
  }
  

  // range
  document.addEventListener("mousedown", e => {
    if (e.target.classList && e.target.classList.contains("range__area")) {
      const range = e.target.closest(".range");
      const circle = range.querySelector(".range__circle");
      
      circle.style.left = e.offsetX + "px";
      range.dataset.value = Math.round(+range.dataset.min + (+range.dataset.max - +range.dataset.min) * e.offsetX / e.target.offsetWidth);
      
      range.dispatchEvent(new CustomEvent("change", {
        bubbles: true,
        value: () => +range.dataset.value
      }));
    }
  });
  
  document.addEventListener("mousedown", e => {
    if (e.target.classList && e.target.classList.contains("range__circle-area")) {
      e.target.closest(".range__circle").dataset.drag = true;
    }
  });

  document.addEventListener("mouseup", () => {
    const circle = document.querySelector(".range__circle[data-drag=true]");
    if (circle) {
      circle.dataset.drag = false
    }
  });

  document.addEventListener("mousemove", e => {
    const circle = document.querySelector(".range__circle[data-drag=true]");
    if (circle) {
      const range = circle.closest(".range");

      const left = Math.round(Math.max(0, Math.min(e.clientX - range.getBoundingClientRect().left, range.offsetWidth)));
      circle.style.left = left + "px";
      
      range.dataset.value = Math.round(+range.dataset.min + (+range.dataset.max - +range.dataset.min) * left / range.offsetWidth);
      range.dispatchEvent(new CustomEvent("change", {
        bubbles: true,
        value: () => +range.dataset.value
      }));
    }
  });

  // radio
  document.addEventListener("click", e => {
    if (e.target.classList && e.target.classList.contains("radio__item")) {
      const radio = e.target.closest(".radio");
      radio.querySelector(".radio__item_active").classList.remove("radio__item_active");
      e.target.classList.add("radio__item_active");
      radio.dataset.value = e.target.dataset.value;
      radio.dispatchEvent(new CustomEvent("change", {
        bubbles: true,
        value: () => radio.dataset.value
      }));
    }
  })

  // checkbox-list
  document.addEventListener("click", e => {
    if (e.target.classList && e.target.classList.contains("checkbox-list__checkbox")) {
      const checkboxList = e.target.closest(".checkbox-list");
      const values = !checkboxList.dataset.values ? [] : checkboxList.dataset.values.split(",");

      e.target.classList.toggle("checkbox-list__checkbox_active");

      if (!values.includes(e.target.dataset.value)) {
        values.push(e.target.dataset.value);
      } else {
        values.splice(values.indexOf(e.target.dataset.value), 1);
      }

      checkboxList.dataset.values = values.join(",");
      checkboxList.dispatchEvent(new CustomEvent("change", {
        bubbles: true,
        value: () => values
      }));
    }
  })

  // footer-nav
  document.addEventListener("mouseenter", e => {
    if (e.target.classList && e.target.classList.contains("footer-nav__link")) {
      const footerNav = e.target.closest(".footer-nav");
      if (footerNav.classList.contains("footer-nav_theme_light")) {
        e.target.classList.add("footer-nav__link_theme_light-hover");
      } else if (footerNav.classList.contains("footer-nav_theme_dark")) {
        e.target.classList.add("footer-nav__link_theme_dark-hover");
      }
    }
  }, true);

  document.addEventListener("mouseleave", e => {
    if (e.target.classList && e.target.classList.contains("footer-nav__link")) {
      e.target.classList.remove("footer-nav__link_theme_light-hover");
      e.target.classList.remove("footer-nav__link_theme_dark-hover");
    }
  }, true);
});