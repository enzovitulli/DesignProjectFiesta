// Keyboard handler function
function handleAccordionKeyPress(event) {
  // Check for both Enter and Space key codes
  if (event.key === 'Enter' || event.code === 'Space') {
    event.preventDefault(); // Prevent page scroll and default actions
    event.target.click(); // This will trigger the click event handler
  }
}

// Accordion functionality for bottle lists on vip.html
document.querySelectorAll(".vip-bottle-list h3").forEach((header) => {
  // Add click handler
  header.addEventListener("click", () => {
    // Close all other sections
    document.querySelectorAll(".vip-bottle-list .table-container.active").forEach((container) => {
      if (container !== header.nextElementSibling) {
        container.classList.remove("active");
        container.previousElementSibling.classList.remove("active");
        // Update aria-expanded state
        container.previousElementSibling.setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle current section
    header.classList.toggle("active");
    const container = header.nextElementSibling;
    container.classList.toggle("active");
    
    // Update aria-expanded state
    const isExpanded = container.classList.contains("active");
    header.setAttribute('aria-expanded', isExpanded.toString());
  });

  // Add keyboard handler
  header.addEventListener('keydown', handleAccordionKeyPress);
});

// Open first category by default
document.querySelector(".vip-bottle-list h3").click();