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

