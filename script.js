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
        navLinks.classList.toggle('active');

        // Optional: Change icon from bars to times (X)
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// 3. Donate Modal Logic
const donateBtn = document.getElementById('donate-btn');
const modal = document.getElementById('donate-modal');
const closeModal = document.querySelector('.close-modal');
const copyBox = document.querySelector('.copy-box');

if (donateBtn && modal && closeModal) {
    // Open Modal
    donateBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent jump to # anchor
        modal.style.display = 'flex';
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

    // Copy Bank Account
    if (copyBox) {
        copyBox.addEventListener('click', () => {
            const accNum = document.getElementById('bank-acc').innerText;
            navigator.clipboard.writeText(accNum).then(() => {
                alert('Đã copy số tài khoản: ' + accNum);
            });
        });
    }
}
