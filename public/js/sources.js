window.addEventListener('scroll', () => {
    const curtains = document.querySelector('.curtains');
    
    // Calcul de la position du scroll
    const scrollTop = window.scrollY;
    // Hauteur totale scrollable
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Calcul du ratio (entre 0 et 1)
    let scrollPercent = scrollTop / docHeight;
    
    // On applique le ratio à l'opacité
    // (Tu peux multiplier scrollPercent par 1.5 si tu veux que le rideau soit à 100% avant d'arriver tout en bas)
    curtains.style.opacity = Math.min(scrollPercent, 1);
});