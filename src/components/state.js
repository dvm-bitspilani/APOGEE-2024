import { proxy } from "valtio";

const state = proxy({ count: 0 });

export default state;
