/* ===================================
   TLO VISUAL - MAIN JAVASCRIPT
   ================================ */

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// NAVBAR BACKGROUND ON SCROLL
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const styles = getComputedStyle(document.documentElement);
    if (window.scrollY > 50) {
        navbar.style.background = styles.getPropertyValue('--navbar-bg-scroll').trim();
    } else {
        navbar.style.background = styles.getPropertyValue('--navbar-bg-idle').trim();
    }
});

// THEME TOGGLE
(function() {
    const btn = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('tlo-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);

    btn.addEventListener('click', function() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'glass' ? '' : 'glass';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('tlo-theme', next);
        // Reset navbar inline style so CSS vars take effect
        document.querySelector('.navbar').style.background = '';
    });
})();

// MOBILE MENU TOGGLE
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// HERO GALLERY SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    updateIndicators(index);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance slides every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Reset interval on manual navigation
function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Add event listeners to navigation buttons
document.querySelectorAll('.gallery-nav button').forEach((btn, index) => {
    btn.addEventListener('click', resetSlideInterval);
});

// CREATE GALLERY INDICATORS
function createIndicators() {
    const indicatorsContainer = document.getElementById('galleryIndicators');
    if (!indicatorsContainer) return;

    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
            resetSlideInterval();
        });
        indicatorsContainer.appendChild(indicator);
    }
}

function updateIndicators(index) {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Initialize indicators
createIndicators();

// PORTFOLIO FILTERS
const filterBtns = document.querySelectorAll('.filter-btn');
const proyectoItems = document.querySelectorAll('.proyecto-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');

        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Filter projects
        proyectoItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// LAZY LOADING IMAGES (Simple implementation)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// FADE IN ON SCROLL ANIMATION
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.pantalla-card, .proyecto-item, .equipo-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// FORM VALIDATION (if forms are added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// WHATSAPP MESSAGE FORMATTER
function sendWhatsAppMessage(message) {
    const phoneNumber = '34686514064';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// LOG PAGE VIEW (Analytics placeholder)
console.log('TLO Visual - Página cargada:', new Date().toISOString());

// PREVENT DOUBLE CLICK ON BUTTONS
document.querySelectorAll('button, .btn-primary, .contact-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.classList.contains('loading')) {
            e.preventDefault();
            return false;
        }
    });
});