document.addEventListener("DOMContentLoaded", () => {
  const mainApp = document.querySelector("[data-app]");
  const header = document.querySelector("[data-header]");

  mainApp.addEventListener("scroll", () => {
    if (mainApp.scrollTop > 10) {
      header.classList.add("header__content--sticky");
    } else {
      header.classList.remove("header__content--sticky");
    }
  });
});
