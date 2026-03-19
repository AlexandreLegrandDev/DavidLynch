let neon = document.getElementsByClassName("neon");
let silencio = neon[0];

let background = document.querySelector(".background");
let fade = document.querySelector(".fade");

let container = document.getElementById("container");

silencio.addEventListener("click", () => {
    container.classList.add("hidden");

    // Zoom
    background.classList.add("zoom");

    // Attendre un peu avant le fondu
    setTimeout(() => {
        fade.classList.add("active");
    }, 1800);

    // Redirection après le fondu
    setTimeout(() => {
        window.location.href = "./oeuvres.html";
    }, 3200);
});