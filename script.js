
const CONTENT = {
 
  ui: {
    about:      { en: "About" },
    experience: { en: "Experience" },
    projects: { en: "Projects" },
    certs:    { en: "Certificates" },
    contact:  { en: "Contact" },
    skills:  { en: "Skills" },
    tools: { en: "Tools" },
    languages: { en: "Languages" }
  },

  about: {
    text: {
      en: "This is Maysa AlGhamdi, a cybersecurity analyst with a Bachelor's degree in Computer Science, building software and offensive security tools on the side.
"
    },
    Skills: ["Software Development", "Software Testing", "Reverse Engineering", "CI/DC", "Secure Coding" ],
    Tools: ["AWS", "Swagger", "Terraform", "Git"],
    Languages: ["Python", "C++", "JavaScript"]

  },

  experience: [
    {
      period: { en: "01/2025 — Present" },
      role:   { en: "Cybersecurity Analyst" },
      desc:   { en: "Monitoring, detecting and responding to security threats; improving defensive tooling and processes." }
    },
    {
      period: { en: "08/2024 — 02/2025" },
      role:   { en: "Backend Developer Volunteer" },
      desc:   { en: "Developed the API routes for a Flutter application using Spring Boot." }
    },
    {
      period: { en: "06/2024 — 10/2024" },
      role:   { en: "ICT Infrastrcture Analyst Intern" },
      desc:   { en: "Supported network team operations and documentation." }
    }
  ],

  projects: [
    {
      tag:   { en: "Cloud Application"},
      title: { en: "Cloud Based Reverses Enginnering Sandbox" },
      desc:  { en: "Devloped and provisioned Windows 10 analysis workstation hosted in AWS, accessible through Terraform managed infrastructure and AWS IAM, configured with appropriate security policies, controls, and tools to perform both static and dynamic malware analysis." },
      stack: ["AWS", "Terraform", "FlameVM", "Malware Analysis", "Server provisioning"],
      url:   "#"
    },
    {
      tag:   { en: "Shell"},
      title: { en: "Emulated Honeypot Shell" },
      desc:  { en: "Built an SSH honeypot in Python that mimics a Linux server, logs all login attempts, and records attacker commands after a successful login to study intrusion behavior." },
      stack: ["Python", "Shell", "Network Sockets"],
      url:   "#"
    },
    {
      tag:   { en: "Computer Vision"},
      title: { en: "Ensemble deep learning model to detect and classify diabetic retinopathy" },
      desc:  { en: "Developed an ensemble deep learning model for diabetic retinopathy detection and classification, leveraging a voting classifier to combine predictions from multiple neural networks, improving overall classification performance and increasing accuracy from 71% with a single model to 90% using the ensemble approach." },
      stack: ["Python", "SQL", "TensorFlow", "Keras"],
      url:   "#"
    },
    {
      tag:   { en: "Malware Script"},
      title: { en: "Command and Control" },
      desc:  { en: "Built a lightweight Command-and-Control framework with a central server that manages multiple agents, issues tasks, and retrieves results over an encrypted channel, developed in a controlled lab with a focus on achieving reliable persistence." },
      stack: ["Python", "C++"],
      url:   "#"
    },
    {
      tag:   { en: "Malware Script"},
      title: { en: "Embedded Keylogger" },
      desc:  { en: "Built a keylogger capturing user keystrokes, and test its ability to bypass secuirty controls" },
      stack: ["Python"],
      url:   "#"
    }
  ],

  certs: [
    { year: "2026", org: "INE", url: "https://certs.ine.com/a0c01168-452a-48b9-8c41-535b0afba8cf#acc.nKvteguW",
      title: { en: "Security Operations"} },
    { year: "2026", org: "British Council", url: "#",
      title: { en: "EILTS 6.5" } },
    { year: "2025", org: "INE", url: "https://certs.ine.com/74a41839-de53-4f47-be79-5b828dc607e4#acc.7fYOclN0",
      title: { en: "Enterprise Defense Administrator"} },
    { year: "2024", org: "COMPTIA", url: "https://cp.certmetrics.com/CompTIA/en/public/verify/credential/3W1R3ZQSSBB1Q936",
      title: { en: "Security+" } }
  ],

  contact: {
    email: "maysa.s.alghamdi@gmail.com",
    socials: [
      { label: "GitHub",      url: "https://github.com/cherrycherrymay" },
      { label: "LinkedIn",    url: "https://www.linkedin.com/in/maysa-saeed/" },
    ]
  }
};

const root  = document.documentElement;
const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
};

let lang = "en";
const t = (pair) => (pair && pair[lang] != null ? pair[lang] : "");
const yearNow = () => {
  const y = new Date().getFullYear();
  return y;
};

const LINK_ICON = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>`;

const head = (num, title) => `
  <div class="section__head reveal">
    <span class="section__num">${num}</span>
    <h2 class="section__title">${title}</h2>
  </div>`;

const aboutHTML = (num) => `
  <section id="about" class="section">
    ${head(num, t(CONTENT.ui.about))}
    <div class="about reveal">
      <div class="about__text"><p>${t(CONTENT.about.text)}</p></div>
      <div class="about__skills">
        <h3>${t(CONTENT.ui.skills)}</h3>
        <ul class="chips">${(CONTENT.about.Skills || []).map((s) => `<li>${s}</li>`).join("")}</ul>
        <h3>${t(CONTENT.ui.tools)}</h3>
        <ul class="chips">${(CONTENT.about.Tools || []).map((s) => `<li>${s}</li>`).join("")}</ul>
        <h3>${t(CONTENT.ui.languages)}</h3>
        <ul class="chips">${(CONTENT.about.Languages || []).map((s) => `<li>${s}</li>`).join("")}</ul>
      </div>
    </div>
  </section>`;

const projectsHTML = (num) => `
  <section id="projects" class="section">
    ${head(num, t(CONTENT.ui.projects))}
    <div class="grid">
      ${CONTENT.projects.map((p) => `
        <article class="card reveal">
          <div class="card__top">
            <span class="card__tag">${t(p.tag)}</span>
          </div>
          <h3 class="card__title">${t(p.title)}</h3>
          <p class="card__desc">${t(p.desc)}</p>
          <ul class="card__stack">${p.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
        </article>`).join("")}
    </div>
  </section>`;

const certsHTML = (num) => `
  <section id="certs" class="section">
    ${head(num, t(CONTENT.ui.certs))}
    <div class="timeline">
      ${CONTENT.certs.map((c) => `
        <div class="cert reveal">
          <div class="cert__year">${c.year}</div>
          <div class="cert__body"><h3>${t(c.title)}</h3><p>${c.org}</p></div>
          ${c.url && c.url !== "#"
            ? `<a class="cert__link" href="${c.url}" target="_blank" rel="noopener noreferrer" aria-label="View credential">${LINK_ICON}</a>`
            : ""}
        </div>`).join("")}
    </div>
  </section>`;

const blogHTML = (num) => `
  <section id="blogs" class="section">
    ${head(num, t(CONTENT.ui.blog))}
    <div class="posts">
      ${CONTENT.blog.map((b) => `
        <a href="${b.url}" class="post reveal">
          <span class="post__date">${t(b.date)}</span>
          <h3 class="post__title">${t(b.title)}</h3>
          <p class="post__excerpt">${t(b.excerpt)}</p>
          <span class="post__more">${t(CONTENT.ui.readMore)}</span>
        </a>`).join("")}
    </div>
  </section>`;

const contactHTML = (num) => `
  <section id="contact" class="section section--contact">
    ${head(num, t(CONTENT.ui.contact))}
    <div class="contact reveal">
      <p class="contact__lead">${t(CONTENT.contact.lead)}</p>
      <a class="contact__email" href="mailto:${CONTENT.contact.email}">${CONTENT.contact.email}</a>
      <div class="contact__socials">
        ${CONTENT.contact.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a>`).join("")}
      </div>
    </div>
  </section>`;

const experienceHTML = (num) => `
  <section id="experience" class="section">
    ${head(num, t(CONTENT.ui.experience))}
    <div class="xp-timeline">
      ${CONTENT.experience.map((x) => `
        <div class="xp reveal">
          <span class="xp__period">${t(x.period)}</span>
          <h3 class="xp__role">${t(x.role)}</h3>
          <p class="xp__org">${t(x.org)}</p>
          <p class="xp__desc">${t(x.desc)}</p>
        </div>`).join("")}
    </div>
  </section>`;

const SECTIONS = [
  { id: "about",      label: CONTENT.ui.about,      html: aboutHTML },
  { id: "experience", label: CONTENT.ui.experience, html: experienceHTML },
  { id: "projects",   label: CONTENT.ui.projects,   html: projectsHTML },
  { id: "certs",      label: CONTENT.ui.certs,      html: certsHTML },
  { id: "blogs",      label: CONTENT.ui.blog,       html: blogHTML },
  { id: "contact",    label: CONTENT.ui.contact,    html: contactHTML }
];

const activeSections = () => SECTIONS.filter((s) => s.label);

const navHTML = () =>
  activeSections().map((s) => `<a href="#${s.id}">${t(s.label)}</a>`).join("");

let revealObs, sectionObs;

function render() {
  root.lang = lang;
  root.dir  = "ltr";

  document.getElementById("nav-links").innerHTML = navHTML();
  document.getElementById("main").innerHTML =
    activeSections().map((s, i) => s.html(String(i + 1).padStart(2, "0"))).join("");
  document.getElementById("footer-text").innerHTML =
    t(CONTENT.ui.footer).replace("{year}", yearNow());

  bindNavLinks();
  watchReveal();
  watchActiveSection();
}

function bindNavLinks() {
  const wrap = document.getElementById("nav-links");
  wrap.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => wrap.classList.remove("open")));
}

function watchReveal() {
  revealObs?.disconnect();
  revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));
}

function watchActiveSection() {
  sectionObs?.disconnect();
  const links = [...document.querySelectorAll(".nav__links a")];
  sectionObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => sectionObs.observe(s));
}

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  store.set("theme", theme);
  if (window.__bg) window.__bg.setTheme(theme);
}

function initControls() {
  document.getElementById("theme-toggle").addEventListener("click", () => {
    applyTheme(root.getAttribute("data-theme") === "day" ? "night" : "day");
  });

  const wrap = document.getElementById("nav-links");
  document.getElementById("menu-toggle").addEventListener("click", () => wrap.classList.toggle("open"));

  const nav = document.getElementById("nav");
  const bar = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  }, { passive: true });
}

function initBackground() {
  if (typeof THREE === "undefined") return;
  const canvas = document.getElementById("bg-canvas");
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000);
  camera.position.z = 60;

  const COUNT = window.innerWidth < 760 ? 1400 : 2600;
  const positions = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 220;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 160;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 160;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  function makeStarTexture() {
    const S = 128;
    const c = document.createElement("canvas");
    c.width = c.height = S;
    const ctx = c.getContext("2d");
    const m = S / 2;
    ctx.translate(m, m);
    ctx.globalCompositeOperation = "lighter";

    const core = ctx.createRadialGradient(0, 0, 0, 0, 0, m * 0.3);
    core.addColorStop(0, "rgba(255,255,255,1)");
    core.addColorStop(0.5, "rgba(255,255,255,0.6)");
    core.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(0, 0, m * 0.3, 0, Math.PI * 2);
    ctx.fill();

    function spike() {
      const g = ctx.createLinearGradient(0, -m, 0, m);
      g.addColorStop(0.0, "rgba(255,255,255,0)");
      g.addColorStop(0.5, "rgba(255,255,255,0.95)");
      g.addColorStop(1.0, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, -m);
      ctx.lineTo(m * 0.055, 0);
      ctx.lineTo(0, m);
      ctx.lineTo(-m * 0.055, 0);
      ctx.closePath();
      ctx.fill();
    }
    spike();
    ctx.rotate(Math.PI / 2);
    spike();
    return new THREE.CanvasTexture(c);
  }

  const mat = new THREE.PointsMaterial({
    size: 1.7,
    map: makeStarTexture(),
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  function setTheme(theme) {
    mat.color = new THREE.Color(theme === "day" ? 0x7c3aed : 0xb98cff);
    mat.opacity = theme === "day" ? 0.7 : 0.9;
  }
  setTheme(root.getAttribute("data-theme"));

  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  const setTarget = (x, y) => {
    target.x = x / window.innerWidth - 0.5;
    target.y = y / window.innerHeight - 0.5;
  };
  window.addEventListener("mousemove", (e) => setTarget(e.clientX, e.clientY), { passive: true });
  const onTouch = (e) => { if (e.touches?.[0]) setTarget(e.touches[0].clientX, e.touches[0].clientY); };
  window.addEventListener("touchmove", onTouch, { passive: true });
  window.addEventListener("touchstart", onTouch, { passive: true });

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);
  resize();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let time = 0;
  (function animate() {
    requestAnimationFrame(animate);
    time += 0.0008;
    current.x += (target.x - current.x) * 0.04;
    current.y += (target.y - current.y) * 0.04;
    if (!reduceMotion) {
      points.rotation.y = time + current.x * 0.9;
      points.rotation.x = current.y * 0.7;
    }
    renderer.render(scene, camera);
  })();

  window.__bg = { setTheme };
}

applyTheme(store.get("theme") || "day");
render();
initControls();
initBackground();
