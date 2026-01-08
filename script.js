// ===========================
// Common Variables & Constants
// ===========================

// --- Icon SVG Strings (Lucide) ---
const icons = {
    "clipboard-list": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,
    "users": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "ruler": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>`,
    "check-circle": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
    "building": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
    "palette": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
    "file-signature": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L20 7.5V10"/><path d="M18 20v-5h-3v5"/><path d="M15 15c-1 0-2 1.5-2 3.5s1 3.5 2 3.5"/><path d="M17.666 8H14V4.333"/></svg>`,
    "hammer": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V7.86c0-.55-.45-1-1-1H14.5c-.55 0-1 .45-1 1v.36c0 .84-.33 1.65-.93 2.25L11.36 11.7"/><path d="m16 5-3-3"/><path d="m21 10-3-3"/></svg>`,
    "check-square": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    "key": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>`,
    "armchair": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>`
};

// ===========================
// Navigation & Scroll Effects
// ===========================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        scrollTop.classList.add('show');
    } else {
        navbar.classList.remove('scrolled');
        scrollTop.classList.remove('show');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (typeof navMenu !== 'undefined') {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// Scroll to top button
if (scrollTop) {
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Mobile Navigation
// ===========================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ===========================
// Animated Counter for Stats
// ===========================

const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (target === 100 ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (target === 100 ? '%' : '+');
        }
    }, 16);
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-count'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// ===========================
// Services Tabs (Section 10)
// ===========================

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            const target = document.getElementById(tabId);
            if (target) target.classList.add('active');
        });
    });
}

// ===========================
// Work Process (Section 11)
// ===========================

const phases = [
    {
        id: "phase1",
        label: "01. Planning & Analysis",
        description: "Laying the foundation for success.",
        steps: [
            { id: 1, title: "Requirement Analysis", desc: "Understanding your vision, needs, and lifestyle requirements deeply.", icon: "clipboard-list" },
            { id: 2, title: "Project Discussion", desc: "Collaborative brainstorming to refine scope, budget, and timelines.", icon: "users" },
            { id: 3, title: "Token & Planning", desc: "Securing commitment and initiating architectural drawings.", icon: "ruler" },
            { id: 4, title: "Plan Confirmation", desc: "Reviewing blueprints until you are 100% satisfied.", icon: "check-circle" },
        ]
    },
    {
        id: "phase2",
        label: "02. Approvals & Selection",
        description: "Handling the paperwork and details.",
        steps: [
            { id: 5, title: "Plan & Loan Sanction", desc: "Assisting with government approvals and banking processes.", icon: "building" },
            { id: 6, title: "Material Selection", desc: "Choosing textures, finishes, and fixtures for your look.", icon: "palette" },
            { id: 7, title: "Agreement", desc: "Formalizing the contract with transparent specifications.", icon: "file-signature" },
        ]
    },
    {
        id: "phase3",
        label: "03. Construction & Delivery",
        description: "Bringing the vision to life.",
        steps: [
            { id: 8, title: "During Work", desc: "Construction begins with rigorous quality checks and updates.", icon: "hammer" },
            { id: 9, title: "Work Completion", desc: "Final walkthroughs to ensure every corner meets standards.", icon: "check-square" },
            { id: 10, title: "Handover", desc: "Handing over keys, warranties, and documentation.", icon: "key" },
            { id: 11, title: "Settle In", desc: "Support ensuring a smooth transition into your new home.", icon: "armchair" },
        ]
    }
];

let currentPhaseId = phases[0].id;

// Exposed to global scope for HTML onclick access
window.setPhase = function(id) {
    if (currentPhaseId === id) return;
    currentPhaseId = id;
    renderTabs();
    renderSteps();
};

function renderTabs() {
    const container = document.getElementById('tabs-container');
    if (!container) return;
    
    container.innerHTML = phases.map(phase => {
        const isActive = phase.id === currentPhaseId;
        const activeClass = isActive ? "active" : "";
        
        return `
            <button onclick="window.setPhase('${phase.id}')" 
                class="tab-button ${activeClass}">
                <div class="tab-label">${phase.label}</div>
                <div class="tab-desc">${phase.description}</div>
                ${isActive ? '<div class="tab-arrow"></div>' : ''}
            </button>
        `;
    }).join('');
}

function renderSteps() {
    const container = document.getElementById('steps-grid');
    if (!container) return;
    
    const activePhaseData = phases.find(p => p.id === currentPhaseId);
    
    const cardsHtml = activePhaseData.steps.map((step, index) => {
        const stepNumber = step.id < 10 ? `0${step.id}` : step.id;
        return `
            <div class="animate-fade-up step-card-custom" style="animation-delay: ${index * 100}ms; opacity: 0; animation-fill-mode: forwards;">
                <div class="step-header">
                    <div class="step-icon-wrapper">
                        <div class="step-icon">
                            ${icons[step.icon]}
                        </div>
                    </div>
                    <span class="step-number-text">
                        ${stepNumber}
                    </span>
                </div>
                
                <h3 class="step-title">
                    ${step.title}
                </h3>
                <p class="step-desc">
                    ${step.desc}
                </p>
            </div>
        `;
    }).join('');

    container.innerHTML = cardsHtml;
}

// Initialize Work Process
if (document.getElementById('tabs-container')) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            renderTabs();
            renderSteps();
        });
    } else {
        renderTabs();
        renderSteps();
    }
}

// ===========================
// Contact Form & Country Picker
// ===========================

// Exposed global functions for HTML onclick
window.toggleCountryList = function() {
    const list = document.getElementById('countryList');
    if (list) list.classList.toggle('active');
};

window.selectCountry = function(flag, code) {
    const flagElem = document.getElementById('currentFlag');
    const codeElem = document.getElementById('currentCode');
    
    if (flagElem) flagElem.textContent = flag;
    if (codeElem) codeElem.textContent = code;
    
    const list = document.getElementById('countryList');
    if (list) list.classList.remove('active');
};

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
    const select = document.getElementById('countrySelect');
    if (select && !select.contains(e.target)) {
        const list = document.getElementById('countryList');
        if (list) list.classList.remove('active');
    }
});

// Form Submission Logic
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validation matching new IDs
        const name = document.getElementById('contactName')?.value;
        const email = document.getElementById('contactEmail')?.value;
        const phone = document.getElementById('contactPhone')?.value;
        const message = document.getElementById('contactMessage')?.value;
        
        if (!name || !email || !phone) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }

        // --- Visual Feedback ---
        const btn = document.getElementById('submitBtn');
        const btnText = btn.querySelector('.btn-text');
        const spinner = btn.querySelector('.spinner-custom');

        if (btnText) btnText.textContent = 'Sending...';
        if (spinner) spinner.style.display = 'block';
        if (btn) btn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Success State
            if (btnText) btnText.textContent = 'Message Sent!';
            if (spinner) spinner.style.display = 'none';
            if (btn) btn.style.backgroundColor = '#10b981';
            
            showNotification('Thank you! We will contact you soon.', 'success');
            
            setTimeout(() => {
                contactForm.reset();
                if (btnText) btnText.textContent = 'Send Message';
                if (btn) {
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                }
            }, 3000);
            
            console.log('Form Data:', { name, email, phone, message });
        }, 1500);
    });
}

// ===========================
// Utilities: Notification
// ===========================

function showNotification(message, type = 'success') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 20px 30px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        font-weight: 600;
        font-family: var(--font-primary, sans-serif);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Inject Animation Styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===========================
// Miscellaneous Effects
// ===========================

// Scroll Reveal
const revealElements = document.querySelectorAll('.service-card, .step-card, .project-card, .info-card');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// Parallax
window.addEventListener('scroll', () => {
    const minWidth = 768;
    if (window.innerWidth < minWidth) return; 

    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Active Link Highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Image Lazy Load
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            // Assuming data-src attribute is used, fallback to src if not
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});
document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));

// Custom Cursor (Desktop Only)
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursor.style.cssText = `
        width: 20px; height: 20px;
        border: 2px solid #ff6b35;
        border-radius: 50%;
        position: fixed; pointer-events: none;
        z-index: 9999; transition: transform 0.2s ease;
        display: none; left: -100px; top: -100px;
    `;
    document.body.appendChild(cursor);
    
    // Only show when moving to avoid initial glitch
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = (e.clientX - 10) + 'px';
        cursor.style.top = (e.clientY - 10) + 'px';
    });
    
    document.querySelectorAll('a, button, .btn').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'rgba(255, 107, 53, 0.2)';
        });
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });
}

// Console Branding
console.log('%c Karewar Infracon Website ', 'background: #ff6b35; color: white; font-size: 20px; padding: 10px;');
console.log('%c Redesigned with ❤️ | Building Dreams Since 2011 ', 'background: #fffb35; color: #2c3e50; font-size: 14px;');
