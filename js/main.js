// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});


// Unified glow effect
const glowElements = document.querySelectorAll(".glow-effect");

glowElements.forEach((element) => {
  element.addEventListener("mousemove", (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    element.style.setProperty("--mouse-x", `${x}px`);
    element.style.setProperty("--mouse-y", `${y}px`);
  });
});


// Tilt effect on room cards (keeping this separate as it's different functionality)
const cards = document.querySelectorAll(".room-card");

cards.forEach((card) => {
  let ticking = false;

  card.addEventListener("mousemove", (e) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / 20);
        const rotateY = (x - centerX) / 20;

        card.classList.add("tilt");
        card.style.setProperty("--rotateX", `${rotateX}deg`);
        card.style.setProperty("--rotateY", `${rotateY}deg`);

        ticking = false;
      });

      ticking = true;
    }
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("tilt");
    card.style.setProperty("--rotateX", "0deg");
    card.style.setProperty("--rotateY", "0deg");
  });
});


// Slider on index.html
const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const slideWidth = 200; // Match this with your CSS
const slideCount = slides.length;
const gap = 16; // This should match your $spacing-unit * 2

// Set the track width to accommodate all slides plus gaps
sliderTrack.style.width = `${(slideWidth + gap) * slideCount}px`;


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


// Get URL parameters to show booking summary in the payment.html form
//Not sure if using these
const params = new URLSearchParams(window.location.search);
const summaryDiv = document.querySelector(".booking-summary");

if (params.has("room")) {
  const summary = `
          <div class="summary-details">
              <h3>Resumen de la Reserva</h3>
              <p><strong>Nombre:</strong> ${params.get("name")}</p>
              <p><strong>Email:</strong> ${params.get("email")}</p>
              <p><strong>Teléfono:</strong> ${params.get("phone")}</p>
              <p><strong>Sala:</strong> ${params.get("room")}</p>
              <p><strong>Invitados:</strong> ${params.get("guests")}</p>
          </div>
      `;
  summaryDiv.innerHTML = summary;
}

// FAQ Accordion functionality
document.querySelectorAll('.faq-item h3').forEach(header => {
    header.addEventListener('click', () => {
        const answer = header.nextElementSibling;
        const isActive = header.classList.contains('active');

        // Close all other answers
        document.querySelectorAll('.faq-item h3.active').forEach(activeHeader => {
            if (activeHeader !== header) {
                activeHeader.classList.remove('active');
                activeHeader.nextElementSibling.classList.remove('active');
            }
        });

        // Toggle current answer
        header.classList.toggle('active');
        answer.classList.toggle('active');
    });
});
