import { proxy } from "valtio";

const state = proxy({ isHamOpen: false, alienPlanet: null, camera: null });

export default state;
