// Animation au chargement de la page

window.addEventListener("load", () => {
    const curtains = document.querySelector(".rideaux");
    setTimeout(() => {
        curtains.classList.add("open");
    }, 300); // petit délai pour effet dramatique
});


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scene-container');
    const home = document.getElementById('home');

    const startAnimation = () => {
        document.body.classList.add('active'); // Pour le titre
        container.classList.add('active');     // Pour les rideaux et objets
    };

    home.addEventListener('click', () => {
                startAnimation();
                setTimeout(() => {
                    window.location.href = "./parcours.html";
                }, 3500); 
        });
    });

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


const tooltip = document.getElementById("tooltip");
const elementsHover = document.querySelectorAll(".element");

elementsHover.forEach(el => {

    el.addEventListener("mouseenter", (e) => {
        const text = el.getAttribute("data-title");

        if(text){
            tooltip.textContent = text;
            tooltip.style.opacity = "1";
        }
    });

    el.addEventListener("mousemove", (e) => {
        tooltip.style.left = (e.clientX + 15) + "px";
        tooltip.style.top = (e.clientY + 15) + "px";
    });

    el.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
    });

});