// 1. Typing Effect (Home Page Professionalism)
new Typed('#typing-text', {
    strings: ['Linux Environments', 'Kali NetHunter', 'FullStack Development', 'Tech Tutorials'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// 2. Mobile Menu Toggle
function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

// 3. Search System (Fixed & Fast)
function searchLinux() {
    let input = document.getElementById('linux-search').value.toLowerCase();
    let cards = document.querySelectorAll('.searchable');

    cards.forEach(card => {
        let key = card.getAttribute('data-keyword').toLowerCase();
        card.style.display = key.includes(input) ? "block" : "none";
    });
}

// 4. Smooth Guide Toggle
function toggleGuide(id) {
    const guide = document.getElementById(id);
    const isVisible = guide.style.display === "block";
    
    // Sab band karein
    document.querySelectorAll('.guide-details').forEach(d => d.style.display = 'none');
    
    if (!isVisible) {
        guide.style.display = "block";
        guide.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// 5. Pro Copy Function
function copyCmd(btn) {
    const code = btn.previousElementSibling.innerText;
    navigator.clipboard.writeText(code);
    
    const icon = btn.querySelector('i');
    icon.classList.replace('far', 'fas');
    icon.classList.replace('fa-copy', 'fa-check');
    btn.style.color = "#00ffcc";

    setTimeout(() => {
        icon.classList.replace('fas', 'far');
        icon.classList.replace('fa-check', 'fa-copy');
        btn.style.color = "#a0a0a0";
    }, 2000);
}

// 6. Theme Switcher
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeBtn.classList.toggle('fa-sun');
});

// 7. Scroll Reveal
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
});