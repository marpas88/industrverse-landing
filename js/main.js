/* ============================================================
   INDUSTRVERSE LANDING — main.js
   ============================================================ */

// ── i18n ──────────────────────────────────────────────────────
const TRANSLATIONS = {
  pl: {
    // Nav
    nav_contact:   'Kontakt',
    nav_login:     'Zaloguj się',
    nav_register:  'Zarejestruj',
    // Footer
    footer_privacy:       'Polityka prywatności',
    footer_cookie_policy: 'Polityka cookies',
    footer_terms:         'Regulamin',
    footer_contact:       'Kontakt',
    footer_cookies:       'Zarządzaj cookies',
    footer_copy:          '© 2026 Industrverse · Coact Sp. z o.o.',
    // CTA form
    cta_placeholder: 'Twój e-mail służbowy...',
    cta_success:   '✓ Gotowe! Skontaktujemy się wkrótce.',
    cta_error:     'Podaj poprawny adres e-mail',
    cta_sent:      'Wysłano',
    // Cookies
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
    // Hero
    hero_eyebrow:      'Platforma kompetencji VR & AI',
    hero_h1_1:         'Rozwijaj się.',
    hero_h1_2:         'Zarządzaj talentami.',
    hero_h1_3:         'W wirtualnym świecie.',
    hero_sub:          'Platforma łącząca uczniów, pracowników i pracodawców przez szkolenia VR z mierzalnymi certyfikatami kompetencji — dla spawaczy, chirurgów, kurierów i każdego, kto uczy się przez działanie.',
    hero_cta_primary:  'Zacznij za darmo',
    hero_cta_secondary:'Jak to działa',
    hero_trust_html:   'Firmy z <strong>4 branż</strong> — od odlewni po kliniki',
    // Hero tabs
    tab_student:  'Student',
    tab_hr:       'HR',
    tab_edu:      'Szkoła',
    tab_med:      'Klinika',
    tab_industry: 'Zakład',
    // Panel: Student
    ps_student_label:   'Konto indywidualne',
    ps_student_h3_html: 'Buduj <span class="g">portfolio kompetencji</span>',
    ps_student_p:       'Ćwicz procedury w VR, zbieraj certyfikaty i pokaż pracodawcom co naprawdę potrafisz — nie tylko co wpisałeś w CV.',
    ps_student_feat1:   'Szkolenia VR w wirtualnym środowisku pracy',
    ps_student_feat2:   'Weryfikowalne certyfikaty widoczne dla pracodawców',
    ps_student_feat3:   'Ścieżka kariery z rekomendacjami następnych kroków',
    ps_student_feat4:   'Dopasowanie do ofert pracy według kompetencji',
    ps_student_btn1:    'Załóż konto bezpłatnie',
    ps_student_btn2:    'Jak działa',
    // Panel: HR
    ps_hr_label:   'Konto indywidualne — HR',
    ps_hr_h3_html: 'Zarządzaj <span class="g">talentami i ROI</span>',
    ps_hr_p:       'Mierz kompetencje każdego pracownika danymi — nie intuicją. Śledź postępy i pokazuj zarządowi konkretny zwrot z inwestycji.',
    ps_hr_feat1:   'Dashboard talentów z mapą kompetencji całego zespołu',
    ps_hr_feat2:   'Raport ROI — koszty szkoleń vs. efekty operacyjne',
    ps_hr_feat3:   'Automatyczna identyfikacja luk kompetencyjnych',
    ps_hr_btn1:    'Wypróbuj demo',
    ps_hr_btn2:    'Możliwości',
    // Panel: Szkoła
    ps_edu_label:   'Konto organizacji — edukacja',
    ps_edu_h3_html: 'Wirtualne laboratoria dla <span class="g">każdego kierunku</span>',
    ps_edu_p:       'Daj uczniom dostęp do sprzętu, którego szkoła fizycznie nie posiada. Mierz efekty kształcenia obiektywnie.',
    ps_edu_feat1:   'Wirtualne laboratoria techniczne, medyczne i zawodowe',
    ps_edu_feat2:   'Obiektywne ocenianie na podstawie danych z sesji VR',
    ps_edu_feat3:   'Profile uczniów widoczne dla firm-partnerów',
    ps_edu_btn1:    'Umów demo',
    ps_edu_btn2:    'Plany dla szkół',
    // Panel: Medycyna
    ps_med_label:   'Konto organizacji — medycyna',
    ps_med_h3_html: 'Szkolenia proceduralne <span class="g">bez ryzyka dla pacjenta</span>',
    ps_med_p:       'Rezydenci i asystenci ćwiczą zabiegi dziesiątki razy zanim dotkną prawdziwego narzędzia. Pełna dokumentacja każdej sesji.',
    ps_med_feat1:   'Zabiegi w VR — stomatologia, chirurgia, diagnostyka',
    ps_med_feat2:   'Dokumentacja zgodna z wymogami akredytacji',
    ps_med_feat3:   'Bezpieczeństwo danych — RODO / HL7',
    ps_med_btn1:    'Umów demo',
    ps_med_btn2:    'Plany dla klinik',
    // Panel: Przemysł
    ps_industry_label:   'Konto organizacji — przemysł',
    ps_industry_h3_html: 'Zarządzaj szkoleniami <span class="g">i kompetencjami załogi</span>',
    ps_industry_p:       'Spawacze, operatorzy, kurierzy — gotowi do pracy 2× szybciej. BHP, onboarding i recertyfikacja w jednej platformie.',
    ps_industry_feat1:   'Symulacje hali, maszyn i tras kurierskich',
    ps_industry_feat2:   'Szkolenia BHP — zero wypadków w symulacji',
    ps_industry_feat3:   'Dashboard gotowości operacyjnej całej załogi',
    ps_industry_btn1:    'Umów demo',
    ps_industry_btn2:    'Plany dla firm',
    // Stats
    stat1_l: 'krótszy onboarding',
    stat2_l: 'lepsza retencja niż e-learning',
    stat3_l: 'więcej leadów (GIFA 2019)',
    stat4_l: 'koszt błędu w symulacji',
    // Logos
    logos_label: 'Zaufali nam',
    // How it works
    how_tag:      'Jak działa',
    how_h2_html:  'Od procedury do <span class="g">mierzalnej kompetencji</span>',
    how_sub:      'Trzy kroki — niezależnie czy jesteś studentem, szpitalem czy zakładem produkcyjnym.',
    step1_h3:     'Wchodzisz do platformy',
    step1_p_html: 'Zakładasz konto indywidualne lub organizacyjne. Wybierasz szkolenia z biblioteki lub <strong>zlecasz digitalizację własnych procedur</strong> — wdrożenie w 2–4 tygodnie.',
    step2_h3:     'Ćwiczysz w VR',
    step2_p_html: 'Wchodzisz do <strong>wirtualnej repliki miejsca pracy</strong> — gabinetu, magazynu, hali produkcyjnej. Każda decyzja rejestrowana i oceniana przez algorytm.',
    step3_h3:     'Certyfikat i dane',
    step3_p_html: 'Dostajesz <strong>weryfikowalny certyfikat kompetencji</strong>. Menedżer i HR widzą dane z każdej sesji. Portfolio rośnie z każdym ukończonym modułem.',
    // Account types
    acc_tag:           'Typy kont',
    acc_h2_html:       'Jedno środowisko, <span class="g">wiele ról</span>',
    acc_sub:           'Konta indywidualne to serce platformy — organizacje budują na ich bazie.',
    acc_ind_title:     'Konto indywidualne',
    acc_ind_sub:       'Fundament całej platformy — dla każdego użytkownika',
    acc_featured_pill: 'Kluczowe',
    persona_student_title:  'Uczeń / Student',
    persona_student_badge:  'Bezpłatne',
    persona_student_desc:   'Szkoła zawodowa, technikum lub uczelnia. Budujesz kompetencje, portfolio i certyfikaty widoczne dla pracodawców.',
    persona_student_chip1:  'Portfolio VR',
    persona_student_chip2:  'Certyfikaty',
    persona_student_chip3:  'Ścieżka kariery',
    persona_worker_title:   'Pracownik / Specjalista',
    persona_worker_desc:    'Rozwijasz się zawodowo niezależnie od pracodawcy. Uzupełniasz kwalifikacje i budujesz profil kompetencyjny na rynek pracy.',
    persona_worker_chip1:   'Szkolenia on-demand',
    persona_worker_chip2:   'Recertyfikacja',
    persona_worker_chip3:   'Profil publiczny',
    persona_hr_title:       'Menedżer HR / L&D',
    persona_hr_desc:        'Zarządzasz talentami i ROI szkoleń. Masz wgląd w kompetencje zespołu i optymalizujesz budżet szkoleniowy danymi.',
    persona_hr_chip1:       'Dashboard talentów',
    persona_hr_chip2:       'Mapa kompetencji',
    persona_hr_chip3:       'Raport ROI',
    org_edu_title:          'Jednostka edukacyjna',
    org_edu_sub:            'Szkoły zawodowe, technika, uczelnie',
    org_edu_vl_title:       'Wirtualne laboratoria',
    org_edu_vl_desc:        'Sprzęt, którego szkoła fizycznie nie posiada — dostępny dla każdego ucznia w VR.',
    org_edu_chip1:          'Klasy VR',
    org_edu_chip2:          'Ocenianie',
    org_edu_chip3:          'Raporty',
    org_train_title:        'Jednostka szkoleniowa',
    org_train_sub:          'Ośrodki szkoleniowe, firmy certyfikujące',
    org_train_cert_title:   'Certyfikacja & autoryzacja',
    org_train_cert_desc:    'Twórz i sprzedawaj własne ścieżki certyfikacyjne oparte na symulacjach VR.',
    org_train_chip1:        'White-label',
    org_train_chip2:        'API certyfikatów',
    org_med_title:          'Jednostka medyczna',
    org_med_sub:            'Szpitale, przychodnie, ochrona zdrowia',
    org_med_proc_title:     'Szkolenia proceduralne',
    org_med_proc_desc:      'Rezydenci ćwiczą zabiegi w VR — zero ryzyka dla pacjenta, pełna dokumentacja sesji.',
    org_med_chip2:          'Akredytacja',
    org_industry_title:     'Firma / Zakład przemysłowy',
    org_industry_sub:       'Produkcja, logistyka, budownictwo, kurierzy',
    org_industry_onb_title: 'Onboarding & kompetencje',
    org_industry_onb_desc:  'Spawacze, operatorzy, kurierzy — gotowi 2× szybciej. BHP i recertyfikacja w jednym miejscu.',
    org_industry_chip1:     'Symulacje',
    org_industry_chip3:     'Dashboard',
    // Results
    results_tag:      'Udowodnione wyniki',
    results_h2_html:  'Liczby, nie <span class="g">obietnice</span>',
    results_sub:      'Dane z wdrożeń i niezależnych badań rynkowych.',
    metric1_label:    'Więcej leadów B2B',
    metric1_desc:     'Krakodlew S.A. na GIFA 2019 — wirtualna odlewnia, klienci z 3 kontynentów.',
    metric2_label:    'Krótszy onboarding',
    metric2_desc:     'Gotowość operacyjna w 3 tygodnie zamiast 6.',
    metric3_label:    'Lepsza retencja wiedzy',
    metric3_desc:     'Vs. prezentacje i wideo (PwC VR Learning 2023).',
    metric4_label:    'Koszt błędu w szkoleniu',
    metric4_desc:     'Każdy błąd to lekcja — bez konsekwencji dla firmy czy pacjenta.',
    testimonial_text: 'Dzięki Industrverse pokazaliśmy naszą odlewnię setkom potencjalnych klientów bez konieczności ich wizyty w Krakowie. To zupełnie nowy sposób budowania zaufania do marki przemysłowej.',
    testimonial_src:  'Dyrektor Handlowy · Krakodlew S.A. · GIFA 2019',
    // Comparison
    cmp_tag:        'Porównanie',
    cmp_h2_html:    'VR vs. <span class="g">tradycyjne metody</span>',
    cmp_sub:        'Co dostajesz zamiast slajdów PowerPoint i szkolenia „patrz i ucz się".',
    cmp_col_feat:   'Cecha',
    cmp_col_trad:   'Tradycyjne szkolenie',
    cmp_col_vr:     'Industrverse VR',
    cmp_r1_feat:    'Koszt błędu uczącego się',
    cmp_r1_no:      'Wysoki — przestój, awaria, ryzyko',
    cmp_r1_yes:     'Zero — wszystko w symulacji',
    cmp_r2_feat:    'Powtarzalność',
    cmp_r2_no:      'Zależy od instruktora',
    cmp_r2_yes:     'Identyczna sesja, bez ograniczeń',
    cmp_r3_feat:    'Mierzalność kompetencji',
    cmp_r3_no:      'Subiektywna ocena',
    cmp_r3_yes:     'Dane: precyzja, czas, błędy',
    cmp_r4_feat:    'Skalowalność',
    cmp_r4_no:      'Jeden instruktor = kilka osób',
    cmp_r4_yes:     'Cały dział, w dowolnym miejscu',
    cmp_r5_feat:    'Retencja po 30 dniach',
    cmp_r5_no:      'ok. 20–30%',
    cmp_r5_yes:     'ok. 75% (PwC VR Learning)',
    cmp_r6_feat:    'Certyfikat weryfikowalny',
    cmp_r6_no:      'PDF bez danych z sesji',
    cmp_r6_yes:     'Certyfikat z pełną historią sesji',
    // CTA section
    cta_tag:       'Zacznij teraz',
    cta_h2_html:   'Pierwsze konto<br>całkowicie za darmo',
    cta_p:         'Konto indywidualne jest bezpłatne. Dla organizacji — proof-of-concept w 7 dni, bez umów i bez hardware\'u od Ciebie.',
    cta_btn:       'Zacznij',
    cta_fine_html: 'Brak spamu. Odpowiadamy w&nbsp;24&nbsp;h. <a href="/polityka-prywatnosci">Polityka prywatności</a>.',
    cta_perk1:     'Konto indywidualne gratis',
    cta_perk2:     'Demo dla organizacji',
    cta_perk3:     'Bez umowy',
    cta_perk4:     'PoC w 7 dni',
  },
  en: {
    // Nav
    nav_contact:   'Contact',
    nav_login:     'Log in',
    nav_register:  'Sign up',
    // Footer
    footer_privacy:       'Privacy Policy',
    footer_cookie_policy: 'Cookie Policy',
    footer_terms:         'Terms of Service',
    footer_contact:       'Contact',
    footer_cookies:       'Manage cookies',
    footer_copy:          '© 2026 Industrverse · Coact Sp. z o.o.',
    // CTA form
    cta_placeholder: 'Your work email...',
    cta_success:   '✓ Done! We will reach out soon.',
    cta_error:     'Please enter a valid email address',
    cta_sent:      'Sent',
    // Cookies
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
    // Hero
    hero_eyebrow:      'VR & AI Competency Platform',
    hero_h1_1:         'Grow.',
    hero_h1_2:         'Manage talent.',
    hero_h1_3:         'In the virtual world.',
    hero_sub:          'A platform connecting students, workers and employers through VR training with measurable competency certificates — for welders, surgeons, couriers and anyone who learns by doing.',
    hero_cta_primary:  'Start for free',
    hero_cta_secondary:'How it works',
    hero_trust_html:   'Companies from <strong>4 industries</strong> — from foundries to clinics',
    // Hero tabs
    tab_student:  'Student',
    tab_hr:       'HR',
    tab_edu:      'School',
    tab_med:      'Clinic',
    tab_industry: 'Plant',
    // Panel: Student
    ps_student_label:   'Individual account',
    ps_student_h3_html: 'Build your <span class="g">competency portfolio</span>',
    ps_student_p:       'Practice procedures in VR, collect certificates and show employers what you can really do — not just what you wrote in your CV.',
    ps_student_feat1:   'VR training in virtual work environments',
    ps_student_feat2:   'Verifiable certificates visible to employers',
    ps_student_feat3:   'Career path with next step recommendations',
    ps_student_feat4:   'Job matching based on competencies',
    ps_student_btn1:    'Create free account',
    ps_student_btn2:    'How it works',
    // Panel: HR
    ps_hr_label:   'Individual account — HR',
    ps_hr_h3_html: 'Manage <span class="g">talent and ROI</span>',
    ps_hr_p:       'Measure every employee\'s competencies with data — not intuition. Track progress and show management concrete return on investment.',
    ps_hr_feat1:   'Talent dashboard with competency map of the entire team',
    ps_hr_feat2:   'ROI report — training costs vs. operational results',
    ps_hr_feat3:   'Automatic identification of competency gaps',
    ps_hr_btn1:    'Try demo',
    ps_hr_btn2:    'Features',
    // Panel: School
    ps_edu_label:   'Organisation account — education',
    ps_edu_h3_html: 'Virtual labs for <span class="g">every course</span>',
    ps_edu_p:       'Give students access to equipment the school physically doesn\'t have. Measure learning outcomes objectively.',
    ps_edu_feat1:   'Virtual technical, medical and vocational labs',
    ps_edu_feat2:   'Objective assessment based on VR session data',
    ps_edu_feat3:   'Student profiles visible to partner companies',
    ps_edu_btn1:    'Book a demo',
    ps_edu_btn2:    'Plans for schools',
    // Panel: Medicine
    ps_med_label:   'Organisation account — medicine',
    ps_med_h3_html: 'Procedural training <span class="g">without patient risk</span>',
    ps_med_p:       'Residents and assistants practice procedures dozens of times before touching a real tool. Full documentation of every session.',
    ps_med_feat1:   'VR procedures — dentistry, surgery, diagnostics',
    ps_med_feat2:   'Documentation compliant with accreditation requirements',
    ps_med_feat3:   'Data security — GDPR / HL7',
    ps_med_btn1:    'Book a demo',
    ps_med_btn2:    'Plans for clinics',
    // Panel: Industry
    ps_industry_label:   'Organisation account — industry',
    ps_industry_h3_html: 'Manage training <span class="g">and crew competencies</span>',
    ps_industry_p:       'Welders, operators, couriers — ready to work 2× faster. H&S, onboarding and recertification in one platform.',
    ps_industry_feat1:   'Simulations of halls, machines and courier routes',
    ps_industry_feat2:   'H&S training — zero accidents in simulation',
    ps_industry_feat3:   'Operational readiness dashboard for the whole crew',
    ps_industry_btn1:    'Book a demo',
    ps_industry_btn2:    'Plans for companies',
    // Stats
    stat1_l: 'shorter onboarding',
    stat2_l: 'better retention than e-learning',
    stat3_l: 'more leads (GIFA 2019)',
    stat4_l: 'cost of a mistake in simulation',
    // Logos
    logos_label: 'Trusted by',
    // How it works
    how_tag:      'How it works',
    how_h2_html:  'From procedure to <span class="g">measurable competency</span>',
    how_sub:      'Three steps — whether you\'re a student, hospital or manufacturing plant.',
    step1_h3:     'You join the platform',
    step1_p_html: 'Create an individual or organisation account. Choose training from the library or <strong>commission digitisation of your own procedures</strong> — implementation in 2–4 weeks.',
    step2_h3:     'You train in VR',
    step2_p_html: 'You enter a <strong>virtual replica of the workplace</strong> — office, warehouse, production hall. Every decision recorded and assessed by the algorithm.',
    step3_h3:     'Certificate and data',
    step3_p_html: 'You receive a <strong>verifiable competency certificate</strong>. Manager and HR see data from every session. Portfolio grows with every completed module.',
    // Account types
    acc_tag:           'Account types',
    acc_h2_html:       'One environment, <span class="g">many roles</span>',
    acc_sub:           'Individual accounts are the heart of the platform — organisations build on top of them.',
    acc_ind_title:     'Individual account',
    acc_ind_sub:       'The foundation of the entire platform — for every user',
    acc_featured_pill: 'Key',
    persona_student_title:  'Pupil / Student',
    persona_student_badge:  'Free',
    persona_student_desc:   'Vocational school, technical college or university. Build competencies, a portfolio and certificates visible to employers.',
    persona_student_chip1:  'VR Portfolio',
    persona_student_chip2:  'Certificates',
    persona_student_chip3:  'Career path',
    persona_worker_title:   'Employee / Specialist',
    persona_worker_desc:    'Develop professionally regardless of your employer. Supplement qualifications and build a competency profile for the job market.',
    persona_worker_chip1:   'On-demand training',
    persona_worker_chip2:   'Recertification',
    persona_worker_chip3:   'Public profile',
    persona_hr_title:       'HR / L&D Manager',
    persona_hr_desc:        'Manage talent and training ROI. Have visibility into team competencies and optimise the training budget with data.',
    persona_hr_chip1:       'Talent dashboard',
    persona_hr_chip2:       'Competency map',
    persona_hr_chip3:       'ROI report',
    org_edu_title:          'Educational institution',
    org_edu_sub:            'Vocational schools, technical colleges, universities',
    org_edu_vl_title:       'Virtual labs',
    org_edu_vl_desc:        'Equipment the school physically doesn\'t have — available for every student in VR.',
    org_edu_chip1:          'VR classes',
    org_edu_chip2:          'Assessment',
    org_edu_chip3:          'Reports',
    org_train_title:        'Training institution',
    org_train_sub:          'Training centres, certification bodies',
    org_train_cert_title:   'Certification & authorisation',
    org_train_cert_desc:    'Create and sell your own certification paths based on VR simulations.',
    org_train_chip1:        'White-label',
    org_train_chip2:        'Certificate API',
    org_med_title:          'Medical institution',
    org_med_sub:            'Hospitals, clinics, healthcare',
    org_med_proc_title:     'Procedural training',
    org_med_proc_desc:      'Residents practice procedures in VR — zero patient risk, full session documentation.',
    org_med_chip2:          'Accreditation',
    org_industry_title:     'Company / Industrial plant',
    org_industry_sub:       'Manufacturing, logistics, construction, couriers',
    org_industry_onb_title: 'Onboarding & competencies',
    org_industry_onb_desc:  'Welders, operators, couriers — ready 2× faster. H&S and recertification in one place.',
    org_industry_chip1:     'Simulations',
    org_industry_chip3:     'Dashboard',
    // Results
    results_tag:      'Proven results',
    results_h2_html:  'Numbers, not <span class="g">promises</span>',
    results_sub:      'Data from deployments and independent market research.',
    metric1_label:    'More B2B leads',
    metric1_desc:     'Krakodlew S.A. at GIFA 2019 — virtual foundry, clients from 3 continents.',
    metric2_label:    'Shorter onboarding',
    metric2_desc:     'Operational readiness in 3 weeks instead of 6.',
    metric3_label:    'Better knowledge retention',
    metric3_desc:     'Vs. presentations and video (PwC VR Learning 2023).',
    metric4_label:    'Cost of a training mistake',
    metric4_desc:     'Every mistake is a lesson — no consequences for the company or patient.',
    testimonial_text: 'Thanks to Industrverse, we showed our foundry to hundreds of potential clients without requiring them to visit Kraków. It\'s a completely new way to build trust in an industrial brand.',
    testimonial_src:  'Sales Director · Krakodlew S.A. · GIFA 2019',
    // Comparison
    cmp_tag:        'Comparison',
    cmp_h2_html:    'VR vs. <span class="g">traditional methods</span>',
    cmp_sub:        'What you get instead of PowerPoint slides and "watch and learn" training.',
    cmp_col_feat:   'Feature',
    cmp_col_trad:   'Traditional training',
    cmp_col_vr:     'Industrverse VR',
    cmp_r1_feat:    'Cost of learner\'s mistake',
    cmp_r1_no:      'High — downtime, failure, risk',
    cmp_r1_yes:     'Zero — everything in simulation',
    cmp_r2_feat:    'Repeatability',
    cmp_r2_no:      'Depends on the instructor',
    cmp_r2_yes:     'Identical session, unlimited',
    cmp_r3_feat:    'Competency measurability',
    cmp_r3_no:      'Subjective assessment',
    cmp_r3_yes:     'Data: precision, time, errors',
    cmp_r4_feat:    'Scalability',
    cmp_r4_no:      'One instructor = a few people',
    cmp_r4_yes:     'Entire department, anywhere',
    cmp_r5_feat:    'Retention after 30 days',
    cmp_r5_no:      'approx. 20–30%',
    cmp_r5_yes:     'approx. 75% (PwC VR Learning)',
    cmp_r6_feat:    'Verifiable certificate',
    cmp_r6_no:      'PDF without session data',
    cmp_r6_yes:     'Certificate with full session history',
    // CTA section
    cta_tag:       'Start now',
    cta_h2_html:   'First account<br>completely free',
    cta_p:         'Individual account is free. For organisations — proof-of-concept in 7 days, no contracts and no hardware from you.',
    cta_btn:       'Start',
    cta_fine_html: 'No spam. We reply within 24h. <a href="/polityka-prywatnosci">Privacy policy</a>.',
    cta_perk1:     'Individual account free',
    cta_perk2:     'Demo for organisations',
    cta_perk3:     'No contract',
    cta_perk4:     'PoC in 7 days',
  },
};

let currentLang = localStorage.getItem('iv_lang') || null;

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('iv_lang', lang);
  document.documentElement.lang = lang;

  const t = TRANSLATIONS[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const ctaInput = document.getElementById('cta-email');
  if (ctaInput && !ctaInput.disabled) ctaInput.placeholder = t.cta_placeholder;
}


document.addEventListener('DOMContentLoaded', () => {

  // ── LANGUAGE TOGGLE ───────────────────────────────────────
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

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
