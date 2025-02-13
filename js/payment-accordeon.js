// Payment Accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  
  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all items
    accordionItems.forEach(otherItem => {
      otherItem.classList.remove('active');
      otherItem.querySelector('.accordion-content').style.maxHeight = null;
    });
    
    // Toggle clicked item
    if (!isActive) {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});