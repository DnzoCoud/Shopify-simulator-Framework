document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-header]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("header__content--sticky");
    } else {
      header.classList.remove("header__content--sticky");
    }
  });
});
