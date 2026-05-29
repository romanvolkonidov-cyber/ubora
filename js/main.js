(function () {
    'use strict';

    // Sticky header shadow on scroll
    const header = document.getElementById('siteHeader');
    if (header) {
        const onScroll = () => {
            if (window.scrollY > 8) header.classList.add('is-scrolled');
            else header.classList.remove('is-scrolled');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // Mobile menu
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('siteNav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(open));
            toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        });
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Reveal-on-scroll
    const targets = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && targets.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        targets.forEach(el => io.observe(el));
    } else {
        targets.forEach(el => el.classList.add('is-visible'));
    }

    // Industry filter (clients page)
    const filterBtns = document.querySelectorAll('.industry-filter button');
    const filterCards = document.querySelectorAll('[data-industry]');
    if (filterBtns.length && filterCards.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-filter');
                filterBtns.forEach(b => b.classList.remove('is-active'));
                btn.classList.add('is-active');
                filterCards.forEach(card => {
                    const tag = card.getAttribute('data-industry');
                    card.style.display = (target === 'all' || tag === target) ? '' : 'none';
                });
            });
        });
    }

    // Contact form — POSTs to shared Firebase endpoint
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    const ENDPOINT = 'https://sendcontactmessage-35666ugduq-uc.a.run.app';
    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (contactForm && formSuccess && formError) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '';

        const showError = (msg) => {
            formSuccess.classList.remove('is-visible');
            formError.innerHTML = msg;
            formError.classList.add('is-visible');
            formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            formError.classList.remove('is-visible');
            formSuccess.classList.remove('is-visible');

            const data = new FormData(contactForm);
            const name = (data.get('name') || '').toString().trim();
            const email = (data.get('email') || '').toString().trim();
            const phone = (data.get('phone') || '').toString().trim();
            const service = (data.get('service') || '').toString().trim();
            const company = (data.get('company') || '').toString().trim();
            const location = (data.get('location') || '').toString().trim();
            const messageBody = (data.get('message') || '').toString().trim();

            if (!name || !email || !phone) {
                showError('Please fill in your name, email and phone so we can get back to you.');
                return;
            }
            if (!EMAIL_RE.test(email)) {
                showError('That email address doesn’t look right. Please double-check it.');
                return;
            }

            // Fold extra Ubora-only fields into the message body so nothing is lost
            const extras = [];
            if (company) extras.push(`Company / Institution: ${company}`);
            if (location) extras.push(`Site Location: ${location}`);
            const fullMessage = extras.length
                ? `${messageBody}\n\n---\n${extras.join('\n')}`.trim()
                : messageBody;

            const payload = {
                type: 'contact',
                name, email, phone,
                service: service || 'Not specified',
                message: fullMessage || '(no message provided)'
            };

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending…';
            }

            try {
                const res = await fetch(ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                formSuccess.textContent = `Thank you, ${name}. Our team will contact you within one business day to schedule your free survey.`;
                formSuccess.classList.add('is-visible');
                contactForm.reset();
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } catch (err) {
                showError(
                    'Sorry, we couldn’t send your message just now. ' +
                    'Please try again, or call us on ' +
                    '<a href="tel:+254703959529">0703 959 529</a> / ' +
                    '<a href="tel:+254728088486">0728 088 486</a>.'
                );
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnHTML;
                }
            }
        });
    }
})();
