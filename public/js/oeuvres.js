// Animation des sections

gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel");
let current = 0;
let isAnimating = false;

gsap.set(panels, { yPercent: 100 });
gsap.set(panels[0], { yPercent: 0 });

function goToPanel(index) {
  if (isAnimating || index < 0 || index >= panels.length) return;

  isAnimating = true;

  gsap.to(panels[current], {
    yPercent: -100,
    duration: 0,
    ease: "power1.out"
  });

  gsap.to(panels[index], {
    yPercent: 0,
    duration: 0,
    ease: "power1.out",
    onComplete: () => {
      current = index;
      isAnimating = false;
    }
  });
}

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    goToPanel(current + 1);
  } else {
    goToPanel(current - 1);
  }
});


// Animation transition vidéo

const button = document.getElementById("enterFilm");
const videoContainer = document.querySelector(".transition-video");
const video = document.getElementById("roadVideo");

button.addEventListener("click", () => {

  // Affiche l'overlay
  gsap.to(videoContainer, {
    opacity: 1,
    duration: 0.5,
    onComplete: () => {
      video.play();
    }
  });

});

// Quand la vidéo se termine
video.addEventListener("ended", () => {

  // On fade vers noir (sans révéler la page)
  gsap.to(videoContainer, {
    backgroundColor: "black",
    duration: 2.5,
    onComplete: () => {
      window.location.href = "../../heritage.html";
    }
  });

});

