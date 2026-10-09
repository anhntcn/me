// 0. Language Dictionary (Vietnamese is read from the HTML itself)
const I18N_EN = {
    metaTitle: 'Nguyen Tuan Anh | Python Backend & AI Integration',
    metaDesc: 'Nguyen Tuan Anh — Python backend engineer in Hanoi building ERP/HRMS systems since 2019, 3 years as a team lead, now integrating LLMs (OpenAI, Gemini) into real products.',

    navAbout: 'About',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navServices: 'Services',
    navContact: 'Contact',

    heroGreeting: "Hi, I'm",
    heroTitle: 'Building Backend Systems<br>&amp; Bringing AI into Real Products',
    heroSub: 'Python backend engineer with <span class="js-exp-years">7+</span> years of experience — from ERP/HRMS systems and leading a development team to integrating LLMs that automate business operations.',
    heroCta: 'Get in touch',

    aboutTitle: 'About Me',
    aboutImgAlt: 'Portrait of Nguyen Tuan Anh',
    aboutP1: "I'm Tuan Anh, a software engineer based in Hanoi with an IT engineering degree from the University of Transport and Communications. I build backend systems with <strong>Python (FastAPI, Django, Flask)</strong> and <strong>Odoo</strong> for ERP, HRMS and operations management.",
    aboutP2: 'I like to think through edge cases, risks and future extensibility before writing code, so systems stay reliable for the long run. Lately I focus on bringing <strong>AI/LLMs (OpenAI, Gemini)</strong> into production — not just making them work, but keeping cost and reliability under control.',
    statYears: 'Years of experience',
    statLead: 'Years leading a team',
    statLeadsNum: '~1,200',
    statLeads: 'Leads/day scored by AI',

    expTitle: 'Experience',
    exp1Date: '03/2024 — Present',
    exp1Role: 'Developer',
    exp1Body: '<li>Develop ERP/HRMS software with Python, FastAPI, Docker and Odoo.</li><li>Integrated OpenAI and Gemini to automatically assess sales data quality; built an internal assistant bot.</li><li>Built a Chrome extension that syncs customer data into the ERP, plus data-collection tools.</li>',
    exp2Role: 'Development Team Lead',
    exp2Body: '<li>Led a team of ~5 developers building ERP projects with Python, Odoo and Flask.</li><li>Planned and delegated work, tracked progress and reviewed code — with a near-perfect on-time delivery rate.</li><li>Delivered an internal HRMS and a centralized advertising-management platform.</li>',
    exp3Role: 'Developer',
    exp3Body: '<li>Owned the marketing-management module of a CRM / online-learning platform (PHP, Zend Framework) serving ~100 users.</li>',
    exp4Company: 'Pverser Software',
    exp4Body: '<li>Built ~80–100 WordPress websites for clients: news, e-commerce (WooCommerce), tour booking and more.</li><li>Developed and customized themes with PHP, MySQL, jQuery, ACF, Elementor and Flatsome; integrated the Google Maps API.</li>',
    eduRole: 'Engineer in Information Technology',
    eduSchool: 'University of Transport and Communications, Hanoi',
    eduBody: '<li><i class="fas fa-award" aria-hidden="true"></i> 3rd Prize, Student Scientific Research Competition (first year) — "Visualizing sorting algorithms through animation" (C++).</li>',
    locHanoi: 'Hanoi',

    projTitle: 'Featured Projects',
    proj1Metric: '-95% manual effort',
    proj1Title: 'LLM-powered lead scoring',
    proj1Desc: 'Uses OpenAI and Gemini to automatically score ~1,200 leads/day from sales conversations, plus an internal assistant bot for ~40 users. Built with structured output, batch processing and token-cost control.',
    proj2Metric: 'Used by every sales branch',
    proj2Title: 'ERP-connected Chrome Extension',
    proj2Desc: 'An extension that reads customer data from sales chat tools and pushes it straight into the ERP, eliminating manual data entry. It became an essential tool for the sales team.',
    proj3Metric: '~80–100 employees',
    proj3Title: 'Internal HRMS',
    proj3Desc: 'An Odoo-based HR management system built by the team I led, supporting the whole company’s daily operations.',
    proj4Metric: '5–6 websites',
    proj4Title: 'Ad-management platform',
    proj4Desc: 'Designed and piloted a centralized platform to manage advertising across multiple WordPress sites from a single place.',

    skillDomain: 'Domains',
    skillDomainTags: '<span class="tag">ERP / HRMS</span><span class="tag">Ad management</span><span class="tag">Data collection</span><span class="tag">Chrome Extension</span>',

    svcTitle: 'How I Can Help',
    svc1Title: 'Backend & API',
    svc1Desc: 'Designing and building RESTful APIs and backend systems with FastAPI/Django — scalable and easy to maintain.',
    svc2Title: 'ERP / Odoo',
    svc2Desc: 'Developing and customizing Odoo modules and ERP/HRMS systems that fit how your business actually runs.',
    svc3Title: 'AI Integration',
    svc3Desc: 'Bringing LLMs (OpenAI, Gemini) into existing workflows to automate evaluation and data classification, and to build internal assistant bots.',
    svc4Title: 'Automation tools',
    svc4Desc: 'Chrome extensions and data collection/sync tools that take repetitive manual work off your team.',

    contactTitle: "Let's Talk",
    contactDesc: 'Have a project in mind, want to collaborate, or just want to chat about Python and AI? Feel free to reach out.',
    contactLoc: 'Hanoi, Vietnam · Open to remote work',

    supportTitle: 'Support Me',
    supportDesc: 'If my work has been useful to you, a cup of coffee keeps me motivated to keep building and sharing.',
    supportCta: 'Buy me a coffee',
    modalTitle: 'Thank you for your support! ❤️',
    modalSub: 'Scan the QR code below to donate',
};

const UI_TEXT = {
    vi: { switchLabel: 'Switch to English', switchText: 'EN', menuOpen: 'Mở menu', menuClose: 'Đóng menu', copied: 'Đã copy số tài khoản: ' },
    en: { switchLabel: 'Chuyển sang tiếng Việt', switchText: 'VI', menuOpen: 'Open menu', menuClose: 'Close menu', copied: 'Account number copied: ' },
};

const CAREER_START_YEAR = 2019;
let currentLang = 'vi';

// 1. Dynamic Numbers (years of experience, copyright year)
function updateDynamicNumbers() {
    const year = new Date().getFullYear();
    document.querySelectorAll('.js-exp-years').forEach(el => {
        el.textContent = (year - CAREER_START_YEAR) + '+';
    });
    document.querySelectorAll('.js-year').forEach(el => {
        el.textContent = year;
    });
}

// 2. Language Switch
const i18nNodes = document.querySelectorAll('[data-i18n]');
const metaDesc = document.querySelector('meta[name="description"]');
const i18nAltNodes = document.querySelectorAll('[data-i18n-alt]');
const langSwitch = document.querySelector('.lang-switch');

// Snapshot the Vietnamese markup so switching back needs no second dictionary
const I18N_VI = {};
i18nNodes.forEach(el => { I18N_VI[el.dataset.i18n] = el.innerHTML; });
if (metaDesc) I18N_VI[metaDesc.dataset.i18nContent] = metaDesc.content;
i18nAltNodes.forEach(el => { I18N_VI[el.dataset.i18nAlt] = el.alt; });

function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'vi';
    const dict = currentLang === 'en' ? I18N_EN : I18N_VI;

    i18nNodes.forEach(el => {
        const value = dict[el.dataset.i18n];
        if (value !== undefined) el.innerHTML = value;
    });
    if (metaDesc) metaDesc.content = dict[metaDesc.dataset.i18nContent];
    i18nAltNodes.forEach(el => { el.alt = dict[el.dataset.i18nAlt]; });

    document.documentElement.lang = currentLang;
    if (langSwitch) {
        langSwitch.textContent = UI_TEXT[currentLang].switchText;
        langSwitch.setAttribute('aria-label', UI_TEXT[currentLang].switchLabel);
    }
    updateMenuLabel();
    updateDynamicNumbers();

    try { localStorage.setItem('lang', currentLang); } catch (e) { /* storage unavailable */ }
}

function getInitialLanguage() {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl === 'en' || fromUrl === 'vi') return fromUrl;
    try {
        const saved = localStorage.getItem('lang');
        if (saved === 'en' || saved === 'vi') return saved;
    } catch (e) { /* storage unavailable */ }
    return 'vi';
}

if (langSwitch) {
    langSwitch.addEventListener('click', () => {
        applyLanguage(currentLang === 'en' ? 'vi' : 'en');
    });
}

// 3. Typing Effect Logic
const textElement = document.querySelector('.typing-text .typed');
const roles = ["Nguyễn Tuấn Anh", "Python Backend Developer", "AI / LLM Integration", "ERP & Odoo Developer", "Former Team Lead"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    // Check if element exists to avoid errors on pages without it
    if (!textElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        textElement.textContent = "[" + currentRole.substring(0, charIndex - 1) + "]";
        charIndex--;
    } else {
        textElement.textContent = "[" + currentRole.substring(0, charIndex + 1) + "]";
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500); // Pause before new word
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

document.addEventListener('DOMContentLoaded', type);

// 4. Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function updateMenuLabel() {
    if (!menuToggle || !navLinks) return;
    const isOpen = navLinks.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? UI_TEXT[currentLang].menuClose : UI_TEXT[currentLang].menuOpen);
}

function setMenuOpen(isOpen) {
    navLinks.classList.toggle('active', isOpen);
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars', !isOpen);
    icon.classList.toggle('fa-times', isOpen);
    updateMenuLabel();
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        setMenuOpen(!navLinks.classList.contains('active'));
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenuOpen(false));
    });
}

// 5. Donate Modal Logic
const donateBtn = document.getElementById('donate-btn');
const modal = document.getElementById('donate-modal');
const closeModal = document.querySelector('.close-modal');
const copyBox = document.querySelector('.copy-box');

if (donateBtn && modal && closeModal) {
    // Open Modal
    donateBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent jump to # anchor
        modal.style.display = 'flex';
        closeModal.focus();
    });

    // Close Modal when click X
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close Modal when click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close Modal with Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            donateBtn.focus();
        }
    });

    // Copy Bank Account
    if (copyBox) {
        copyBox.addEventListener('click', () => {
            const accNum = document.getElementById('bank-acc').innerText;
            navigator.clipboard.writeText(accNum).then(() => {
                alert(UI_TEXT[currentLang].copied + accNum);
            });
        });
    }
}

// 6. Cursor Glow on Cards (inspired by base.vn)
const glowCards = document.querySelectorAll('.skill-card, .service-item, .project-card, .contact-box, .support-box');
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

glowCards.forEach(card => {
    const glow = document.createElement('span');
    glow.className = 'card-glow';
    glow.setAttribute('aria-hidden', 'true');
    card.prepend(glow);

    let targetX = 0, targetY = 0, x = 0, y = 0;
    let halfW = 0, halfH = 0;
    let rafId = null;

    const render = () => {
        // Lerp toward the pointer so the glow trails smoothly behind it
        const ease = reduceMotion.matches ? 1 : 0.12;
        x += (targetX - x) * ease;
        y += (targetY - y) * ease;
        glow.style.transform = `translate3d(${x - halfW}px, ${y - halfH}px, 0)`;

        // Stop the loop once settled so idle cards cost nothing
        if (Math.abs(targetX - x) < 0.5 && Math.abs(targetY - y) < 0.5) {
            rafId = null;
            return;
        }
        rafId = requestAnimationFrame(render);
    };

    const setTarget = (e) => {
        const rect = card.getBoundingClientRect();
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
    };

    card.addEventListener('pointerenter', (e) => {
        if (!canHover.matches || e.pointerType !== 'mouse') return;
        halfW = glow.offsetWidth / 2;
        halfH = glow.offsetHeight / 2;
        setTarget(e);
        // Start from the entry point instead of flying in from the corner
        x = targetX;
        y = targetY;
        glow.classList.add('is-active');
        if (!rafId) rafId = requestAnimationFrame(render);
    });

    card.addEventListener('pointermove', (e) => {
        if (!glow.classList.contains('is-active')) return;
        setTarget(e);
        if (!rafId) rafId = requestAnimationFrame(render);
    });

    card.addEventListener('pointerleave', () => {
        glow.classList.remove('is-active');
    });
});

// 7. Scroll Spy: highlight the menu item of the section in view
const spyLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const spySections = [...spyLinks]
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

function setActiveLink(id) {
    spyLinks.forEach(link => {
        const isActive = link.getAttribute('href') === '#' + id;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
    });
}

if ('IntersectionObserver' in window && spySections.length) {
    // Only the middle band of the viewport counts, so exactly one section is "current"
    const spyObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
    }, { rootMargin: '-45% 0px -55% 0px' });

    spySections.forEach(section => spyObserver.observe(section));

    // Hero has no menu item: clear the highlight when it is back in view
    const hero = document.getElementById('hero');
    if (hero) {
        new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) setActiveLink(null);
        }, { rootMargin: '-45% 0px -55% 0px' }).observe(hero);
    }
}

// 8. Init
applyLanguage(getInitialLanguage());
