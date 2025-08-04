document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  // Set initial icon
  toggleBtn.textContent = document.documentElement.classList.contains("dark")
    ? "☀️"
    : "🌙";

  toggleBtn.addEventListener("click", () => {
    const html = document.documentElement;
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    }
  });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// ✅ Scroll-based Active Link Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-blue-600', 'font-bold');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-blue-600', 'font-bold');
    }
  });
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


function updateDateTime() {
  const now = new Date();
  const options = { 
    weekday: 'short', year: 'numeric', month: 'short', 
    day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' 
  };
  const formattedDate = now.toLocaleDateString('en-US', options);
  document.getElementById("datetime").textContent = `${formattedDate}`;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();