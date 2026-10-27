/**
 * Professional Developer Portfolio — Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initTypingEffect();
  initCodeHighlight();
  initParticles();
  initCursorGlow();
  initScrollReveal();
  initCounterAnimation();
  initSkills();
  initMarquee();
  initProjects();
  initTimeline();
  initContactForm();
  initModal();
  initMisc();
});

/* ---- Theme Toggle ---- */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  });
}

/* ---- Navigation ---- */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(section => observer.observe(section));
}

/* ---- Typing Effect ---- */
function initTypingEffect() {
  const el = document.getElementById('typingText');
  const roles = PORTFOLIO_DATA.typingRoles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = roles[roleIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ---- Code Syntax Highlighting ---- */
function initCodeHighlight() {
  const code = PORTFOLIO_DATA.codeSnippet;
  const el = document.getElementById('codeSnippet');

  const highlighted = code
    .replace(/(\/\/.+)/g, '<span class="comment">$1</span>')
    .replace(/\b(const|let|return|function)\b/g, '<span class="keyword">$1</span>')
    .replace(/"([^"]+)"/g, '<span class="string">"$1"</span>')
    .replace(/\b(createAmazing|build|buildFuture|learn)\b/g, '<span class="function">$1</span>')
    .replace(/\b(name|role|skills|build|college|learn)\b(?=\s*:)/g, '<span class="property">$1</span>');

  el.innerHTML = highlighted;
}

/* ---- Particle Background ---- */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    const count = Math.min(Math.floor(window.innerWidth / 15), 80);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const dotColor = isLight ? '99, 102, 241' : '129, 140, 248';

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${dotColor}, ${p.opacity})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${dotColor}, ${0.08 * (1 - dist / 120)})`;
          ctx.stroke();
        }
      }
    });

    animationId = requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  document.getElementById('themeToggle').addEventListener('click', () => {
    cancelAnimationFrame(animationId);
    draw();
  });
}

/* ---- Cursor Glow ---- */
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');

  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.addEventListener('mousemove', e => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

/* ---- Scroll Reveal ---- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  reveals.forEach(el => observer.observe(el));
}

/* ---- Counter Animation ---- */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');

  if (!counters.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const targetAttr = el.getAttribute('data-target');

        if (targetAttr === null || targetAttr === '') {
          observer.unobserve(el);
          return;
        }

        const target = Number.parseInt(targetAttr, 10);

        if (Number.isNaN(target)) {
          observer.unobserve(el);
          return;
        }

        animateCounter(el, target);

        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, target) {
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/* ---- Skills ---- */
function initSkills() {
  const grid = document.getElementById('skillsGrid');

  grid.innerHTML = PORTFOLIO_DATA.skills.map(skill => `
    <div class="skill-card reveal">
      <div class="skill-header">
        <span class="skill-icon">${skill.icon}</span>
        <span class="skill-name">${skill.name}</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" data-level="${skill.level}"></div>
      </div>
      <div class="skill-level">
        <span>Proficiency</span>
        <span>${skill.level}%</span>
      </div>
    </div>
  `).join('');

  const progressBars = document.querySelectorAll('.skill-progress');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = `${entry.target.dataset.level}%`;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  progressBars.forEach(bar => observer.observe(bar));
}

/* ---- Tech Marquee ---- */
function initMarquee() {
  const track = document.getElementById('marqueeTrack');
  const pills = PORTFOLIO_DATA.techStack.map(tech =>
    `<span class="tech-pill">${tech}</span>`
  ).join('');

  track.innerHTML = pills + pills;
}

/* ---- Projects ---- */
function initProjects() {
  const filtersContainer = document.getElementById('projectFilters');
  const grid = document.getElementById('projectsGrid');
  let activeFilter = 'all';

  filtersContainer.innerHTML = PORTFOLIO_DATA.projectCategories.map(cat => `
    <button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" data-filter="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  function renderProjects(filter) {
    grid.innerHTML = PORTFOLIO_DATA.projects.map(project => `
      <article class="project-card reveal ${filter !== 'all' && project.category !== filter ? 'hidden' : ''}"
               data-category="${project.category}" data-id="${project.id}">
        <div class="project-image" style="background: ${project.image}">
          <div class="project-overlay">
            <a href="${project.liveUrl}" class="project-link" target="_blank" rel="noopener" aria-label="Live demo" onclick="event.stopPropagation()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
            <a href="${project.githubUrl}" class="project-link" target="_blank" rel="noopener" aria-label="GitHub" onclick="event.stopPropagation()">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </article>
    `).join('');

    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => openProjectModal(parseInt(card.dataset.id, 10)));
    });

    initScrollReveal();
  }

  renderProjects(activeFilter);

  filtersContainer.addEventListener('click', e => {
    if (!e.target.classList.contains('filter-btn')) return;

    activeFilter = e.target.dataset.filter;
    filtersContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    document.querySelectorAll('.project-card').forEach(card => {
      const show = activeFilter === 'all' || card.dataset.category === activeFilter;
      card.classList.toggle('hidden', !show);
      if (show) {
        card.style.animation = 'none';
        card.offsetHeight;
        card.style.animation = '';
        card.classList.add('visible');
      }
    });
  });
}

/* ---- Timeline ---- */
function initTimeline() {
  const timeline = document.getElementById('timeline');
   timeline.innerHTML = PORTFOLIO_DATA.experince.map(item => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-period">${item.period}</div>
        <h3 class="timeline-role">${item.role}</h3>
        <p class="timeline-company">${item.company}</p>
        <p class="timeline-desc">${item.description}</p>
        <div class="timeline-tech">
          ${item.technologies.map(tech => `<span>${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ---- Contact Form ---- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    btn.classList.add('loading');
    status.textContent = '';
    status.className = 'form-status';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    await new Promise(resolve => setTimeout(resolve, 1500));

    if (data.name && data.email && data.message) {
      status.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
      status.classList.add('success');
      form.reset();
    } else {
      status.textContent = '✗ Please fill in all required fields.';
      status.classList.add('error');
    }

    btn.classList.remove('loading');
  });
}

/* ---- Project Modal ---- */
function initModal() {
  const overlay = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalClose');

  closeBtn.addEventListener('click', closeProjectModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeProjectModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

function openProjectModal(id) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === id);
  if (!project) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-image" style="background: ${project.image}"></div>
    <h3>${project.title}</h3>
    <p>${project.details}</p>
    <div class="modal-tags">
      ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
    </div>
    <div class="modal-actions">
      <a href="${project.liveUrl}" class="btn btn-primary" target="_blank" rel="noopener">Live Demo</a>
      <a href="${project.githubUrl}" class="btn btn-outline" target="_blank" rel="noopener">View Code</a>
    </div>
  `;

  document.getElementById('projectModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}

/* ---- Misc ---- */
function initMisc() {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  document.getElementById('backToTop').addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
