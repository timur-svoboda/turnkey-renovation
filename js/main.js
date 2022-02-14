"use strict";document.addEventListener("DOMContentLoaded",function(){Array.from(document.querySelectorAll(".background-image")).forEach(function(e){e.dataset.src&&(e.style.backgroundImage="url(".concat(e.dataset.src,")"),delete e.dataset.src)}),document.addEventListener("click",function(e){var t;e.target.classList.contains("switch")&&(e.target.classList.toggle("switch_turn_on"),(t=e.target.getAttribute("aria-checked"))&&"false"===t?e.target.setAttribute("aria-checked","true"):e.target.setAttribute("aria-checked","false"))}),document.addEventListener("click",function(e){var t,e=e.target.closest(".burger");e&&(e.classList.toggle("burger_cross"),(t=e.getAttribute("aria-pressed"))&&"false"===t?e.setAttribute("aria-pressed","true"):e.setAttribute("aria-pressed","false"))});var e=document.querySelector("#mobile-menu-burger"),t=document.querySelector("#mobile-menu"),r=(e&&t&&e.addEventListener("click",function(){t.classList.toggle("mobile-menu_open"),document.body.classList.toggle("page-wrapper_disable-scrolling")}),document.querySelector(".mobile-menu__scroll-area")),e=(r&&r.addEventListener("scroll",function(e){r.classList.toggle("mobile-menu__scroll-area_shadow",0!==r.scrollTop)}),document.querySelector("#theme-switch")),o=(e&&e.addEventListener("click",function(){document.querySelectorAll(".page-wrapper").forEach(function(e){return e.classList.toggle("page-wrapper_theme_dark")}),document.querySelectorAll(".header").forEach(function(e){return e.classList.toggle("header_theme_dark")}),document.querySelectorAll(".logo").forEach(function(e){return e.classList.toggle("logo_theme_dark")}),document.querySelectorAll(".nav").forEach(function(e){return e.classList.toggle("nav_theme_dark")}),document.querySelectorAll(".burger").forEach(function(e){return e.classList.toggle("burger_theme_dark")}),document.querySelectorAll(".mobile-menu").forEach(function(e){return e.classList.toggle("mobile-menu_theme_dark")}),document.querySelectorAll(".first-screen").forEach(function(e){return e.classList.toggle("first-screen_theme_dark")}),document.querySelectorAll(".button").forEach(function(e){return e.classList.toggle("button_theme_dark")}),document.querySelectorAll(".title").forEach(function(e){return e.classList.toggle("title_theme_dark")}),document.querySelectorAll(".arrow-link").forEach(function(e){return e.classList.toggle("arrow-link_theme_dark")}),document.querySelectorAll(".section-about").forEach(function(e){return e.classList.toggle("section-about_theme_dark")}),document.querySelectorAll(".section-statistics").forEach(function(e){return e.classList.toggle("section-statistics_theme_dark")}),document.querySelectorAll(".letter").forEach(function(e){e.classList.toggle("letter_theme_light"),e.classList.toggle("letter_theme_dark")}),document.querySelectorAll(".section-projects").forEach(function(e){e.classList.toggle("section-projects_theme_light"),e.classList.toggle("section-projects_theme_dark")}),document.querySelectorAll(".workflow-step").forEach(function(e){e.classList.toggle("workflow-step_theme_light"),e.classList.toggle("workflow-step_theme_dark")})}),document.querySelector(".header"));function c(e){e.classList.add("popup_close");var t,e=e.querySelector(".popup__content_youtube-video");e&&(t=e.src,e.src=t)}o&&document.addEventListener("scroll",function(){return o.classList.toggle("header_sticky",0<window.pageYOffset)}),document.addEventListener("click",function(e){e.target.classList.contains("popup")&&c(e.target)}),document.addEventListener("click",function(e){e.target.closest(".popup__cross")&&c(e.target.closest(".popup"))}),document.addEventListener("click",function(e){var t=e.target.closest(".video-preview"),e=e.target.closest(".popup");t&&!e&&t.querySelector(".popup").classList.remove("popup_close")}),document.addEventListener("mouseenter",function(e){e.target.classList&&e.target.classList.contains("arrow-link")&&e.target.classList.add("arrow-link_hovered")},!0),document.addEventListener("mouseleave",function(e){e.target.classList&&e.target.classList.contains("arrow-link")&&e.target.classList.remove("arrow-link_hovered")},!0),Array.from(document.querySelectorAll(".section-projects__project-slider")).forEach(function(e){var t=e.querySelector(".section-projects__project-slider-pagination");new Swiper(e,{pagination:{el:t,type:"bullets",bulletClass:"section-projects__project-slider-bullet",bulletActiveClass:"section-projects__project-slider-bullet_active"}})})});
//# sourceMappingURL=main.js.map