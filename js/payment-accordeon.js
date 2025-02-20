// Keyboard handler function
function handleAccordionKeyPress(event) {
  if (event.key === 'Enter' || event.code === 'Space') {
    event.preventDefault();
    event.target.click();
  }
}

// Payment Accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  
  // Add ARIA attributes
  header.setAttribute('role', 'button');
  header.setAttribute('aria-expanded', 'false');
  header.setAttribute('tabindex', '0');
  header.setAttribute('aria-controls', `payment-${Math.random().toString(36).substr(2, 9)}`);
  content.setAttribute('role', 'region');
  content.setAttribute('aria-hidden', 'true');
  
  header.addEventListener('click', () => {
    const isExpanded = header.getAttribute('aria-expanded') === 'true';
    
    // Close all items
    accordionItems.forEach(otherItem => {
      const otherHeader = otherItem.querySelector('.accordion-header');
      const otherContent = otherItem.querySelector('.accordion-content');
      otherHeader.setAttribute('aria-expanded', 'false');
      otherContent.setAttribute('aria-hidden', 'true');
      otherItem.classList.remove('active');
      otherContent.style.maxHeight = null;
    });
    
    // Toggle clicked item
    if (!isExpanded) {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + "px";
      header.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
    }
  });
  
  // Keyboard handler
  header.addEventListener('keydown', handleAccordionKeyPress);
});