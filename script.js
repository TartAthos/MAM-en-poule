// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
    
    // CARROUSEL PAGE D'ACCUEIL
    const track = document.querySelector('.carousel-track');
    
    // On vérifie si le carrousel existe sur la page actuelle
    if (track) {
        const slides = Array.from(track.children);
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const dots = Array.from(document.querySelectorAll('.dot'));

        let currentIndex = 0;

        function updateCarousel(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                let index = (currentIndex + 1) % slides.length;
                updateCarousel(index);
            });

            prevBtn.addEventListener('click', () => {
                let index = (currentIndex - 1 + slides.length) % slides.length;
                updateCarousel(index);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => updateCarousel(index));
        });
    }

});