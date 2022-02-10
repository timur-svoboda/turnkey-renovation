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
    }
  });
});