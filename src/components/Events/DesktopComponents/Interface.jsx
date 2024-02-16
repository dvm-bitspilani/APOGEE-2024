import { useEffect } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import "../../../styles/events/interface.css";

export default function Interface() {
  let container = document.querySelector(".container");
  let startInterfaceIsOpened = true;

  useEffect(() => {
    const handleScroll = () =>
      startInterfaceIsOpened ? disapStartInterface() : 0;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseOver = () =>
    (document.querySelector("body").style.cursor =
      `url('./cursors/cursor.png') , auto`);
  const handleMouseLeave = () =>
    (document.querySelector("body").style.cursor =
      `url('./cursors/cursor1.png') , auto`);

  const disapStartInterface = () => {
    gsap.to(".startInterfaceContainer", {
      onStart: () => (startInterfaceIsOpened = false),
      opacity: 0,
      zIndex: -1,
      duration: 1.5,
    });
  };

  const goToContact = () => {
    startInterfaceIsOpened ? disapStartInterface() : 0;
    let scroll = ScrollTrigger.positionInViewport(".container", "top");

    if (scroll > -18) {
      let tl = new gsap.timeline();
      tl.to(".loaderContainer", { opacity: 1, duration: 1, zIndex: 12 });
      tl.to(".loaderContainer img", { opacity: 1, duration: 1.5 }, 1);
      tl.to(window, { scrollTo: container.scrollHeight * 1, duration: 1 }, 1);
      tl.to(".contact", { opacity: 1, duration: 0.8 }, 1.5);
      tl.to(".loaderContainer img", { opacity: 0, duration: 1 }, 3);
      tl.to(".contact", { opacity: 0, duration: 0.8 }, 3.5);
      tl.to(".loaderContainer", { opacity: 0, zIndex: -1, duration: 1.5 }, 4);
      tl.to(".contact", { opacity: 0 });
    } else {
      gsap.to(window, { scrollTo: container.scrollHeight * 1, duration: 1 });
    }
  };

  const goToProjects = () => {
    startInterfaceIsOpened ? disapStartInterface() : 0;
    let scroll = ScrollTrigger.positionInViewport(".container", "top");
    if (scroll <= -7 && scroll > -12.9) {
      gsap.to(window, { scrollTo: container.scrollHeight * 0.49, duration: 1 });
    } else if (scroll > -7 || scroll <= -24.5) {
      let tl = new gsap.timeline();
      tl.to(".loaderContainer", { opacity: 1, duration: 1, zIndex: 12 });
      tl.to(".loaderContainer img", { opacity: 1, duration: 1.5 }, 1);
      tl.to(
        window,
        { scrollTo: container.scrollHeight * 0.49, duration: 1 },
        1,
      );
      tl.to(".projects", { opacity: 1, duration: 0.8 }, 1.5);
      tl.to(".loaderContainer img", { opacity: 0, duration: 1 }, 3);
      tl.to(".projects", { opacity: 0, duration: 0.8 }, 3.5);
      tl.to(".loaderContainer", { opacity: 0, zIndex: -1, duration: 1.5 }, 4);
      tl.to(".projects", { opacity: 0 });
    }
  };

  const goToHome = () => {
    startInterfaceIsOpened ? disapStartInterface() : 0;
    let scroll = ScrollTrigger.positionInViewport(".container", "top");

    if (scroll < -5) {
      let tl = new gsap.timeline();
      tl.to(".loaderContainer", { opacity: 1, duration: 1, zIndex: 12 });
      tl.to(".loaderContainer img", { opacity: 1, duration: 1.5 }, 1);
      tl.to(window, { scrollTo: 0, duration: 1 }, 1);
      tl.to(".home", { opacity: 1, duration: 0.8 }, 1.5);
      tl.to(".loaderContainer img", { opacity: 0, duration: 1 }, 3);
      tl.to(".home", { opacity: 0, duration: 0.8 }, 3.5);
      tl.to(".loaderContainer", { opacity: 0, zIndex: -1, duration: 1.5 }, 4);
      tl.to(".home", { opacity: 0 });
    } else {
      gsap.to(window, { scrollTo: 0, duration: 1 });
    }
  };

  const goToAbout = () => {
    startInterfaceIsOpened ? disapStartInterface() : 0;
    let scroll = ScrollTrigger.positionInViewport(".container", "top");
    if (scroll < -4 && scroll > -9) {
      gsap.to(window, { scrollTo: container.scrollHeight * 0.24, duration: 1 });
    } else {
      let tl = new gsap.timeline();
      tl.to(".loaderContainer", { opacity: 1, duration: 1, zIndex: 12 });
      tl.to(".loaderContainer img", { opacity: 1, duration: 1.5 }, 1);
      tl.to(
        window,
        { scrollTo: container.scrollHeight * 0.24, duration: 1 },
        1,
      );
      tl.to(".about", { opacity: 1, duration: 0.8 }, 1.5);
      tl.to(".loaderContainer img", { opacity: 0, duration: 1 }, 3);
      tl.to(".about", { opacity: 0, duration: 0.8 }, 3.5);
      tl.to(".loaderContainer", { opacity: 0, zIndex: -1, duration: 1.5 }, 4);
      tl.to(".about", { opacity: 0 });
    }
  };

  return (
    <>
      <img
        id="mainInterfaceComponent"
        src="./textures/componentInterface.png"
        alt="mainComponentInterface"
      />
      <div className="menuContainer">
        <span
          onClick={goToHome}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </span>
        <span
          onClick={goToAbout}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          About
        </span>
        <span
          onClick={goToProjects}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          Projects
        </span>
        <span
          onClick={goToContact}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          Contact
        </span>
      </div>
      <div className="startInterfaceContainer">
        <img
          id="startComponentInterface"
          src="./textures/startComponentInterface.png"
          alt="startComponentInterface"
        />
        <img id="robotImg" src="./textures/robot.png" alt="robot" />
        <h3>Welcome aboard</h3>
        <p>
          My creator asked me to guide you through the lab. You can scroll to
          start the visit or use the menu to go to the desired section
        </p>
        <h4
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onClick={disapStartInterface}
        >
          Ok,thanks
        </h4>
      </div>
    </>
  );
}
