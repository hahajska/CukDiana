let produktAnimace1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".prvniImg__Animace",
    start: "bottom 40%",
    end: "bottom 0%",
    scrub: 1,
    markers: false,
    toggleActions: "play none reverse none",
  },
});
produktAnimace1.fromTo(
  ".kolecko1",
  8,
  { y: "200px" },
  {
    y: "-5px",
    duration: 8,
    ease: Power4.easeOut,
  }
);

//2 animace
//2 animace
//2 animace
//2 animace
let produktAnimace2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".druhaImg__Animace",
    start: "bottom 50%",
    scrub: 1,
    markers: false,
    toggleActions: "play none reverse none",
  },
});
produktAnimace2.fromTo(
  ".kolecko2",
  { y: "200px" },
  {
    y: "-5px",
    duration: 8,
    ease: Power4.easeOut,
  }
); //3 animace //3 animace //3 animace //3 animace
/*   .fromTo(".kafe", 2, { y: "50px" }, { y: 0, ease: Power4.easeOut }, "-=2");
 */ let produktAnimace3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".tretiImg__Animace",
    start: "bottom 40%",
    scrub: 1,
    markers: false,
    toggleActions: "play none reverse none",
  },
});
produktAnimace3.fromTo(
  ".kolecko3",
  { y: "200px" },
  {
    y: "-5px",
    duration: 8,
    ease: Power4.easeOut,
  }
);
