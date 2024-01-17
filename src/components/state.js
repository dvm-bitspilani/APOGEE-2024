import { proxy } from "valtio";

const state = proxy({ isHamOpen: false, alienPlanet: null });

export default state;
