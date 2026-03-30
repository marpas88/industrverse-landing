/* ============================================================
   INDUSTRVERSE LANDING — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── PERSONA TABS ──────────────────────────────────────────
  const tabs   = document.querySelectorAll('.ps-tab');
  const panels = document.querySelectorAll('.ps-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.panel;

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.getElementById('panel-' + target);
      if (panel) panel.classList.add('active');
    });
  });


  // ── SCROLL REVEAL ─────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.07,
    rootMargin: '0px 0px -28px 0px',
  });

  revealEls.forEach(el => revealObserver.observe(el));


  // ── CTA FORM ──────────────────────────────────────────────
  const ctaBtn   = document.getElementById('cta-submit');
  const ctaInput = document.getElementById('cta-email');

  if (ctaBtn && ctaInput) {
    ctaBtn.addEventListener('click', async () => {
      const email = ctaInput.value.trim();

      if (email && email.includes('@') && email.includes('.')) {
        // Optimistically show success — then send in background
        ctaInput.value = '';
        ctaInput.placeholder = '✓ Gotowe! Skontaktujemy się wkrótce.';
        ctaBtn.innerHTML = '<span class="material-icons">check</span>Wysłano';
        ctaBtn.style.background = '#388e3c';
        ctaBtn.disabled = true;

        try { await sendLead(email); } catch (_) { /* silent */ }
      } else {
        // Error state
        ctaInput.placeholder = 'Podaj poprawny adres e-mail';
        ctaInput.style.outline = '2px solid #ef5350';
        ctaInput.focus();
        setTimeout(() => {
          ctaInput.style.outline = '';
          ctaInput.placeholder = 'Twój e-mail służbowy...';
        }, 1800);
      }
    });

    // Also submit on Enter
    ctaInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') ctaBtn.click();
    });
  }


  // ── SMOOTH NAV LINKS ──────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = 72; // nav height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});


// ── LEAD CAPTURE ──────────────────────────────────────────────
async function sendLead(email) {
  await fetch('https://backend-industrverse-production.up.railway.app/bookings/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, source: 'landing-page', type: 'lead' }),
  });
}
