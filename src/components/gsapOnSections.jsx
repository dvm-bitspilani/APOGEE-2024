import gsap from "gsap";
import * as hudStyles from "@styles/HUD.module.scss";
import * as contactStyles from "@styles/Contact.module.scss";
import * as aboutStyles from "@styles/About.module.scss";
import state from "./state";

export function gsapOnSection(
  camera,
  contactPos,
  contactRot,
  aboutPos,
  aboutRot,
  targetSection,
  rotationUpdateOnMouseMoveHandler
) {
  const navigationLinks = document.querySelectorAll(
    `.${hudStyles.navigatorWrapper} button`
  );

  const cardContainers = document.querySelectorAll(
    `.${contactStyles.cardContainer}`
  );

  const hamMenuButton = document.getElementById("ham-menu-button");

  if (targetSection === 4) {
    const tl = gsap.timeline({
      onStart: () => {
        window?.removeEventListener(
          "mousemove",
          rotationUpdateOnMouseMoveHandler
        );
        state.activeSection = targetSection;

        state.isMoving = true;

        // disable the navigation buttons
        navigationLinks.forEach((link, index) => {
          link.disabled = true;
        });

        // Disable hame menu button
        hamMenuButton.disabled = true;
      },
      onComplete: () => {
        gsap.set(`.${contactStyles.wrapper}`, {
          autoAlpha: 1,
        });
        state.isMoving = false;

        // enable the navigation buttons
        navigationLinks.forEach((link) => {
          link.disabled = false;
        });

        gsap.fromTo(
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
          }
        );
        // Add back the mousemove event listener for rotation
        // window?.addEventListener("mousemove", rotationUpdateOnMouseMoveHandler);

        // Enable hame menu button
        hamMenuButton.disabled = false;
      },
    });

    tl.to(
      `.${hudStyles.regEventsWrapper}, .${hudStyles.logo}, .${hudStyles.mobileLinks}, .${hudStyles.mobileBottom}, .${aboutStyles.wrapper}, .${aboutStyles.title}, .${aboutStyles.line}, .${aboutStyles.container}, .${aboutStyles.line}, .${aboutStyles.text}, .${aboutStyles.carouselContainer}`,
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
        ""
      )
      .to(
        `.${contactStyles.title}`,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=1"
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
      );
  } else if (targetSection === 1) {
    const tl = gsap.timeline({
      onStart: () => {
        window?.removeEventListener(
          "mousemove",
          rotationUpdateOnMouseMoveHandler
        );
        state.activeSection = targetSection;
        state.isMoving = true;

        // disable the navigation buttons
        navigationLinks.forEach((link, index) => {
          link.disabled = true;
        });

        // disable the navigation buttons
        // navigationLinks.forEach((link, index) => {
        //   if (index !== 4) return;
        //   link.disabled = true;
        // });

        // Disable hame menu button
        hamMenuButton.disabled = true;
      },
      onComplete: () => {
        // enable the navigation buttons
        // navigationLinks.forEach((link) => {
        //   if (link.innerText !== "HOME") return;
        //   link.disabled = false;
        // });
        // enable the navigation buttons
        navigationLinks.forEach((link) => {
          link.disabled = false;
        });

        // Enable hame menu button
        hamMenuButton.disabled = false;
        state.isMoving = false;
      },
    });

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
        `.${hudStyles.logo}, .${hudStyles.mobileLinks}, .${hudStyles.mobileBottom}, .${contactStyles.wrapper}, .${contactStyles.title}`,
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
          x: aboutPos[0],
          y: aboutPos[1],
          z: aboutPos[2],
          duration: 2,
          ease: "power2.inOut",
        },
        ""
      )
      .to(
        `.${aboutStyles.title}`,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        camera.rotation,
        {
          x: aboutRot[0],
          y: aboutRot[1],
          z: aboutRot[2],
          duration: 2,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        `.${aboutStyles.wrapper}`,
        {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(
        `.${aboutStyles.line}`,
        {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        ">"
      )
      .to(
        `.${aboutStyles.container}`,
        {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        ">"
      )
      .to(
        `.${aboutStyles.text}`,
        {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        ">"
      )
      .to(
        `.${aboutStyles.carouselContainer}`,
        {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        ">"
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
        navigationLinks.forEach((link) => {
          link.disabled = true;
        });

        // Disable hame menu button
        hamMenuButton.disabled = true;
      },
      onComplete: () => {
        // Add back the mousemove event listener for rotation
        window?.addEventListener("mousemove", rotationUpdateOnMouseMoveHandler);

        // enable the navigation buttons
        navigationLinks.forEach((link) => {
          link.disabled = false;
        });

        // Enable hame menu button
        hamMenuButton.disabled = false;
      },
    });

    tl.to(
      `.${contactStyles.wrapper}, .${contactStyles.title}, .${aboutStyles.wrapper}, .${aboutStyles.title}, .${aboutStyles.line}, .${aboutStyles.container}, .${aboutStyles.line}, .${aboutStyles.text}, .${aboutStyles.carouselContainer}`,
      {
        autoAlpha: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      ""
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
        ""
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
        `.${hudStyles.regEventsWrapper}, .${hudStyles.logo}, .${hudStyles.mobileLinks}, .${hudStyles.mobileBottom}`,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=1"
      );
  }
}
