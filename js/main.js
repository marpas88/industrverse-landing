/* ============================================================
   INDUSTRVERSE LANDING — main.js
   ============================================================ */

// ── i18n ──────────────────────────────────────────────────────
const TRANSLATIONS = {
  pl: {
    nav_accounts:  'Konta',
    nav_how:       'Jak działa',
    nav_results:   'Wyniki',
    nav_contact:   'Kontakt',
    nav_login:     'Zaloguj się',
    nav_register:  'Zarejestruj',
    footer_privacy: 'Polityka prywatności',
    footer_terms:   'Regulamin',
    footer_contact: 'Kontakt',
    cta_placeholder: 'Twój e-mail służbowy...',
    cta_success:   '✓ Gotowe! Skontaktujemy się wkrótce.',
    cta_error:     'Podaj poprawny adres e-mail',
    cta_sent:      'Wysłano',
  },
  en: {
    nav_accounts:  'Accounts',
    nav_how:       'How it works',
    nav_results:   'Results',
    nav_contact:   'Contact',
    nav_login:     'Log in',
    nav_register:  'Sign up',
    footer_privacy: 'Privacy Policy',
    footer_terms:   'Terms of Service',
    footer_contact: 'Contact',
    cta_placeholder: 'Your work email...',
    cta_success:   '✓ Done! We will reach out soon.',
    cta_error:     'Please enter a valid email address',
    cta_sent:      'Sent',
  },
};

let currentLang = localStorage.getItem('iv_lang') || 'pl';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('iv_lang', lang);
  document.documentElement.lang = lang;

  const t = TRANSLATIONS[lang];

  // Translate data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update CTA placeholder
  const ctaInput = document.getElementById('cta-email');
  if (ctaInput && !ctaInput.disabled) ctaInput.placeholder = t.cta_placeholder;
}


document.addEventListener('DOMContentLoaded', () => {

  // ── LANGUAGE TOGGLE ───────────────────────────────────────
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Apply saved lang on load
  applyLang(currentLang);


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
      const t = TRANSLATIONS[currentLang];

      if (email && email.includes('@') && email.includes('.')) {
        ctaInput.value = '';
        ctaInput.placeholder = t.cta_success;
        ctaBtn.innerHTML = `<span class="material-icons">check</span>${t.cta_sent}`;
        ctaBtn.style.background = '#388e3c';
        ctaBtn.disabled = true;

        try { await sendLead(email); } catch (_) { /* silent */ }
      } else {
        ctaInput.placeholder = t.cta_error;
        ctaInput.style.outline = '2px solid #ef5350';
        ctaInput.focus();
        setTimeout(() => {
          ctaInput.style.outline = '';
          ctaInput.placeholder = t.cta_placeholder;
        }, 1800);
      }
    });

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
        const offset = 72;
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
    body: JSON.stringify({ email, source: 'landing-page' }),
  });
}
