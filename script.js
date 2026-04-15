// === MOBILE NAV TOGGLE ===
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// === ACTIVE NAV LINK ===
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// === SCROLL ANIMATIONS ===
const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animateObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.animate').forEach(el => animateObserver.observe(el));

// === DIAGNOSTIC / CONTACT FORM ===
const diagnosticForm = document.getElementById('diagnosticForm');
if (diagnosticForm) {
  diagnosticForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const responseEl = document.getElementById('formResponse');
    const btn = diagnosticForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    await new Promise(r => setTimeout(r, 600));
    responseEl.textContent = 'Thanks — I\'ll be in touch within 48 hours.';
    diagnosticForm.reset();
    btn.disabled = false;
    btn.textContent = btn.getAttribute('data-label') || 'Send Message';
  });
}
