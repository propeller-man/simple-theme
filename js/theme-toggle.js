// theme-toggle.js

const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};

// Set the theme on initial load
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    document.body.classList.add(storedTheme);
}

