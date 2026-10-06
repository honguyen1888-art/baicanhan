/**
 * MAI HUY PHONG - SMART INTERACTIVE SHOWCASE (TUẦN 3 - TUẦN 6)
 * JAVASCRIPT CORE LOGIC & MICRO-INTERACTIONS
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate On Scroll) Library with Fallback
    initAOS();

    // 2. Dark/Light Theme Switcher
    initThemeToggle();

    // 3. Header Scroll Effect, Search & Mobile Navigation
    initNavigation();

    // 4. Hero Section 3D Tilt Card Interaction
    initHeroTiltCard();

    // 5. Portfolio 3D Flip Cards & Category Filtering
    initPortfolioSystem();

    // 6. Cubic-Bezier Interactive Playground Lab
    initCubicBezierLab();

    // 7. Micro-interactions (Button Ripples & Magnetic Effects)
    initMicroInteractions();

    // 8. Hero Counter Animation
    initCounterAnimation();

    // 9. Interactive Contact Form Submission Feedback
    initContactForm();

    // 10. Newsletter Subscription Handling
    initNewsletterForm();

    // 11. Back to Top Button
    initBackToTop();
});

/* --------------------------------------------------------------------------
   1. AOS INITIALIZATION WITH FALLBACK
   -------------------------------------------------------------------------- */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
            disable: false
        });
    } else {
        const aosElements = document.querySelectorAll('[data-aos]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translate(0, 0) scale(1)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        aosElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            observer.observe(el);
        });
    }
}

/* --------------------------------------------------------------------------
   2. DARK / LIGHT THEME TOGGLE
   -------------------------------------------------------------------------- */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('mhp_theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('mhp_theme', newTheme);

            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    }
}

/* --------------------------------------------------------------------------
   3. NAVIGATION, SEARCH & SCROLL HIGHLIGHTING
   -------------------------------------------------------------------------- */
function initNavigation() {
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('open');
            });
        });
    }
}

/* --------------------------------------------------------------------------
   4. HERO 3D TILT CARD EFFECT (GPU OPTIMIZED 60FPS)
   -------------------------------------------------------------------------- */
function initHeroTiltCard() {
    const heroCard = document.getElementById('hero-card');
    if (!heroCard) return;

    let ticking = false;

    heroCard.addEventListener('mousemove', (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const rect = heroCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -12;
                const rotateY = ((x - centerX) / centerX) * 12;

                heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                ticking = false;
            });
            ticking = true;
        }
    });

    heroCard.addEventListener('mouseleave', () => {
        heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
}

/* --------------------------------------------------------------------------
   5. PORTFOLIO 3D FLIP CARDS & FILTERING
   -------------------------------------------------------------------------- */
function initPortfolioSystem() {
    const flipContainers = document.querySelectorAll('.flip-card-container');
    const filterBtns = document.querySelectorAll('.filter-btn');

    flipContainers.forEach(container => {
        const card = container.querySelector('.flip-card');
        const triggerBtn = container.querySelector('.flip-trigger-btn');
        const closeBtn = container.querySelector('.flip-close-btn');
        const closeBtnText = container.querySelector('.flip-close-btn-text');

        if (triggerBtn) {
            triggerBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                card.classList.add('is-flipped');
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                card.classList.remove('is-flipped');
            });
        }

        if (closeBtnText) {
            closeBtnText.addEventListener('click', (e) => {
                e.stopPropagation();
                card.classList.remove('is-flipped');
            });
        }
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const filterValue = btn.getAttribute('data-filter');

            flipContainers.forEach(container => {
                const category = container.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    container.classList.remove('hidden-filter');
                    container.style.animation = 'heroSlideUp 0.5s var(--cubic-smooth) forwards';
                } else {
                    container.classList.add('hidden-filter');
                }
            });
        });
    });
}

/* --------------------------------------------------------------------------
   6. CUBIC-BEZIER INTERACTIVE LAB
   -------------------------------------------------------------------------- */
function initCubicBezierLab() {
    const speedRange = document.getElementById('speed-range');
    const speedValueDisplay = document.getElementById('speed-value');
    const presetBtns = document.querySelectorAll('.preset-btn');
    const bezierCodeDisplay = document.getElementById('bezier-code');
    const triggerAnimBtn = document.getElementById('trigger-anim-btn');
    const demoBox = document.getElementById('demo-box');

    if (!speedRange || !demoBox) return;

    let currentCurve = 'cubic-bezier(0.16, 1, 0.3, 1)';
    let currentSpeed = '0.35s';

    function updateDemoBoxStyle() {
        demoBox.style.transition = `transform ${currentSpeed} ${currentCurve}`;
        bezierCodeDisplay.textContent = `transition: transform ${currentSpeed} ${currentCurve};`;
    }

    speedRange.addEventListener('input', (e) => {
        currentSpeed = `${e.target.value}s`;
        speedValueDisplay.textContent = currentSpeed;
        updateDemoBoxStyle();
    });

    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            presetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentCurve = btn.getAttribute('data-curve');
            updateDemoBoxStyle();
        });
    });

    if (triggerAnimBtn) {
        triggerAnimBtn.addEventListener('click', () => {
            demoBox.classList.toggle('anim-active');
        });
    }
}

/* --------------------------------------------------------------------------
   7. MICRO-INTERACTIONS (RIPPLE WAVE EFFECT)
   -------------------------------------------------------------------------- */
function initMicroInteractions() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/* --------------------------------------------------------------------------
   8. HERO COUNTER ANIMATION
   -------------------------------------------------------------------------- */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.metric-number');
    let animated = false;

    function startCounters() {
        if (animated) return;

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 1500;
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.ceil(current);
                }
            }, stepTime);
        });

        animated = true;
    }

    const heroSection = document.getElementById('hero');
    if (heroSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                startCounters();
            }
        }, { threshold: 0.3 });

        observer.observe(heroSection);
    }
}

/* --------------------------------------------------------------------------
   9. CONTACT FORM SUBMISSION
   -------------------------------------------------------------------------- */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btnText = contactForm.querySelector('.btn-text');
        const btnIcon = contactForm.querySelector('.btn-icon');
        const spinner = contactForm.querySelector('.spinner');
        const submitBtn = contactForm.querySelector('.btn-submit');

        btnText.textContent = 'Đang xử lý...';
        btnIcon.style.display = 'none';
        spinner.classList.remove('hidden');
        submitBtn.disabled = true;

        setTimeout(() => {
            spinner.classList.add('hidden');
            btnIcon.className = 'fa-solid fa-check btn-icon';
            btnIcon.style.display = 'inline-block';
            btnText.textContent = 'Gửi Phản Hồi Thành Công!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

            setTimeout(() => {
                contactForm.reset();
                btnText.textContent = 'Gửi Nhận Xét Ngay';
                btnIcon.className = 'fa-solid fa-paper-plane btn-icon';
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

/* --------------------------------------------------------------------------
   10. NEWSLETTER FORM SUBMISSION
   -------------------------------------------------------------------------- */
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        const btn = newsletterForm.querySelector('button');

        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        input.value = '';
        input.placeholder = 'Đã đăng ký thành công!';

        setTimeout(() => {
            btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
            input.placeholder = 'Nhập email của bạn...';
        }, 3000);
    });
}

/* --------------------------------------------------------------------------
   11. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
