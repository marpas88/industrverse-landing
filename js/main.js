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
    footer_cookies: 'Cookies',
    cta_placeholder: 'Twój e-mail służbowy...',
    cta_success:   '✓ Gotowe! Skontaktujemy się wkrótce.',
    cta_error:     'Podaj poprawny adres e-mail',
    cta_sent:      'Wysłano',
    cookie_banner_text: 'Używamy cookies do analizy ruchu i poprawy działania strony.',
    cookie_banner_link: 'Dowiedz się więcej',
    cookie_decline:     'Odrzuć',
    cookie_settings:    'Ustawienia',
    cookie_accept:      'Akceptuj wszystkie',
    cookie_modal_title: 'Ustawienia cookies',
    cookie_modal_intro: 'Wybierz, które cookies akceptujesz. Cookies niezbędne zawsze są aktywne.',
    cookie_modal_link:  'Polityka prywatności',
    cookie_necessary:      'Niezbędne',
    cookie_always_on:      'Zawsze aktywne',
    cookie_necessary_desc: 'Wymagane do działania strony: sesja, bezpieczeństwo, preferencje języka.',
    cookie_analytics:      'Analityczne',
    cookie_analytics_desc: 'Pomagają nam zrozumieć, jak odwiedzasz stronę (Vercel Analytics). Dane są anonimowe.',
    cookie_save:           'Zapisz ustawienia',
    cookie_accept_all_modal: 'Akceptuj wszystkie',
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
    footer_cookies: 'Cookies',
    cta_placeholder: 'Your work email...',
    cta_success:   '✓ Done! We will reach out soon.',
    cta_error:     'Please enter a valid email address',
    cta_sent:      'Sent',
    cookie_banner_text: 'We use cookies to analyse traffic and improve the site.',
    cookie_banner_link: 'Learn more',
    cookie_decline:     'Decline',
    cookie_settings:    'Settings',
    cookie_accept:      'Accept all',
    cookie_modal_title: 'Cookie settings',
    cookie_modal_intro: 'Choose which cookies you accept. Necessary cookies are always active.',
    cookie_modal_link:  'Privacy policy',
    cookie_necessary:      'Necessary',
    cookie_always_on:      'Always on',
    cookie_necessary_desc: 'Required for the site to work: session, security, language preferences.',
    cookie_analytics:      'Analytics',
    cookie_analytics_desc: 'Help us understand how you visit the site (Vercel Analytics). Data is anonymous.',
    cookie_save:           'Save settings',
    cookie_accept_all_modal: 'Accept all',
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


// ── COOKIE CONSENT ────────────────────────────────────────────
(function () {
  const KEY = 'cookie-consent-v2';

  function getConsent() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; }
  }

  function saveConsent(analytics) {
    const c = { necessary: true, analytics: !!analytics, ts: Date.now() };
    localStorage.setItem(KEY, JSON.stringify(c));
    window.__cookieConsent = c;
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: c }));
    return c;
  }

  const banner = document.getElementById('cookie-banner');
  const modal  = document.getElementById('cookie-modal');

  const existing = getConsent();
  if (existing) {
    window.__cookieConsent = existing;
  } else if (banner) {
    setTimeout(() => banner.removeAttribute('hidden'), 800);
  }

  function openModal() {
    if (!modal) return;
    const c = getConsent();
    const aEl = document.getElementById('consent-analytics');
    if (aEl) aEl.checked = c ? c.analytics : false;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal && modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
  function hideBanner() {
    banner && banner.setAttribute('hidden', '');
  }

  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    saveConsent(true); hideBanner();
  });
  document.getElementById('cookie-decline')?.addEventListener('click', () => {
    saveConsent(false); hideBanner();
  });
  document.getElementById('cookie-settings')?.addEventListener('click', openModal);
  document.getElementById('cookie-manage')?.addEventListener('click', (e) => {
    e.preventDefault(); openModal();
  });
  document.getElementById('cookie-modal-close')?.addEventListener('click', closeModal);
  document.querySelector('#cookie-modal .cookie-modal-backdrop')?.addEventListener('click', closeModal);
  document.getElementById('cookie-save')?.addEventListener('click', () => {
    const a = document.getElementById('consent-analytics')?.checked ?? false;
    saveConsent(a); closeModal(); hideBanner();
  });
  document.getElementById('cookie-accept-all')?.addEventListener('click', () => {
    saveConsent(true); closeModal(); hideBanner();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) closeModal();
  });
})();

// ── LEAD CAPTURE ──────────────────────────────────────────────
async function sendLead(email) {
  await fetch('https://backend-industrverse-production.up.railway.app/bookings/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, source: 'landing-page' }),
  });
}
