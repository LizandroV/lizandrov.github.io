document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".carousel img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }

    images.forEach((img, index) => {
        if (index !== 0) img.style.opacity = 0;
    });

    setInterval(showNextImage, 8000);

    // Menu hamburguesa
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        burger.classList.toggle("toggle");
    });
});

/////////// COPYRIGHT YEAR BUTTON  ///////////
document.querySelector('#year').textContent = new Date().getFullYear();

// TRADUCCIONES //
document.addEventListener('DOMContentLoaded', () => {
    const langButton = document.getElementById('lang-btn');
    const language = localStorage.getItem('language') || 'en';
    const translations = {};

    function loadTranslations(lang) {
        fetch(`locales/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                Object.assign(translations, data);
                translatePage();
            });
    }

    function translatePage() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        if (langButton) {
            langButton.textContent = language === 'en' ? 'Español' : 'English';
        }
    }

    langButton.addEventListener('click', () => {
        const newLang = language === 'en' ? 'es' : 'en';
        localStorage.setItem('language', newLang);
        window.location.reload();
    });

    loadTranslations(language);
});
