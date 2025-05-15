// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme') || 'dark';
  
    // Set initial theme from localStorage
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleSwitch.checked = currentTheme === 'light';
  
    // Toggle theme when switch is clicked
    toggleSwitch.addEventListener('change', function() {
      const theme = this.checked ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
});

