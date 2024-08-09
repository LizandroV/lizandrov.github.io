document.addEventListener("DOMContentLoaded", function() {
    //HAMBURGER MENU//
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        burger.classList.toggle("toggle");
    });

    //COPYRIGHT YEAR//
    document.querySelector('#year').textContent = new Date().getFullYear();

    //TRADUCCIONES//
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
    
        const technologiesList = document.getElementById('technologies-list');
        if (technologiesList) {
            translations.technologiesList.forEach(tech => {
                const li = document.createElement('li');
                li.textContent = tech;
                technologiesList.appendChild(li);
        });
        }

        const languagesList = document.getElementById('languages-list');
        if (languagesList) {
            translations.languagesList.forEach(language => {
                const li = document.createElement('li');
                li.textContent = language;
                languagesList.appendChild(li);
        });
        }

        const hobbiesList = document.getElementById('hobbies-list');
        if (hobbiesList) {
            translations.hobbiesList.forEach(hobby => {
                const li = document.createElement('li');
                li.textContent = hobby;
                hobbiesList.appendChild(li);
            });
        }

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




