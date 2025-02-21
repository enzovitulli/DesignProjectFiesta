document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('section-nav-toggle');
  const sectionNav = document.getElementById('section-nav');
  
  if (menuToggle && sectionNav) {
    // Toggle menu
    menuToggle.addEventListener('click', () => {
      sectionNav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!sectionNav.contains(e.target) && !menuToggle.contains(e.target)) {
        sectionNav.classList.remove('active');
      }
    });

    // Smooth scroll to sections
    const links = sectionNav.getElementsByTagName('a');
    Array.from(links).forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          sectionNav.classList.remove('active');
        }
      });
    });

    // Show/hide menu button based on scroll position
    const showMenuButton = () => {
      if (window.scrollY > 100) {
        menuToggle.style.display = 'flex';
      } else {
        menuToggle.style.display = 'none';
      }
    };

    // Initial check
    showMenuButton();
    
    // Check on scroll
    window.addEventListener('scroll', showMenuButton);
  }
});
