document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    // Function to check if an element is in view
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    // Function to display elements with scroll animations
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    // Handle scroll animations for elements
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    // Scroll event to change navbar background and show back-to-top button
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 0;
        navbar.classList.toggle('scrolled', scrolled);
        backToTopButton.classList.toggle('visible', scrolled);
        handleScrollAnimation();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = document.querySelector(anchor.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        });
    });

    // Back-to-top button functionality
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    // Initial scroll animation setup
    const scrollElements = document.querySelectorAll('.scroll-element, .contact-section');
    handleScrollAnimation();
});
