import gsap from "gsap";
import * as hudStyles from "@styles/HUD.module.scss";
import * as contactStyles from "@styles/Contact.module.scss";
import state from "../state";

export function gsapOnContact(
  camera,
  contactPos,
  contactRot,
  targetSection,
  rotationUpdateOnMouseMoveHandler
) {
  // Store the function in a variable
  //   let rotationHandler = rotationUpdateOnMouseMoveHandler;

  if (targetSection === 4) {
    const tl = gsap.timeline({
      onStart: () => {
        window?.removeEventListener(
          "mousemove",
          rotationUpdateOnMouseMoveHandler
        );
        state.activeSection = targetSection;
      },
      onComplete: () => {},
    });

    // window?.removeEventListener("mousemove", rotationUpdateOnMouseMoveHandler);
    // window?.addEventListener("mousemove", (e) => rotationUpdateOnMouseMove(e, contactRot));

    tl.to(
      `.${hudStyles.regEventsWrapper}`,
      {
        autoAlpha: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      ""
    )
      .to(
        `.${hudStyles.hamMenuButton}`,
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
          x: contactPos[0],
          y: contactPos[1],
          z: contactPos[2],
          duration: 2,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(
        camera.rotation,
        {
          x: contactRot[0],
          y: contactRot[1],
          z: contactRot[2],
          duration: 2,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        `.${contactStyles.wrapper}`,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      );
  } else if (targetSection === 0) {
    const tl = gsap.timeline({
      onStart: () => {
        window?.removeEventListener(
          "mousemove",
          rotationUpdateOnMouseMoveHandler
        );
        state.activeSection = targetSection;
      },
      onComplete: () => {
        window?.addEventListener("mousemove", rotationUpdateOnMouseMoveHandler);
      },
    });

    tl.to(
      `.${contactStyles.wrapper}`,
      {
        autoAlpha: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    )
      .to(
        camera.rotation,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(
        camera.position,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        `.${hudStyles.hamMenuButton}`,
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
      );
  }
}
