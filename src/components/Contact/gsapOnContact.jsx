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

  const navigationLinks = document.querySelectorAll(
    `.${hudStyles.navigatorrapper} button`
  );

  const cardContainers = document.querySelectorAll(
    `.${contactStyles.cardContainer}`
  );

  if (targetSection === 4) {
    const tl = gsap.timeline({
      onStart: () => {
        window?.removeEventListener(
          "mousemove",
          rotationUpdateOnMouseMoveHandler
        );
        state.activeSection = targetSection;

        // disable the navigation buttons
        gsap.set(navigationLinks, {
          pointerEvents: "none",
        });

        gsap.set(`.${contactStyles.wrapper}`, {
          autoAlpha: 1,
        });
      },
      onComplete: () => {
        // window?.addEventListener("mousemove", rotationUpdateOnMouseMoveHandler);
        // enable the navigation buttons
        gsap.set(navigationLinks, {
          pointerEvents: "all",
        });
      },
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
        `.${hudStyles.logo}`,
        {
          autoAlpha: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        ""
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
        `.${contactStyles.title}`,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .fromTo(
        cardContainers,
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.2,
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

        // disable the navigation buttons
        gsap.set(navigationLinks, {
          pointerEvents: "none",
        });
      },
      onComplete: () => {
        window?.addEventListener("mousemove", rotationUpdateOnMouseMoveHandler);
        // enable the navigation buttons
        gsap.set(navigationLinks, {
          pointerEvents: "all",
        });
      },
    });

    tl.to(
      `.${contactStyles.wrapper}`,
      {
        autoAlpha: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      ""
    )
      .to(
        `.${contactStyles.title}`,
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
        `.${hudStyles.regEventsWrapper}`,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(
        `.${hudStyles.logo}`,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      );
  }
}
