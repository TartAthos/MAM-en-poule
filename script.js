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

document.addEventListener("DOMContentLoaded", function() {
    // Vérifie si l'utilisateur est déjà venu
    if (!sessionStorage.getItem("hasVisited")) {
        // Si c'est la 1ère fois, on affiche la modale après un court délai (0.5s)
        setTimeout(() => {
            document.getElementById("welcome-modal").classList.add("active");
        }, 500);
        
        // On enregistre qu'il est venu
        sessionStorage.setItem("hasVisited", "true");
    }
});

function closeWelcomeModal() {
    document.getElementById("welcome-modal").classList.remove("active");
}

// On intercepte la soumission du formulaire de contact
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche le rechargement de la page
    
    // ICI : Si vous utilisez un service AJAX (comme Formspree ou Web3Forms), envoyez les données ici
    
    // On affiche la fenêtre de remerciement
    document.getElementById("thanks-modal").classList.add("active");
    
    // On vide les champs du formulaire
    this.reset();
});

function closeThanksModal() {
    document.getElementById("thanks-modal").classList.remove("active");
}