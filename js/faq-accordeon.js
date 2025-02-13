// FAQ Accordion functionality
document.querySelectorAll('.faq-item h3').forEach(header => {
    header.addEventListener('click', () => {
        const answer = header.nextElementSibling;

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
