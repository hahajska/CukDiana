var tla2 = new TimelineMax({ paused: true, reversed: true });

const hamburger = document.querySelector(".menu__Btn");

tla2.fromTo(
  ".slider",
  1.25,
  { x: "-100%" },
  { x: "0%", y: "0%", ease: Power3.easeInOut }
);

hamburger.addEventListener("click", animate);

function animate() {
  tla2.reversed() ? tla2.play() : tla2.reverse();
}

var $menuBtn = document.getElementById("btn-hamburger");
// to attach an event to do more than one task in the same time
$menuBtn.onclick = function (e) {
  // do something tasks
  // your code here
  // animation for button with cross line on click
  animatedMenu(this);

  // avoid default behavior
  e.preventDefault();
};
function animatedMenu(x) {
  x.classList.toggle("animeOpenClose");
}

//CHANGE COLOR
//CHANGE COLOR
//CHANGE COLOR
//CHANGE COLOR
//CHANGE COLOR
//CHANGE COLOR

/* let changeColor = gsap.timeline({
  scrollTrigger: {
    trigger: ".start__ChangeColor",
    start: "bottom 15%",
    end: "bottom 1%",
    scrub: 1,
    markers: true,
    toggleActions: "play none reverse none",
  },
});
changeColor.To(
  ".text__Icons, .menu__Btn",
  {
    color: "#fff",
    duration: 1,
  },
  { color: "#000000" }
);

//CHANGE COLOR
//CHANGE COLOR
//CHANGE COLOR

let changeColorMenu = gsap.timeline({
  scrollTrigger: {
    trigger: ".start__ChangeColor",
    start: "bottom 30%",
    end: "bottom 25%",
    scrub: false,
    markers: false,
    toggleActions: "play none reverse none",
  },
});
changeColorMenu.fromTo(
  ".line-1, .line-2, .line-3",
  { backgroundColor: "#fff" },

  {
    backgroundColor: "#000000",
    duration: 0.1,
  }
);

//CHANGE COLOR
//CHANGE COLOR
//CHANGE COLOR

let changeColorBack = gsap.timeline({
  scrollTrigger: {
    trigger: ".formular__Col",
    start: "bottom 25%",
    end: "bottom 5%",
    toggleActions: "play none reverse none",
  },
});

changeColorBack.fromTo(
  ".text__Icons, .menu__Btn",
  { color: "#000000" },
  {
    color: "#fff",
    duration: 1,
  }
); */

//CHANGE COLOR
//CHANGE COLOR
//CHANGE COLOR
/* let changeColorMenuBack = gsap.timeline({
  scrollTrigger: {
    trigger: ".formular__Col",
    start: "bottom 10%",
    end: "bottom 5%",
    scrub: false,
    markers: false,
    toggleActions: "play none reverse none",
  },
});
changeColorMenuBack.fromTo(
  ".line-1, .line-2, .line-3",
  {
    backgroundColor: "#000000",
    duration: 0.1,
  },
  {
    backgroundColor: "#fff",
  }
); */
