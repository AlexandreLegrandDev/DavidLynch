document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scene-container');
    const elements = document.querySelectorAll('.element');

    // UNE SEULE fonction propre
    const startAnimation = () => {
        document.body.classList.add('active'); // Pour le titre
        container.classList.add('active');     // Pour les rideaux et objets
        console.log("Animation globale lancée");
    };

    elements.forEach(el => {
        el.addEventListener('click', () => {
            const targetPage = el.getAttribute('data-target');

            if (targetPage) {
                startAnimation();
                setTimeout(() => {
                    window.location.href = targetPage;
                }, 3500); 
            } else {
                console.log("Cet objet n'a pas de lien.");
            }
        });
    });
});

// La fonction de scale reste en dehors, c'est très bien
function scaleScene() {
    const scene = document.getElementById('scene');
    const scale = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080
    );
    if (scene) scene.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', scaleScene);
scaleScene();