import { useCallback, useEffect, useMemo, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

import { useControls } from "leva";

// Styles
// import * as hudStyles from "@styles/HUD.module.scss";

// import Earth from "./Earth";
// import AlienPlanet from "../Models/AlienPlanet";
// import { AlienPlanetGLB } from "../Models/AlienPlanet";
// import AlienPlanetGLTF from "../Models/AlienPlanetGLTF";
import ProceduralPlanet from "../Models/ProceduralPlanet";

import gsap from "gsap/gsap-core";

import { gsapOnRender } from "./gsapOnRender";
import { gsapOnMenu } from "./gsapOnMenu";
import { gsapOnSection } from "@components/gsapOnSections";

import state from "../state";
import { useSnapshot } from "valtio";

import { handleAnimation } from "./handleAnimation";

// import { useHelper } from "@react-three/drei";
// import { DirectionalLightHelper } from "three";

import Explosions from "../Models/Explosion";
import Asteroids from "../Models/Asteroids";

export function Scene() {
  const { camera } = useThree();

  const menuPos = useMemo(() => [-2, -1.5, -0], []);
  const menuRot = useMemo(() => [0, -1.9, 0], []);

  const contactPos = useMemo(() => [0, 0, -60], []);
  const contactRot = useMemo(() => [0, 1.5, 0], []);

  const aboutPos = useMemo(() => [0, 0, -60], []);
  const aboutRot = useMemo(() => [0, -1.5, 0], []);

  // const { position, rotation } = useControls("Camera", {
  //   position: {
  //     value: [...menuPos],
  //     step: 0.1,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotation: {
  //     value: [...menuRot],
  //     step: 0.1,
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //   },
  // });

  useFrame(() => {
    // camera.position.set(...position);
    // camera.rotation.set(...rotation);
    // console.log(camera.position);
  });

  const rotationUpdateOnMouseMove = useCallback(
    (e, cameraRot) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const center = {
        x: innerWidth / 2,
        y: innerHeight / 2,
      };
      const maxRotate = Math.PI / 16;
      // const { innerWidth, innerHeight } = window;

      let x, y, z;

      if (cameraRot[1] === 0) {
        y = (center.x - clientX) / innerWidth;
        x = (center.y - clientY) / innerHeight;
        z = 0;
      } else {
        y = (center.x - clientX) / innerWidth;
        x = (center.y - clientY) / innerHeight;
        z = 0;
      }

      gsap.to(camera.rotation, {
        x: cameraRot[0] + x * maxRotate,
        y: cameraRot[1] + y * maxRotate,
        z: cameraRot[2] + z * maxRotate,
        ease: "power2.out",
      });
    },
    [camera]
  );

  const snap = useSnapshot(state);

  const rotationUpdateOnMouseMoveHandler = useCallback(
    (e) => rotationUpdateOnMouseMove(e, [0, 0, 0]),
    [rotationUpdateOnMouseMove]
  );

  // const rotationUpdateOnMouseMoveMenuHandler = useCallback(
  //   (e) => rotationUpdateOnMouseMove(e, menuRot),
  //   [rotationUpdateOnMouseMove, menuRot]
  // );

  useEffect(() => {
    gsapOnRender(camera, rotationUpdateOnMouseMoveHandler);

    gsap.to(camera.rotation, {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      delay: 2,
      ease: "power2.inOut",
    });
  }, [camera]);

  useEffect(() => {
    const hamMenuButton = document.querySelector("#ham-menu-button");
    const gsapOnMenuHandler = () =>
      gsapOnMenu(
        camera,
        menuPos,
        menuRot,
        state.isHamOpen,
        rotationUpdateOnMouseMoveHandler
        // rotationUpdateOnMouseMoveMenuHandler
      );

    if (snap.targetSection !== 0) return;
    hamMenuButton.addEventListener("click", gsapOnMenuHandler);

    return () => {
      hamMenuButton.removeEventListener("click", gsapOnMenuHandler);
    };
  }, [
    snap.targetSection,
    snap.isHamOpen,
    camera,
    rotationUpdateOnMouseMoveHandler,
    // rotationUpdateOnMouseMoveMenuHandler,
    menuPos,
    menuRot,
  ]);

  useEffect(() => {
    // In order to avoid running this on render and also fallback
    if (state.activeSection === snap.targetSection) return;

    // This is the button that will take us back to the home section
    const hamMenuButton = document.querySelector("#ham-menu-button");

    // This is the function that will handle the gsap animation and also to remove the event listener when the component is unmounted
    const gsapOnSectionHandler = () =>
      gsapOnSection(
        camera,
        contactPos,
        contactRot,
        aboutPos,
        aboutRot,
        snap.targetSection,
        rotationUpdateOnMouseMoveHandler
      );
    gsapOnSectionHandler();

    // This is the event listener that will trigger the gsap animation
    const clickHome = () => {
      const homeButton = document.querySelector("#active-section-0");
      homeButton.click();
    };

    // If we are on some section other than home, then we will add the event listener to go back to home
    if (snap.targetSection !== 0) {
      hamMenuButton.addEventListener("click", clickHome);
    }

    // This is the function that will handle the random text animation on menu button text
    handleAnimation(state);

    return () => {
      // This is the cleanup function that will remove the event listener when the component is unmounted
      hamMenuButton.removeEventListener("click", clickHome);
    };
  }, [
    snap.targetSection,
    camera,
    rotationUpdateOnMouseMoveHandler,
    contactPos,
    contactRot,
  ]);

  // const { lightPos, lightColor, intensity } = useControls("Light on planet from menu open", {
  //   lightPos: {
  //     value: [4, -1, 5],
  //     step: 1,
  //     min: -1000,
  //     max: 1000,
  //   },
  //   lightColor: {
  //     value: "#be3d2d",
  //   },
  //   intensity: {
  //     value: 0,
  //     step: 0.1,
  //     min: 0,
  //     max: 10,
  //   },
  // });

  const lightRef = useRef();
  // useHelper(lightRef, DirectionalLightHelper, 2, "hotpink");

  useEffect(() => {
    // lightRef.current.target = state.alienPlanet;
    // console.log(state.alienPlanet);
  }, [snap.alienPlanet]);

  return (
    <>
      {/* <axesHelper args={[5]} /> */}
      {/* <Earth /> */}
      {/* <AlienPlanet /> */}
      {/* <AlienPlanetGLB /> */}
      {/* <AlienPlanetGLTF /> */}
      <ProceduralPlanet />
      <directionalLight
        ref={lightRef}
        position={[1, -2, 2]}
        intensity={6}
        color={Number("#2dc79f".replace("#", "0x"))}
      />
      <Asteroids />
      {/* <Explosions /> */}
    </>
  );
}
