import { proxy } from "valtio";

const state = proxy({
  isHamOpen: false,
  alienPlanet: null,
  camera: null,
  activeSection: 0,
  targetSection: 0,
  isMoving: false,
  explosions: [],

  numCategories: 1,
  currentCategory: 1,
  categories: [],

  numEvents: 1,
  currentEvent: 1,
  events: [],

  mascotRef: null,

  isMobile: false,
});

export default state;
