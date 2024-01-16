import gsap from "gsap";
import * as navigatorStyles from "@styles/HUD.module.scss";

export function gsapOnRender(camera, rotationUpdateOnMouseMoveHandler) {
  // gsap.set("#landing-hud-overlay", { opacity: 0 });
  gsap.set(camera.rotation, { x: -Math.PI / 2, y: Math.PI/2, z: 0 });
  // gsap.set(camera.rotation, { x: 0, y: 0, z: 0 });

  const tl = gsap.timeline({
    onComplete: () => {
      window?.addEventListener("mousemove", rotationUpdateOnMouseMoveHandler);
    },
  });

  tl.to(camera.rotation, {
    x: 0,
    y: 0,
    z: 0,
    duration: 2,
    delay: 2,
    ease: "power2.inOut",
  })
    .to(
      "#landing-hud-overlay",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      ">"
    )
    .fromTo(
      `.${navigatorStyles.navigatorLinks} button`,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.in",
        stagger: 0.2,
      },
      "-=1"
    );
}
