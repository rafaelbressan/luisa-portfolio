// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Get saved theme from localStorage or default to light
  const savedTheme = localStorage.getItem('luisa-theme') || 'light';
  
  // Apply saved theme
  if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
  }
  
  // Theme toggle click handler
  themeToggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    if (newTheme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
    
    // Save theme preference
    localStorage.setItem('luisa-theme', newTheme);
    
    // Optional: Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('themeChanged', { 
      detail: { theme: newTheme } 
    }));
  });
  
  // Listen for system theme changes (optional)
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', function(e) {
      // Only apply system theme if user hasn't set a preference
      if (!localStorage.getItem('luisa-theme')) {
        if (e.matches) {
          html.setAttribute('data-theme', 'dark');
        } else {
          html.removeAttribute('data-theme');
        }
      }
    });
  }
});
