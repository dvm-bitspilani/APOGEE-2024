import { proxy } from "valtio";

const state = proxy({ isHamOpen: false });

export default state;
