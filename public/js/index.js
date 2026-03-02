document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.getElementById('scene-container');
    const elements = document.querySelectorAll('.element');
    const bg = document.querySelectorAll('.bg');

    // Fonction pour lancer l'animation
    const startAnimation = () => {
        // On ajoute la classe 'active' au parent
        // CSS s'occupe du reste des transitions
        container.classList.add('active');
        
        console.log("Animation lancée : ouverture des rideaux");
    };

    // On ajoute l'écouteur de clic sur chaque élément du décor
    elements.forEach(el => {
        el.addEventListener('click', () => {
            startAnimation();
            setTimeout(() => {
                window.location = "/parcours.html";
            }, "5000");
        });
    });


    // Optionnel : permettre de réinitialiser en cliquant sur le fond après 2s
    // container.addEventListener('dblclick', () => {
    //     container.classList.remove('active');
    // });

});


function scaleScene() {
  const scene = document.getElementById('scene');
  const scale = Math.min(
    window.innerWidth / 1920,
    window.innerHeight / 1080
  );
  scene.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', scaleScene);
scaleScene();



