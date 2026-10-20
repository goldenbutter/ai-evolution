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

// EmailJS contact form
emailjs.init({ publicKey: 'iJhn-jReBd1OmXEzU' });

// Form strings come from js/i18n.js (loaded after this file, so look them up at submit time)
function formText(key, fallback) {
  var lang = 'en';
  try { lang = localStorage.getItem('lang') || 'en'; } catch (e) { /* storage blocked: keep English */ }
  if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key] !== undefined) {
    return translations[lang][key];
  }
  return fallback;
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = formText('form.sending', 'Sending...');

    var timeout = new Promise(function (_, reject) {
      setTimeout(function () { reject(new Error('timeout')); }, 15000);
    });

    Promise.race([
      emailjs.sendForm('service_oqselp9', 'template_2mq3f6v', contactForm),
      timeout
    ])
      .then(function () {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = formText('form.submit', 'Send Signal');
        var toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(function () { toast.classList.remove('show'); }, 4000);
      })
      .catch(function (err) {
        console.error('EmailJS error:', err);
        submitBtn.disabled = false;
        submitBtn.textContent = formText('form.submit', 'Send Signal');
        alert(formText('form.error', 'Something went wrong. Please try again.'));
      });
  });
}
