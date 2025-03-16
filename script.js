document.addEventListener('DOMContentLoaded', () => {
    // Existing navigation scroll functionality
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typed.js for dynamic title
    new Typed('#typed-title', {
        strings: ['哈夫克社区', 'Haavk Community'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    // Add subtle hover effect to members
    const memberItems = document.querySelectorAll('.members-list li');
    memberItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });
});