// Dark/Light mode toggle
const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  toggleBtn.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
});
