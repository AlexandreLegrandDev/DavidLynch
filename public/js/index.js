document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scene-container');
    const home = document.getElementById('home');

    console.log(home)
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

// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.getElementById('scene-container');
//     const elements = document.querySelectorAll('.element');

//     // UNE SEULE fonction propre
//     const startAnimation = () => {
//         document.body.classList.add('active'); // Pour le titre
//         container.classList.add('active');     // Pour les rideaux et objets
//         console.log("Animation globale lancée");
//     };

//     elements.forEach(el => {
//         el.addEventListener('click', () => {
//             const targetPage = el.getAttribute('data-target');

//             if (targetPage) {
//                 startAnimation();
//                 setTimeout(() => {
//                     window.location.href = targetPage;
//                 }, 3500); 
//             } else {
//                 console.log("Cet objet n'a pas de lien.");
//             }
//         });
//     });
// });


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