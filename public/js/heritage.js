window.addEventListener("load", () => {

  gsap.fromTo(".page-flash",
    { opacity: 1 },
    {
      opacity: 0,
      duration: 3,
      ease: "power4.out"
    }
  );

});

const windows = document.querySelectorAll(".window");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const modalTitre = document.getElementById("modal-titre");
const closeBtn = document.querySelector(".close");

const titres = {
  "Le Silencio" : "Le Silencio",
  "La Maison des Feuilles" : "La Maison des Feuilles",
  "Gregory Crewdson" : "Gregory Crewdson",
  "The Lighthouse" : "The Lighthouse",
  "Severance" : "Severance",
  "Silent Hill" : "Silent Hill"
};

const descriptions = {
    "Le Silencio" : "Mulholland Drive (2001) met en scène un étrange cabaret aux rideaux rouges, jouant sur l'illusion de la réalité. Cette scène du film plonge le spectateur dans une sorte de rêve chimérique irréel, perturbant par ailleurs le récit grâce à une scène clé. Le Club Silencio est alors devenu un lieu culte de l’imaginaire de Lynch. Rendant hommage à ce passage de Mulholland Drive, le Silencio est un club imaginé et créé par David Lynch lui-même. Situé à Paris, il reprend les codes du théâtre de Mulholland Drive pour proposer une expérience immersive.",
    "La Maison des Feuilles": "Roman labyrinthique et oppressant.",
    "Gregory Crewdson": "Artiste new-yorkais à la notoriété importante, Gregory Crewdson est un photographe passionné dont l’inspiration lynchienne est évidente. Ses oeuvres, photographies tristes et parfois sinistres, se veulent ressembler à des scènes tirées de films anonymes. Souvent à la frontière entre le quotidien et l’étrange, Crewdson produit des images froides et silencieuses dont le résultat est lié à une préparation méticuleuse du décor, des sujets et de l’éclairage. Il assume par ailleurs son amour pour le travail de Lynch et s’en inspire au quotidien, notamment dans sa représentation sombre des États-Unis.",
    "The Lighthouse": "Film claustrophobique en noir et blanc.",
    "Severance": "Severance est une série sortie en 2022 sur la plateforme Apple TV. Elle raconte l’histoire de Mark Scout, un employé “dissocié” qui travaille pour une entreprise pharmaceutique, Lumon Industries. Dans cet univers froid et étrange de science-fiction, il existe un dispositif permettant de dissocier les pensées des employés entre leur travail et leur vie privée, créant deux individus aux personnalités parfois bien différentes dans un seul et même corps. L’esthétique lynchienne se retranscrit dans les décors vides et liminaux utilisés pour créer une ambiance presque malsaine. ",
    "Silent Hill": "Univers brumeux et industriel."
};

windows.forEach(win => {
    win.addEventListener("click", () => {
        const img = win.querySelector("img").src;
        const title = win.querySelector(".tooltip").textContent;
        
        modalImg.src = img;
        modalTitre.textContent = titres[title] || "";
        modalText.textContent = descriptions[title] || "";

        modal.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});