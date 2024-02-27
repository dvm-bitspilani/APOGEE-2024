import { proxy } from "valtio";

const state = proxy({
  isHamOpen: false,
  alienPlanet: null,
  camera: null,
  activeSection: 0,
  targetSection: 0,
  isMoving: false,
  explosions: [],

  categories: [],
  numCategories: 1,
  // categoryOffset: 0,

  numEvents: 1,
  events: [],

  mascotRef: null,

  isMobile: false,
});

export default state;
