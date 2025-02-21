// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Logo sprite
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

// Glow effect
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

// Scroll to top functionality
document.addEventListener('DOMContentLoaded', () => {
  const scrollButton = document.getElementById('scroll-top');
  
  if (scrollButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        scrollButton.style.display = 'flex';
      } else {
        scrollButton.style.display = 'none';
      }
    });

    // Hide button initially
    scrollButton.style.display = 'none';
    
    scrollButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

// VIP preferences form handling
document.addEventListener('DOMContentLoaded', () => {
  const preferencesForm = document.getElementById('preferences-form');
  const modal = document.querySelector('.preferences-modal');
  const closeModalBtn = document.querySelector('.close-button');

  if (preferencesForm) {
    preferencesForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      // Optionally redirect after closing modal
      window.location.href = 'vip.html';
    });
  }
});

// VIP Room capacity validation
document.addEventListener('DOMContentLoaded', () => {
  const roomSelect = document.getElementById('room');
  const guestsInput = document.getElementById('guests');

  if (roomSelect && guestsInput) {
    // Set initial state
    guestsInput.min = 10;
    guestsInput.disabled = true;

    roomSelect.addEventListener('change', () => {
      const selectedOption = roomSelect.options[roomSelect.selectedIndex];
      
      if (selectedOption.value === '') {
        // No room selected
        guestsInput.disabled = true;
        guestsInput.value = '';
      } else {
        // Room selected - get capacity from data attributes
        const maxGuests = parseInt(selectedOption.getAttribute('data-max'));
        guestsInput.max = maxGuests;
        guestsInput.disabled = false;
        
        // Adjust current value if it exceeds new max
        if (parseInt(guestsInput.value) > maxGuests) {
          guestsInput.value = maxGuests;
        }
      }
    });

    // Validate input when user types or changes value
    guestsInput.addEventListener('input', () => {
      let value = parseInt(guestsInput.value);
      const max = parseInt(guestsInput.max);
      const min = parseInt(guestsInput.min);

      if (value > max) {
        guestsInput.value = max;
      } else if (value < min && value !== '') {
        guestsInput.value = min;
      }
    });
  }
});

// Tilt effect on index.hmtl room cards
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

// VIP Preferences Form Handling
document.addEventListener('DOMContentLoaded', function() {
  const preferencesForm = document.getElementById('preferences-form');
  const modal = document.querySelector('.preferences-modal');
  const closeButton = modal?.querySelector('.close-button');

  if (preferencesForm) {
    preferencesForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      modal?.classList.add('active');
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', function() {
      modal?.classList.remove('active');
      window.location.href = 'vip.html';
    });
  }
});

// Slider on index.html
const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const slideWidth = 200;
const slideCount = slides.length;
const gap = 16;

sliderTrack.style.width = `${(slideWidth + gap) * slideCount}px`;
sliderTrack.style.width = `${(slideWidth + gap) * slideCount}px`;