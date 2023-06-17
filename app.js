// const animateThings = document.getElementById("parentImgAnimate");
// console.log(animateThings);

// const animateOne = document.getElementById("animateOne");
// animateOne.addEventListener("click", () => {
//   animateOne.style.color = "red";
// });
// const servsec2 = document.getElementById("serv-sec2");

// for (let i = 0; i < 4; i++) {
//   console.log("ok");
//   const nediv = document.createElement("div");
//   servsec2.appendChild(nediv);
// }
const mainMenuA = document.getElementById("mainMenuA");
const closeMenu = document.getElementById("closeMenu");
const openMenu = document.getElementById("openMenu");
const removeNav = document.getElementById("ulNavTo");
const inputSubmit = document.getElementById("#inputSubmit");
openMenu.addEventListener("click", (l) => {
  mainMenuA.style.left = "0";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  // setTimeout(() => {
  //   mainMenuA.style.left = "-110%";
  // }, 6000);
  // mainMenuA.style.left = "-110%";
});
removeNav.addEventListener("click", () => {
  mainMenuA.style.left = "-110%";
});
closeMenu.addEventListener("click", () => {
  mainMenuA.style.left = "-110%";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  // mainMenuA.style.top = "-110%";
});
// inputSubmit.addEventListener("submit", () => {
//   // alert("Thank you! Your message has been sent.");
//   console.log("sent");
// });

const submitFo = () => {
  alert("lol");
};

let tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });

tl.to("#lelh1", {
  y: "0%",
  duration: 0.7,
  stagger: 0.2,
});
tl.fromTo("#lmaoh1", { opacity: 0 }, { opacity: 1, delay: 0.5 });


gsap.to("#myAvImg", {
  scale: 1.5,
  duration: 2,
  delay: 1,
  borderRadius: "50%",
  height: "200px",
});

// gsap.to("#portfolio", {
//   scrollTrigger: {
//     trigger: "#portfolio",
//     scroller: "body",
//   },

// });
gsap.to(".imgkk", {
  scrollTrigger: {
    trigger: ".imgkk",
    scroller: "body",
    start: "top 80%",
    end: "bottom 10%",
    scrub: true,
  },
  opacity: 0.5,
  height: "400px",
  duration: 0.02,
});

gsap.to(".services-sec1", {
  scrollTrigger: {
    trigger: ".services-sec1",
    scroller: "body",
    start: "top 80%",
    end: "bottom 10%",
    scrub: true,
  },
  opacity: 1,
  flexDirection: "column",
  duration: .2,
});
