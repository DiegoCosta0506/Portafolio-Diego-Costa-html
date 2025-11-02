const y1 = document.getElementById("year");
if (y1) y1.textContent = new Date().getFullYear();

const y2 = document.getElementById("year-footer");
if (y2) y2.textContent = new Date().getFullYear();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) link.classList.add("active");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 20, behavior: "smooth" });
    }
  });
});
