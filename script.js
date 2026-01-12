// 1. Typing Effect Logic
const textElement = document.querySelector('.typing-text span');
const roles = ["Full Stack Developer", "Python Expert", "Vue.js Lover", "Open Source Contributor"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    // Check if element exists to avoid errors on pages without it
    if (!textElement) return;

    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        textElement.textContent = "[ " + currentRole.substring(0, charIndex - 1) + " ]";
        charIndex--;
    } else {
        textElement.textContent = "[ " + currentRole.substring(0, charIndex + 1) + " ]";
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

// 2. Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Toggle mobile menu logic
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '0';
            navLinks.style.background = '#0f172a';
            navLinks.style.width = '100%';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            navLinks.style.zIndex = '999';
        }
    });
}
