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

  document.querySelectorAll(".header__right a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        mainApp.scrollTo({
          top: targetElement.offsetTop - header.offsetHeight, // Ajuste por el header
          behavior: "smooth",
        });
      }
    });
  });
});
