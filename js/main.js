// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
document.querySelector(".dropbtn").addEventListener("click", function() {
    document.querySelector(".dropdown-content").classList.toggle("show");
});

// Dropdown menu
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.querySelector(".dropdown-content").classList.remove("show");
    }
}
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

// Logo sprite animation
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");

  logo.addEventListener("mouseenter", () => {
      if (!logo.classList.contains("animating")) {
          logo.classList.add("animating");
          let frame = 0;
          const totalFrames = 11;
          const frameWidth = 1200; // Each frame width
          const interval = setInterval(() => {
              frame++;
              if (frame >= totalFrames) {
                  clearInterval(interval);
                  logo.style.backgroundPosition = "0 0"; // Reset to initial frame
                  logo.classList.remove("animating");
              } else {
                  logo.style.backgroundPosition = `-${frame * frameWidth}px 0`;
              }
          }, 100); // Adjust speed of animation
      }
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
const slideWidth = 200;
const slideCount = slides.length;
const gap = 16;

sliderTrack.style.width = `${(slideWidth + gap) * slideCount}px`;
sliderTrack.style.width = `${(slideWidth + gap) * slideCount}px`;


// Get URL parameters to show booking summary in the payment.html form (REMOVE)
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