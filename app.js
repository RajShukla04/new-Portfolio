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
