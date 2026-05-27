import "./style.css";
import { peripherals, type Peripheral, type Category } from "./data.ts";

const landingPage = document.querySelector<HTMLElement>("#landing-page")!;
const appContainer = document.querySelector<HTMLElement>("#app")!;
const navBar = document.querySelector<HTMLElement>("#nav-bar")!;
const gridContainer = document.querySelector<HTMLElement>("#grid-container")!;
const enterBtn = document.querySelector<HTMLButtonElement>("#enter-btn")!;

let currentCategory: Category = "Keyboard";
const categories: Category[] = [
  "Keyboard",
  "Mouse",
  "Mousepad",
  "Skates",
  "IEMs",
];

function setupRain() {
  const canvas = document.getElementById("rain-canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);
  const setCanvasSize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };

  const rainCount = 180;
  const rain: any[] = [];
  for (let i = 0; i < rainCount; i++) {
    rain.push({
      x: Math.random() * w,
      y: Math.random() * h,
      l: Math.random() * 1,
      xs: -2 + Math.random() * 1,
      ys: Math.random() * 10 + 10,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < rainCount; i++) {
      const p = rain[i];
      const opacity = p.l * 0.2 + 0.05;
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.lineWidth = p.l * 1.5 + 0.5;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.xs, p.y + p.l * 20 + 10);
      ctx.stroke();
      p.x += p.xs;
      p.y += p.ys + p.l * 10;
      if (p.x > w || p.y > h || p.x < -20) {
        p.x = Math.random() * w;
        p.y = -20;
      }
    }
    requestAnimationFrame(draw);
  }
  window.addEventListener("resize", setCanvasSize);
  draw();
}

function enterSite() {
  landingPage.classList.add("fade-out");
  setTimeout(() => {
    landingPage.style.display = "none";
    appContainer.style.display = "block";
    appContainer.classList.add("fade-in");
    initNav();
    renderGrid();
  }, 300);
}

function getThumb(url: string) {
  const id = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

async function fetchTitles() {
  const videoLinks = document.querySelectorAll<HTMLElement>(
    ".video-window[data-url]",
  );
  videoLinks.forEach(async (link) => {
    const url = link.dataset.url;
    try {
      const response = await fetch(`https://noembed.com/embed?url=${url}`);
      const data = await response.json();
      const titleEl = link.parentElement?.querySelector(".v-title-box");
      if (titleEl && data.title) titleEl.textContent = data.title;
    } catch (e) {
      console.error(e);
    }
  });
}

function showSpecs(name: string) {
  const item = peripherals.find((p) => p.name === name);
  if (!item) return;
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-modal">×</button>
      <h3>${item.brand} ${item.name}</h3>
      <div class="specs-list">
        ${Object.entries(item.specs)
          .map(
            ([key, value]) => `
          <div class="spec-row"><span class="spec-key">${key}</span><span class="spec-value">${value}</span></div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.offsetHeight;
  modal.classList.add("active");
  const close = () => {
    modal.classList.remove("active");
    setTimeout(() => modal.remove(), 300);
  };
  modal.querySelector(".close-modal")?.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
}

function spawnBeam(e: Event) {
  const btn = e.currentTarget as HTMLElement;
  const beam = document.createElement("span");
  beam.className = "hologram-beam";
  btn.appendChild(beam);
  setTimeout(() => beam.remove(), 1200);
}

function renderGrid() {
  const filteredItems = peripherals.filter(
    (p) => p.category === currentCategory,
  );
  gridContainer.innerHTML = filteredItems
    .map(
      (item: Peripheral) => `
    <div class="card tier-${item.tier}">
      <div class="tier-badge">Tier ${item.tier}</div>
      <div class="card-content">
        <h2>${item.brand} ${item.name}</h2>
        <p class="description"><strong>Description:</strong> ${item.description}</p>
        <div class="lists">
          <div class="pros"><strong>Pros</strong><ul>${item.pros.map((p) => `<li>${p}</li>`).join("")}</ul></div>
          <div class="cons"><strong>Cons</strong><ul>${item.cons.map((c) => `<li>${c}</li>`).join("")}</ul></div>
        </div>
        <div class="holographic-container">
          <button class="specs-btn holographic-card" data-name="${item.name}">View Specs</button>
        </div>
        <div class="overview-section">
          <p class="overview-label">Overview:</p>
          ${
            item.videoUrl
              ? `
            <div class="v-title-box">Loading video title...</div>
            <a href="${item.videoUrl}" target="_blank" class="video-window" data-url="${item.videoUrl}">
              <div class="thumbnail" style="background-image: url('${getThumb(item.videoUrl)}')"></div>
            </a>
          `
              : `<div class="video-window empty"><div class="empty-text">No video.</div></div>`
          }
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  document.querySelectorAll<HTMLButtonElement>(".specs-btn").forEach((btn) => {
    btn.addEventListener("click", (e) =>
      showSpecs((e.target as HTMLButtonElement).dataset.name!),
    );
    btn.addEventListener("mouseenter", spawnBeam);
  });
  fetchTitles();
}

function initNav() {
  navBar.innerHTML = categories
    .map(
      (cat) =>
        `<button class="nav-btn ${cat === currentCategory ? "active" : ""}" data-cat="${cat}">${cat}</button>`,
    )
    .join("");
  const buttons = document.querySelectorAll<HTMLButtonElement>(".nav-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentCategory = btn.dataset.cat as Category;
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrid();
    });
  });
}

setupRain();
enterBtn.addEventListener("click", enterSite);
enterBtn.addEventListener("mouseenter", spawnBeam);
