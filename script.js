// Hide loading animation when page is fully loaded
window.addEventListener('load', () => {
    const loadingOverlay = document.querySelector('.loading-overlay');
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 500); // Match the transition duration
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    // Remove setting default theme to light mode
    // document.body.classList.add('light-mode');

    // Remove mode switch event listener
    // const modeSwitch = document.querySelector('.mode-switch');
    // modeSwitch.addEventListener('click', () => {
    //     document.body.classList.toggle('light-mode');
    // });

    // Change navbar background color when scrolling down from the top of the page
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
            backToTopButton.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            backToTopButton.classList.remove('visible');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animations
    const scrollElements = document.querySelectorAll('.scroll-element');
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Back to top button functionality
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});