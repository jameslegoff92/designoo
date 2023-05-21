import { navAnimation, heroAnimation } from "./modules/animations/gsap.js";

//GSAP Animations;
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

// Initialize and add the map
let canada, canadaMap, australia, australiaMap, uk, ukMap;

async function initMap() {
  // The location of Uluru
  canada = { lat: 43.64418, lng: -79.39453 };
  uk = { lat: 39.724054746626074, lng: -104.98782209143835 }

  
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  canadaMap = new Map(document.getElementById("canada"), {
    zoom: 14,
    center: canada,
    mapId: "DEMO_MAP_ID",
  });

  ukMap = new Map(document.getElementById("uk"), {
    zoom: 4,
    center: uk,
    mapId: "DEMO_MAP_ID",
  })

  // The marker, positioned at Uluru
  const canadaMarker = new AdvancedMarkerElement({
    map: canadaMap,
    position: canada,
    title: "canada",
  });

  const ukMarker = new AdvancedMarkerElement({
    map: ukMap,
    position: uk,
    title: "uk"
  })

  australia = { lat: -33.105, lng: 151.6362885015233 };

  australiaMap = new Map(document.getElementById("australia"), {
    zoom: 4,
    center: australia,
    mapId: "australia_ID"
  })

  console.log(australiaMap);

  const australiaMarker = new AdvancedMarkerElement({
    map: australiaMap,
    position: australia,
    title: "australia"
  })
}

initMap();
