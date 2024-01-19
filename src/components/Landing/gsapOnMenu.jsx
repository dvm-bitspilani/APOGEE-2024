import gsap from "gsap";
import * as hudStyles from "@styles/HUD.module.scss";
import * as hamStyles from "@styles/HamMenu.module.scss";
import * as constellationStyles from "@styles/Constelation.module.scss";

export function gsapOnMenu(
  camera,
  menuPos,
  menuRot,
  isHamOpen,
  rotationUpdateOnMouseMoveHandler
) {
  // Store the function in a variable
  //   let rotationHandler = rotationUpdateOnMouseMoveHandler;

  const hamMenuButton = document.getElementById("ham-menu-button");
  const stars = document.querySelectorAll(`.${constellationStyles.constelationWrapper}>div`);
  console.log(stars);

  if (!isHamOpen) {
    console.log("forwards");

    const tl = gsap.timeline({
      onStart: () => {
        window?.removeEventListener(
          "mousemove",
          rotationUpdateOnMouseMoveHandler
        );
        hamMenuButton.disabled = true;
      },
      onComplete: () => {
        hamMenuButton.disabled = false;
      },
    });

    // window?.removeEventListener("mousemove", rotationUpdateOnMouseMoveHandler);
    // window?.addEventListener("mousemove", (e) => rotationUpdateOnMouseMove(e, menuRot));

    tl.to(
      `.${hudStyles.navigatorWrapper}`,
      {
        autoAlpha: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    )
      .to(
        `.${hudStyles.regEventsWrapper}`,
        {
          autoAlpha: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        `.${hudStyles.crosshair}`,
        {
          autoAlpha: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        camera.position,
        {
          x: menuPos[0],
          y: menuPos[1],
          z: menuPos[2],
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(
        camera.rotation,
        {
          x: menuRot[0],
          y: menuRot[1],
          z: menuRot[2],
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        `.${hamStyles.menu}`,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      ).fromTo(
        stars,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.inOut",
        },
        ">"
      );
  } else {
    // window?.removeEventListener("mousemove", (e) => rotationUpdateOnMouseMove(e, menuRot));

    console.log("backwards");

    const tl = gsap.timeline({
      onStart: () => {
        hamMenuButton.disabled = true;
      },
      onComplete: () => {
        window?.addEventListener("mousemove", rotationUpdateOnMouseMoveHandler);
        hamMenuButton.disabled = false;
      },
    });

    tl.to(
      `.${hamStyles.menu}`,
      {
        autoAlpha: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    )
      .to(camera.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "power2.inOut",
      }, "-=0.5")
      .to(
        camera.position,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        `.${hudStyles.navigatorWrapper}`,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(
        `.${hudStyles.regEventsWrapper}`,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        `.${hudStyles.crosshair}`,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
  }
}
