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

    // PDF DINAMICO
    const language = localStorage.getItem('language') || 'en';
    const cvLink = document.getElementById('cv-link');
    const cvLinks ={
        en: "https://drive.google.com/file/d/13c01g-wwSzheEdwDUbeN0W33VJZiNVzu/view?usp=drive_link",
        es: "https://drive.google.com/file/d/1-POHXopGCB5hkn3DWhEDYIFgBj7hUrVN/view?usp=drive_link"
    }

    function updateCvLink() {
        if (cvLink) {
            cvLink.action = cvLinks[language] 
        }
    }

    updateCvLink();
});
