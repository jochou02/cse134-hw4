document.addEventListener('DOMContentLoaded', () => {
    const bodyElement = document.body;
    const toggleButton = document.getElementById('theme-toggle');
    const h1Element = document.querySelector('h1');
    const h2Elements = document.querySelectorAll('h2');
    const h3Elements = document.querySelectorAll('h3');
    const footerPElement = document.querySelector('footer p:has(+ nav)');
    const ths = document.querySelectorAll('thead th');

    // Load theme from localStorage, default to dark (no class)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        bodyElement.classList.add('light-theme');
        h1Element.classList.add('light-theme');
        h2Elements.forEach(h2 => {
            h2.classList.add('light-theme');
        });
        h3Elements.forEach(h3 => {
            h3.classList.add('light-theme');
        });
        footerPElement.classList.add('light-theme');
        ths.forEach(th => {
            th.classList.add('light-theme');
        });
    }

    // Toggle functionality
    const toggleTheme = () => {
        const isLight = bodyElement.classList.contains('light-theme');
        const newTheme = isLight ? 'dark' : 'light';

        // Update classes for all relevant elements
        bodyElement.classList.toggle('dark-theme', isLight);
        bodyElement.classList.toggle('light-theme', !isLight);
        h1Element.classList.toggle('dark-theme', isLight);
        h1Element.classList.toggle('light-theme', !isLight);
        h2Elements.forEach(h2 => {
            h2.classList.toggle('dark-theme', isLight);
            h2.classList.toggle('light-theme', !isLight);
        });
        h3Elements.forEach(h3 => {
            h3.classList.toggle('dark-theme', isLight);
            h3.classList.toggle('light-theme', !isLight);
        });
        footerPElement.classList.toggle('dark-theme', isLight);
        footerPElement.classList.toggle('light-theme', !isLight);
        ths.forEach(th => {
            th.classList.toggle('dark-theme', isLight);
            th.classList.toggle('light-theme', !isLight);
        });

        // Save new theme to localStorage
        localStorage.setItem('theme', newTheme);
    };

    toggleButton.addEventListener('click', toggleTheme);
});
