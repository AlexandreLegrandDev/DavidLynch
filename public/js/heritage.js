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
    "La Maison des Feuilles": "La Maison des Feuilles est un roman écrit par Mark Z. Danielewski, publié en 2000. Il raconte l’histoire d’une maison dont l’intérieur est plus grand que l’extérieur, défiant toute logique physique et plongeant ses occupants dans un espace labyrinthique et angoissant. À travers une narration fragmentée et une mise en page expérimentale, le livre brouille constamment les repères du lecteur, jouant sur la perception, la peur et l’inconnu. Cette approche rappelle fortement l’univers de Lynch, notamment dans sa manière de déconstruire le réel et de créer une angoisse diffuse. Comme dans ses films, le quotidien bascule progressivement dans l’étrange, sans jamais offrir de réponse claire.",
    "Gregory Crewdson": "Artiste new-yorkais à la notoriété importante, Gregory Crewdson est un photographe passionné dont l’inspiration lynchienne est évidente. Ses oeuvres, photographies tristes et parfois sinistres, se veulent ressembler à des scènes tirées de films anonymes. Souvent à la frontière entre le quotidien et l’étrange, Crewdson produit des images froides et silencieuses dont le résultat est lié à une préparation méticuleuse du décor, des sujets et de l’éclairage. Il assume par ailleurs son amour pour le travail de Lynch et s’en inspire au quotidien, notamment dans sa représentation sombre des États-Unis.",
    "The Lighthouse": "The Lighthouse est un film réalisé par Robert Eggers en 2019. Tourné en noir et blanc, il met en scène deux gardiens de phare isolés sur une île battue par les vents, sombrant peu à peu dans la folie. Le film adopte une approche très sensorielle, mêlant hallucinations, symbolisme et tension psychologique. À l’image du cinéma de Lynch, il joue sur l’ambiguïté entre réalité et fantasme, laissant le spectateur interpréter les événements. L’atmosphère oppressante, le travail sonore et l’étrangeté des situations évoquent directement l’univers lynchien, où la folie et l’isolement deviennent des vecteurs narratifs essentiels.",
    "Severance": "Severance est une série sortie en 2022 sur la plateforme Apple TV. Elle raconte l’histoire de Mark Scout, un employé “dissocié” qui travaille pour une entreprise pharmaceutique, Lumon Industries. Dans cet univers froid et étrange de science-fiction, il existe un dispositif permettant de dissocier les pensées des employés entre leur travail et leur vie privée, créant deux individus aux personnalités parfois bien différentes dans un seul et même corps. L’esthétique lynchienne se retranscrit dans les décors vides et liminaux utilisés pour créer une ambiance presque malsaine. ",
    "Silent Hill": "Silent Hill est une série de jeux vidéo d’horreur débutée en 1999, reconnue pour son ambiance pesante et psychologique. Contrairement à d’autres jeux du genre, elle privilégie la suggestion à la démonstration, créant une peur diffuse à travers des environnements brumeux, des sons inquiétants et des créatures symboliques. L’influence de Lynch est particulièrement visible dans la manière dont la ville elle-même semble vivante, agissant comme une projection des peurs et des traumatismes des personnages. La narration fragmentée et les multiples interprétations possibles rappellent également les œuvres du cinéaste, où la frontière entre réalité et inconscient est constamment remise en question."
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