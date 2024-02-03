import gsap from "gsap";
import * as hudStyles from "@styles/HUD.module.scss";
import * as hamStyles from "@styles/HamMenu.module.scss";
import * as constellationStyles from "@styles/Constelation.module.scss";

export function gsapOnMenu(
  camera,
  menuPos,
  menuRot,
  isHamOpen,
  rotationUpdateOnMouseMoveHandler,
  // rotationUpdateOnMouseMoveMenuHandler
) {
  // Store the function in a variable
  //   let rotationHandler = rotationUpdateOnMouseMoveHandler;

  const hamMenuButton = document.getElementById("ham-menu-button");
  const stars = document.querySelectorAll(
    `.${constellationStyles.constelationWrapper}>div`
  );

  const landingLinks = document.querySelectorAll(`.${hudStyles.wrapper} a`);

  if (!isHamOpen) {
    const tl = gsap.timeline({
      onStart: () => {
        window?.removeEventListener(
          "mousemove",
          rotationUpdateOnMouseMoveHandler
        );
        hamMenuButton.disabled = true;

        gsap.set(landingLinks, {
          pointerEvents: "none",
        });
      },
      onComplete: () => {
        // window?.addEventListener(
        //   "mousemove",
        //   rotationUpdateOnMouseMoveMenuHandler
        // );
        hamMenuButton.disabled = false;
        const socialLinks = document.querySelectorAll(
          `.${hamStyles.socials} a`
        );
        gsap.set([socialLinks, stars], {
          pointerEvents: "all",
        });
      },
    });

    // window?.removeEventListener("mousemove", rotationUpdateOnMouseMoveHandler);
    // window?.addEventListener("mousemove", (e) => rotationUpdateOnMouseMove(e, menuRot));

    tl.to(
      `.${hudStyles.landingElements}`,
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
          duration: 2,
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
          duration: 2,
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
      )
      .fromTo(
        stars,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
          stagger: {
            amount: 1,
          },
          ease: "power2.inOut",
        },
        ">"
      );
  } else {
    const tl = gsap.timeline({
      onStart: () => {
        // window?.removeEventListener(
        //   "mousemove",
        //   rotationUpdateOnMouseMoveMenuHandler
        // );
        hamMenuButton.disabled = true;
        const socialLinks = document.querySelectorAll(
          `.${hamStyles.socials} a`
        );
        gsap.set(socialLinks, {
          pointerEvents: "none",
        });
      },
      onComplete: () => {
        window?.addEventListener("mousemove", rotationUpdateOnMouseMoveHandler);
        hamMenuButton.disabled = false;

        gsap.set(landingLinks, {
          pointerEvents: "all",
        });
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
        `.${hudStyles.landingElements}`,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      );
  }
}
