// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-mode');

    // Toggle the dark-mode class
    if (currentTheme) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Save the theme in local storage
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Save the theme in local storage
    }
}

// Load the saved theme from local storage on page load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
};

// Event listener for a button to toggle the theme
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Toggle Dark/Light Mode';
    themeToggleButton.style.position = 'fixed';
    themeToggleButton.style.top = '1em';
    themeToggleButton.style.right = '1em';
    themeToggleButton.style.padding = '0.5em';
    themeToggleButton.style.cursor = 'pointer';
    
    themeToggleButton.addEventListener('click', toggleTheme);
    
    document.body.appendChild(themeToggleButton);
});
