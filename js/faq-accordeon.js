// Keyboard handler function
function handleAccordionKeyPress(event) {
  if (event.key === 'Enter' || event.code === 'Space') {
    event.preventDefault();
    event.target.click();
  }
}

// FAQ Accordion functionality
document.querySelectorAll('.faq-item h3').forEach(header => {
    // Add ARIA attributes
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-controls', `answer-${Math.random().toString(36).substr(2, 9)}`);
    const answer = header.nextElementSibling;
    answer.setAttribute('role', 'region');
    answer.setAttribute('aria-hidden', 'true');

    // Add keyboard handler
    header.addEventListener('keydown', handleAccordionKeyPress);

    header.addEventListener('click', () => {
        const isExpanded = header.getAttribute('aria-expanded') === 'true';

        // Close all other answers
        document.querySelectorAll('.faq-item h3.active').forEach(activeHeader => {
            if (activeHeader !== header) {
                activeHeader.classList.remove('active');
                activeHeader.nextElementSibling.classList.remove('active');
                activeHeader.setAttribute('aria-expanded', 'false');
                activeHeader.nextElementSibling.setAttribute('aria-hidden', 'true');
            }
        });

        // Toggle current answer
        header.classList.toggle('active');
        answer.classList.toggle('active');
        header.setAttribute('aria-expanded', (!isExpanded).toString());
        answer.setAttribute('aria-hidden', isExpanded.toString());
    });
});
