document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Set current year in copyright
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Expandable section functionality
    const expandButton = document.getElementById('expand-button');
    const expandableContent = document.getElementById('expandable-content');
    const chevronIcon = expandButton.querySelector('.chevron-icon');

    expandButton.addEventListener('click', function() {
        expandableContent.classList.toggle('expanded');
        chevronIcon.style.transform = expandableContent.classList.contains('expanded') ? 'rotate(180deg)' : 'rotate(0)';
        expandButton.textContent = expandableContent.classList.contains('expanded') ? 'Less Information ' : 'More Information ';
        expandButton.appendChild(chevronIcon);
    });

    // Newsletter form submission (prevent default for demo)
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });

    // Add hover animations to icons
    const iconContainers = document.querySelectorAll('.contact-item, .quick-link-item, .social-link');
    iconContainers.forEach(container => {
        const icon = container.querySelector('svg');
        container.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            icon.style.transition = 'transform 0.3s';
        });
        container.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Fade in animation for footer sections
    const footerSections = document.querySelectorAll('.footer-section, .expandable-section, .footer-bottom');
    footerSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
});