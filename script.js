// Tombol Back to Top
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.classList.add("back-to-top"); // pakai class, bukan inline style
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 300);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ScrollSpy Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".div-2 ul a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Reveal on Scroll
const reveals = document.querySelectorAll(".headline, .card, .news-card, .videocard, .bottom-card, .photo-card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add("reveal-show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

reveals.forEach(el => {
  el.classList.add("reveal-hidden");
});

// Search Suggestion
const searchInput = document.querySelector(".header-input input");
const suggestionBox = document.createElement("div");
suggestionBox.classList.add("suggestion-box");
document.querySelector(".header-input").appendChild(suggestionBox);

const dummySuggestions = ["Berita Hari Ini", "Ekonomi Global", "Sepakbola", "Teknologi AI", "Entertainment"];

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  suggestionBox.innerHTML = "";
  if (value) {
    const filtered = dummySuggestions.filter(item => item.toLowerCase().includes(value));
    filtered.forEach(item => {
      const p = document.createElement("p");
      p.innerText = item;
      p.addEventListener("click", () => {
        searchInput.value = item;
        suggestionBox.style.display = "none";
      });
      suggestionBox.appendChild(p);
    });
    suggestionBox.style.display = "block";
  } else {
    suggestionBox.style.display = "none";
  }
});

// Marquee pause on hover
const marquee = document.querySelector(".marquee");
if (marquee) {
  marquee.addEventListener("mouseover", () => marquee.stop());
  marquee.addEventListener("mouseout", () => marquee.start());
}
