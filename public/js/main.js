(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;
    const savedTheme = localStorage.getItem("luisa-theme") || "light";
    if (savedTheme === "dark") {
      html.setAttribute("data-theme", "dark");
    }
    themeToggle.addEventListener("click", function() {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      if (newTheme === "dark") {
        html.setAttribute("data-theme", "dark");
      } else {
        html.removeAttribute("data-theme");
      }
      localStorage.setItem("luisa-theme", newTheme);
      window.dispatchEvent(new CustomEvent("themeChanged", {
        detail: { theme: newTheme }
      }));
    });
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", function(e) {
        if (!localStorage.getItem("luisa-theme")) {
          if (e.matches) {
            html.setAttribute("data-theme", "dark");
          } else {
            html.removeAttribute("data-theme");
          }
        }
      });
    }
  });
})();
