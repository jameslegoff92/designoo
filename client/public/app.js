import { navAnimation, heroAnimation } from "./modules/animations/gsap.js";
navAnimation();
heroAnimation();


const openNavIcon = document.querySelector("#open-nav-icon");
const closeNavIcon = document.querySelector("#close-nav-icon");
const nav = document.querySelector("#navigation");
const backdrop = document.querySelector("#backdrop");
const body = document.querySelector("#body");

openNavIcon.addEventListener('click', openNavigation);
closeNavIcon.addEventListener('click', closeNavigation);
backdrop.addEventListener('click', closeNavigation);
body.addEventListener('scroll', closeNavigation);

function openNavigation() {
  closeNavIcon.classList.remove("u-hidden");
  nav.classList.remove("u-hidden");
  openNavIcon.classList.add("u-hidden");
  backdrop.classList.remove("u-hidden");
  body.classList.add("u-overflow-y-hidden");
}

function closeNavigation() {
  closeNavIcon.classList.add("u-hidden");
  nav.classList.add("u-hidden");
  openNavIcon.classList.remove("u-hidden");
  backdrop.classList.add("u-hidden");
  body.classList.remove("u-overflow-y-hidden");
}

