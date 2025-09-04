// Kalau nanti mau tambahkan animasi extra dengan JavaScript
console.log("Hero section loaded!");

// Smooth scroll ketika klik menu navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll animation untuk About Us
const fadeElements = document.querySelectorAll('.fade');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.8;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkFade);
checkFade();

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll('.fade');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  fadeElements.forEach(el => observer.observe(el));
});

// =============================
// Form Kirim Pesan ke WhatsApp
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("waForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let message = document.getElementById("message").value.trim();

      if (!name || !message) {
        alert("Harap isi nama dan pesan terlebih dahulu!");
        return;
      }

      // 👉 ganti dengan nomor WhatsApp kamu
      let phoneNumber = "6287861112915";

      let text = `Halo, saya ${name}. ${message}`;
      let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");
    });
  }
});
