"use strict";document.addEventListener("DOMContentLoaded",function(){new LazyLoad,Array.from(document.querySelectorAll(".background-image")).forEach(function(t){t.dataset.src&&(t.style.backgroundImage="url(".concat(t.dataset.src,")"),delete t.dataset.src)}),document.addEventListener("click",function(t){var e;t.target.classList.contains("switch")&&(t.target.classList.toggle("switch_turn_on"),(e=t.target.getAttribute("aria-checked"))&&"false"===e?t.target.setAttribute("aria-checked","true"):t.target.setAttribute("aria-checked","false"))}),document.addEventListener("click",function(t){var e,t=t.target.closest(".burger");t&&(t.classList.toggle("burger_cross"),(e=t.getAttribute("aria-pressed"))&&"false"===e?t.setAttribute("aria-pressed","true"):t.setAttribute("aria-pressed","false"))});var t=document.querySelector("#mobile-menu-burger"),e=document.querySelector("#mobile-menu"),a=(t&&e&&t.addEventListener("click",function(){e.classList.toggle("mobile-menu_open"),document.body.classList.toggle("page-wrapper_disable-scrolling")}),document.querySelector(".mobile-menu__scroll-area")),t=(a&&a.addEventListener("scroll",function(t){a.classList.toggle("mobile-menu__scroll-area_shadow",0!==a.scrollTop)}),document.querySelector("#theme-switch")),s=(t&&t.addEventListener("click",function(){document.querySelectorAll(".page-wrapper").forEach(function(t){return t.classList.toggle("page-wrapper_theme_dark")}),document.querySelectorAll(".header").forEach(function(t){return t.classList.toggle("header_theme_dark")}),document.querySelectorAll(".logo").forEach(function(t){return t.classList.toggle("logo_theme_dark")}),document.querySelectorAll(".nav").forEach(function(t){return t.classList.toggle("nav_theme_dark")}),document.querySelectorAll(".burger").forEach(function(t){return t.classList.toggle("burger_theme_dark")}),document.querySelectorAll(".mobile-menu").forEach(function(t){return t.classList.toggle("mobile-menu_theme_dark")}),document.querySelectorAll(".first-screen").forEach(function(t){return t.classList.toggle("first-screen_theme_dark")}),document.querySelectorAll(".button").forEach(function(t){t.classList.contains("button_theme_outlined")||(t.classList.toggle("button_theme_light"),t.classList.toggle("button_theme_dark"))}),document.querySelectorAll(".title").forEach(function(t){return t.classList.toggle("title_theme_dark")}),document.querySelectorAll(".arrow-link").forEach(function(t){return t.classList.toggle("arrow-link_theme_dark")}),document.querySelectorAll(".section-about").forEach(function(t){return t.classList.toggle("section-about_theme_dark")}),document.querySelectorAll(".section-statistics").forEach(function(t){return t.classList.toggle("section-statistics_theme_dark")}),document.querySelectorAll(".letter").forEach(function(t){t.classList.toggle("letter_theme_light"),t.classList.toggle("letter_theme_dark")}),document.querySelectorAll(".section-projects").forEach(function(t){t.classList.toggle("section-projects_theme_light"),t.classList.toggle("section-projects_theme_dark")}),document.querySelectorAll(".workflow-step").forEach(function(t){t.classList.toggle("workflow-step_theme_light"),t.classList.toggle("workflow-step_theme_dark")}),document.querySelectorAll(".tab-bar").forEach(function(t){t.classList.toggle("tab-bar_theme_light"),t.classList.toggle("tab-bar_theme_dark")}),document.querySelectorAll(".section-calculator").forEach(function(t){t.classList.toggle("section-calculator_theme_light"),t.classList.toggle("section-calculator_theme_dark")}),document.querySelectorAll(".calculator").forEach(function(t){t.classList.toggle("calculator_theme_light"),t.classList.toggle("calculator_theme_dark")}),document.querySelectorAll(".range").forEach(function(t){t.classList.toggle("range_theme_light"),t.classList.toggle("range_theme_dark")}),document.querySelectorAll(".radio").forEach(function(t){t.classList.toggle("radio_theme_light"),t.classList.toggle("radio_theme_dark")}),document.querySelectorAll(".checkbox-list").forEach(function(t){t.classList.toggle("checkbox-list_theme_light"),t.classList.toggle("checkbox-list_theme_dark")}),document.querySelectorAll(".footer-nav").forEach(function(t){t.classList.toggle("footer-nav_theme_light"),t.classList.toggle("footer-nav_theme_dark")}),document.querySelectorAll(".footer").forEach(function(t){t.classList.toggle("footer_theme_light"),t.classList.toggle("footer_theme_dark")})}),document.querySelector(".header"));function u(t){t.classList.add("popup_close");var e,t=t.querySelector(".popup__content_youtube-video");t&&(e=t.src,t.src=e)}s&&document.addEventListener("scroll",function(){return s.classList.toggle("header_sticky",0<window.pageYOffset)}),document.addEventListener("click",function(t){t.target.classList.contains("popup")&&u(t.target)}),document.addEventListener("click",function(t){t.target.closest(".popup__cross")&&u(t.target.closest(".popup"))}),document.addEventListener("click",function(t){var e=t.target.closest(".video-preview"),t=t.target.closest(".popup");e&&!t&&e.querySelector(".popup").classList.remove("popup_close")}),document.addEventListener("mouseenter",function(t){t.target.classList&&t.target.classList.contains("arrow-link")&&t.target.classList.add("arrow-link_hovered")},!0),document.addEventListener("mouseleave",function(t){t.target.classList&&t.target.classList.contains("arrow-link")&&t.target.classList.remove("arrow-link_hovered")},!0),Array.from(document.querySelectorAll(".section-projects__project-slider")).forEach(function(t){var e=t.querySelector(".section-projects__project-slider-pagination");new Swiper(t,{preloadImages:!1,lazy:!0,pagination:{el:e,type:"bullets",bulletClass:"section-projects__project-slider-bullet",bulletActiveClass:"section-projects__project-slider-bullet_active"}})}),document.addEventListener("mouseenter",function(t){t.target.classList&&t.target.classList.contains("tab-bar__tab")&&t.target.classList.add("tab-bar__tab_hover")},!0),document.addEventListener("mouseleave",function(t){t.target.classList&&t.target.classList.contains("tab-bar__tab")&&t.target.classList.remove("tab-bar__tab_hover")},!0),document.addEventListener("click",function(t){var e,a=t.target;t.target.classList&&t.target.classList.contains("tab-bar__tab")&&(a.classList.contains("tab-bar__tab_active")||(e=a.closest(".tab-bar"),Array.from(e.querySelectorAll(".tab-bar__tab")).forEach(function(t){t.classList.remove("tab-bar__tab_active"),t.setAttribute("aria-selected","false")}),a.classList.add("tab-bar__tab_active"),a.setAttribute("aria-selected","true"),e.dataset.value=a.dataset.value,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,value:function(){return e.dataset.value}}))))}),document.addEventListener("mouseenter",function(t){t.target.classList&&t.target.classList.contains("button")&&(t.target.classList.contains("button_theme_light")?t.target.classList.add("button_theme_light-hover"):t.target.classList.contains("button_theme_dark")&&t.target.classList.add("button_theme_dark-hover"))},!0),document.addEventListener("mouseleave",function(t){t.target.classList&&t.target.classList.contains("button")&&(t.target.classList.contains("button_theme_light")?t.target.classList.remove("button_theme_light-hover"):t.target.classList.contains("button_theme_dark")&&t.target.classList.remove("button_theme_dark-hover"))},!0);var r,c,t=document.querySelector(".section-calculator__slider"),d=(t&&(r=new Swiper(t,{preloadImages:!1,lazy:!0,allowTouchMove:!1}),(c=document.querySelector(".section-calculator__tab-bar"))&&c.addEventListener("change",function(){switch(c.dataset.value){case"standard":r.slideTo(0);break;case"comfort":r.slideTo(1);break;case"premium":r.slideTo(2)}})),document.addEventListener("change",function(t){t.target.classList&&t.target.classList.contains("calculator__range")&&(t.target.nextElementSibling.value=t.target.dataset.value+" м2")}),document.querySelector(".section-calculator__plan-price")),o=document.querySelector(".section-calculator__tab-bar"),n=document.querySelector(".section-calculator__range"),l=document.querySelector(".section-calculator__radio"),i=document.querySelector(".section-calculator__checkbox-list");d&&o&&n&&l&&i&&document.addEventListener("change",function(t){t.target!==o&&t.target!==n&&t.target!==l&&t.target!==i||(d.value=function(){var t=4e3;switch(o.dataset.value){case"standard":t*=1;break;case"comfort":t*=1.2;break;case"premium":t*=1.5}return t=(t=(t*=1+(n.dataset.value-n.dataset.min)/(n.dataset.max-n.dataset.min))*(+("0."+(l.dataset.value-1))+1))*(+("0."+(""===i.dataset.values?[]:i.dataset.values.split(",")).length)+1),Math.round(t)}())}),document.addEventListener("mousedown",function(t){var e;t.target.classList&&t.target.classList.contains("range__area")&&((e=t.target.closest(".range")).querySelector(".range__circle").style.left=t.offsetX+"px",e.dataset.value=Math.round(+e.dataset.min+(+e.dataset.max-+e.dataset.min)*t.offsetX/t.target.offsetWidth),e.dispatchEvent(new CustomEvent("change",{bubbles:!0,value:function(){return+e.dataset.value}})))}),document.addEventListener("mousedown",function(t){t.target.classList&&t.target.classList.contains("range__circle-area")&&(t.target.closest(".range__circle").dataset.drag=!0)}),document.addEventListener("mouseup",function(){var t=document.querySelector(".range__circle[data-drag=true]");t&&(t.dataset.drag=!1)}),document.addEventListener("mousemove",function(t){var e,a=document.querySelector(".range__circle[data-drag=true]");a&&(e=a.closest(".range"),t=Math.round(Math.max(0,Math.min(t.clientX-e.getBoundingClientRect().left,e.offsetWidth))),a.style.left=t+"px",e.dataset.value=Math.round(+e.dataset.min+(+e.dataset.max-+e.dataset.min)*t/e.offsetWidth),e.dispatchEvent(new CustomEvent("change",{bubbles:!0,value:function(){return+e.dataset.value}})))}),document.addEventListener("click",function(t){var e;t.target.classList&&t.target.classList.contains("radio__item")&&((e=t.target.closest(".radio")).querySelector(".radio__item_active").classList.remove("radio__item_active"),t.target.classList.add("radio__item_active"),e.dataset.value=t.target.dataset.value,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,value:function(){return e.dataset.value}})))}),document.addEventListener("click",function(t){var e,a;t.target.classList&&t.target.classList.contains("checkbox-list__checkbox")&&(e=t.target.closest(".checkbox-list"),a=e.dataset.values?e.dataset.values.split(","):[],t.target.classList.toggle("checkbox-list__checkbox_active"),a.includes(t.target.dataset.value)?a.splice(a.indexOf(t.target.dataset.value),1):a.push(t.target.dataset.value),e.dataset.values=a.join(","),e.dispatchEvent(new CustomEvent("change",{bubbles:!0,value:function(){return a}})))}),document.addEventListener("mouseenter",function(t){var e;t.target.classList&&t.target.classList.contains("footer-nav__link")&&((e=t.target.closest(".footer-nav")).classList.contains("footer-nav_theme_light")?t.target.classList.add("footer-nav__link_theme_light-hover"):e.classList.contains("footer-nav_theme_dark")&&t.target.classList.add("footer-nav__link_theme_dark-hover"))},!0),document.addEventListener("mouseleave",function(t){t.target.classList&&t.target.classList.contains("footer-nav__link")&&(t.target.classList.remove("footer-nav__link_theme_light-hover"),t.target.classList.remove("footer-nav__link_theme_dark-hover"))},!0)});
//# sourceMappingURL=main.js.map
