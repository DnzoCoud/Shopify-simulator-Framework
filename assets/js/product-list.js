document.addEventListener("DOMContentLoaded", () => {
  const loadMoreButton = document.getElementById("load-more");
  const products = document.querySelectorAll(".product-card");
  let visibleCount = 4;
  const loadAmount = 6;

  products.forEach((product, index) => {
    if (index >= visibleCount) {
      product.classList.add("hidden");
    }
  });

  loadMoreButton?.addEventListener("click", function () {
    let count = 0;
    products.forEach((product, index) => {
      if (index >= visibleCount && count < loadAmount) {
        product.classList.remove("hidden"); // Mostrar el producto
        product.style.opacity = 0;
        setTimeout(() => {
          product.style.opacity = 1;
          product.style.transition = "opacity 0.3s ease-in-out";
        }, 50);
        count++;
      }
    });

    visibleCount += loadAmount;

    // Ocultar el botón cuando no haya más productos por cargar
    if (visibleCount >= products.length) {
      loadMoreButton.style.display = "none";
    }
  });
});
