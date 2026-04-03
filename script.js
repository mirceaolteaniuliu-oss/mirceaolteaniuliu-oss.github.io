// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// Diagnostic form handler
const diagnosticForm = document.getElementById('diagnosticForm');
if (diagnosticForm) {
  diagnosticForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const responseEl = document.getElementById('formResponse');
    const btn = diagnosticForm.querySelector('button[type="submit"]');

    btn.disabled = true;
    btn.textContent = 'Sending…';

    await new Promise(r => setTimeout(r, 600));

    responseEl.textContent = 'Thanks — I\'ll be in touch within 48 hours to confirm a time.';
    diagnosticForm.reset();
    btn.disabled = false;
    btn.textContent = 'Request My Diagnostic';
  });
}
