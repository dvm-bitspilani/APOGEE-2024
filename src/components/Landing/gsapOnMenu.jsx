import gsap from "gsap";
import * as hudStyles from "@styles/HUD.module.scss";

export function gsapOnMenu(
  camera,
  menuPos,
  menuRot,
  isHamOpen,
  rotationUpdateOnMouseMoveHandler
) {
  // Store the function in a variable
  //   let rotationHandler = rotationUpdateOnMouseMoveHandler;

  if (!isHamOpen) {
    console.log("forwards");

    const tl = gsap.timeline({
      onStart: () => {
        window?.removeEventListener(
          "mousemove",
          rotationUpdateOnMouseMoveHandler
        );
      },
    });

    // window?.removeEventListener("mousemove", rotationUpdateOnMouseMoveHandler);
    // window?.addEventListener("mousemove", (e) => rotationUpdateOnMouseMove(e, menuRot));

    tl.to(
      `.${hudStyles.navigatorWrapper}`,
      {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    ) .to(
        `.${hudStyles.regEventsWrapper}`,
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        }, "<"
    ).to(
      `.${hudStyles.crosshair}`,
      {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      }, "<"
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
      );
  } else {
    // window?.removeEventListener("mousemove", (e) => rotationUpdateOnMouseMove(e, menuRot));

    console.log("backwards");

    const tl = gsap.timeline({
      onComplete: () => {
        window?.addEventListener("mousemove", rotationUpdateOnMouseMoveHandler);
      },
    });

    tl.to(camera.rotation, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1,
      ease: "power2.inOut",
    })
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
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      ).to(
        `.${hudStyles.regEventsWrapper}`,
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        }, "<"
    ).to(
      `.${hudStyles.crosshair}`,
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      }, "<"
    );
  }
}
