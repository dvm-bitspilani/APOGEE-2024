import { proxy } from "valtio";

const state = proxy({ isHamOpen: false, alienPlanet: null, camera: null, activeSection: 0 });

export default state;
