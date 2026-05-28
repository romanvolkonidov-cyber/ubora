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

    // Contact form (graceful no-op submit)
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(contactForm);
            const name = (data.get('name') || '').toString().trim();
            if (!name) return;
            formSuccess.classList.add('is-visible');
            formSuccess.textContent = `Thank you, ${name}. Our team will contact you within 24 hours to schedule your free survey.`;
            contactForm.reset();
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
})();
