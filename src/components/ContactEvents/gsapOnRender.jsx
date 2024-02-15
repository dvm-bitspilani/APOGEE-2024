import { gsap } from "gsap";

import state from "../state";

export default function gsapOnRender(mascotPos) {
  const tl = gsap.timeline();
  const mascot = state.mascotRef;

  tl.fromTo(
    mascot.position,
    { x: mascotPos[0], y: 6, z: mascotPos[2] },
    {
      x: mascotPos[0],
      y: mascotPos[1],
      z: mascotPos[2],
      duration: 1.5,
      ease: "power3.out",
      delay: 1,
    }
  );
}
