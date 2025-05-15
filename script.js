// Scroll event to add a class for smooth section transitions
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop) {
            section.classList.add('visible');
        }
    });

    // Change header background on scroll
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Show/Hide Scroll to Top button
    const topButton = document.querySelector('.top');
    if (window.scrollY > 200) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});

// Scroll to top functionality
document.querySelector('.top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
