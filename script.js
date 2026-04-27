 const projects = [
  { title: "Aura Studio", desc: "Brand identity & web design for a wellness startup.", tag: "Branding", color: "#c8553d", emoji: "Ā" },
  { title: "Foldspace", desc: "Dashboard UI for a SaaS file management tool.", tag: "UI/UX", color: "#4a7c6e", emoji: "F" },
  { title: "Kinétic", desc: "Motion-first landing page for a fitness app launch.", tag: "Motion", color: "#6b5ea8", emoji: "K" },
  { title: "Soleil", desc: "E-commerce redesign for a luxury candle brand.", tag: "Web", color: "#b8942a", emoji: "S" },
  { title: "Moss & Thread", desc: "Editorial identity for an independent magazine.", tag: "Branding", color: "#5e7a4a", emoji: "M" },
  { title: "Vanta OS", desc: "Dark-mode design system for a developer tool.", tag: "Design System", color: "#3a6080", emoji: "V" },
];

const grid = document.getElementById("project-grid");
projects.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.transitionDelay = `${i * 80}ms`;
  card.innerHTML = `
    <div class="card-thumb" style="background:${p.color}18">${p.emoji}</div>
    <div class="card-body">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <span class="card-tag">${p.tag}</span>
    </div>`;
  grid.appendChild(card);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll(".card").forEach(c => observer.observe(c));

const toggle = document.getElementById("theme-toggle");
const saved = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", saved);
toggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});