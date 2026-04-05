// Lower threshold so elements trigger sooner on mobile narrow viewports
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.01, rootMargin: '0px 0px -20px 0px' });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Fallback: if page is already scrolled or elements in view, make them visible
setTimeout(() => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add('visible');
  });
}, 100);

const sections = ['s0','s1','s2','s3','s4','s5','s6'];
const dots = document.querySelectorAll('.nav-dot');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const idx = sections.indexOf(e.target.id);
      if (idx > -1) dots.forEach((d,i) => d.classList.toggle('active', i === idx));
    }
  });
}, { threshold: 0.35 });
sections.forEach(id => { const el = document.getElementById(id); if (el) sectionObserver.observe(el); });

function scrollToSection(i) {
  const el = document.getElementById(sections[i]);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Topbar: show after scrolling past the hero
const topbar = document.getElementById('topbar');
const hero = document.getElementById('s0');
if (topbar && hero) {
  const topbarObserver = new IntersectionObserver(([e]) => {
    topbar.classList.toggle('visible', !e.isIntersecting);
  }, { threshold: 0 });
  topbarObserver.observe(hero);
}
