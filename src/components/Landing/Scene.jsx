import { useEffect, useMemo, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";

import { useControls } from "leva";

// Styles
// import * as hudStyles from "@styles/HUD.module.scss";

import { gsapOnRender } from "./gsapOnRender";
import Earth from "./Earth";
import AlienPlanet from "./AlienPlanet";
import { AlienPlanetGLB } from "./AlienPlanet";
import AlienPlanetGLTF from "./AlienPlanetGLTF";

import gsap from "gsap/gsap-core";
import { gsapOnMenu } from "./gsapOnMenu";

import state from "../state";
import { useSnapshot } from "valtio";

export function Scene() {
  const { camera } = useThree();

  const menuPos = [-1, -1.5, -0.5];
  const menuRot = [0, -1.9, 0];

  // const { position, rotation } = useControls("Camera", {
  //   position: {
  //     value: [0, 0, 0],
  //     step: 10,
  //     min: -1000,
  //     max: 1000,
  //   },
  //   rotation: {
  //     value: [0, 0, 0],
  //     step: 0.1,
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //   },
  // });

  useFrame(() => {
    // camera.position.set(...position);
    // camera.rotation.set(...rotation);
    // console.log(camera.rotation);
  });

  function rotationUpdateOnMouseMove(e, cameraPos) {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const center = {
      x: innerWidth / 2,
      y: innerHeight / 2,
    };
    const maxRotate = Math.PI / 16;
    // const { innerWidth, innerHeight } = window;

    const y = (center.x - clientX) / innerWidth;
    const x = (center.y - clientY) / innerHeight;

    // console.log(cameraPos);

    gsap.to(camera.rotation, {
      x: cameraPos[0] + x * maxRotate,
      y: cameraPos[1] + y * maxRotate,
      ease: "power2.out",
    });
  }

  const snap = useSnapshot(state);

  const rotationUpdateOnMouseMoveHandler = (e) =>
    rotationUpdateOnMouseMove(e, [0, 0, 0]) ;
  const rotationUpdateOnMouseMoveHandler2 = (e) =>
    rotationUpdateOnMouseMove(e, menuRot);

  useEffect(() => {
    gsapOnRender(camera, rotationUpdateOnMouseMoveHandler);

    console.log("hello"); 

    return () => {
      window?.removeEventListener(
        "mousemove",
        rotationUpdateOnMouseMoveHandler
      );
    };
  }, []);

  const hamMenuButton = document.querySelector("#ham-menu-button");

  const gsapOnMenuHandler = () => gsapOnMenu(
    camera,
    menuPos,
    menuRot,
    state.isHamOpen,
    rotationUpdateOnMouseMoveHandler
  );

  // console.log("hello");

  hamMenuButton.addEventListener("click", gsapOnMenuHandler);

  useEffect(() => {

    return () => {
      window?.removeEventListener(
        "mousemove",
        rotationUpdateOnMouseMoveHandler2
      );
    };
  }, [snap.isHamOpen]);

  return (
    <>
      {/* <axesHelper args={[5]} /> */}
      {/* <Earth /> */}
      {/* <AlienPlanet /> */}
      {/* <AlienPlanetGLB /> */}
      <AlienPlanetGLTF />
    </>
  );
}
