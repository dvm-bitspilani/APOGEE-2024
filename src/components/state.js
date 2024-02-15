import { proxy } from "valtio";

const state = proxy({
  isHamOpen: false,
  alienPlanet: null,
  camera: null,
  activeSection: 0,
  targetSection: 0,
  isMoving: false,
  explosions: [],

  numCategories: 10,
  categoryOffset: 0,

  mascotRef: null,
});

export default state;
