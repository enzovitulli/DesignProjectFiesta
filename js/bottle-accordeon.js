// Accordion functionality for bottle lists on vip.html
document.querySelectorAll(".vip-bottle-list h3").forEach((header) => {
  header.addEventListener("click", () => {
    // Close all other sections
    document.querySelectorAll(".vip-bottle-list .table-container.active").forEach((container) => {
      if (container !== header.nextElementSibling) {
        container.classList.remove("active");
        container.previousElementSibling.classList.remove("active");
      }
    });

    // Toggle current section
    header.classList.toggle("active");
    const container = header.nextElementSibling;
    container.classList.toggle("active");
  });
});

// Open first category by default
document.querySelector(".vip-bottle-list h3").click();