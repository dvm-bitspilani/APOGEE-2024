import { useEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";

import { useControls } from "leva";

// Styles
import { gsapOnRender } from "./gsapOnRender";
import Earth from "./Earth";
import AlienPlanet from "./AlienPlanet";
import { AlienPlanetGLB } from "./AlienPlanet";
import AlienPlanetGLTF from "./AlienPlanetGLTF";

import gsap from "gsap/gsap-core";

export function Scene() {
  const { camera } = useThree();

  const { position } = useControls("Camera", {
    position: {
      value: [0, 0, 0],
      step: 10,
      min: -1000,
      max: 1000,
    },
    rotation: {
      value: [0, 0, 0],
      step: 0.1,
      min: -10,
      max: 10,
    },
  });

  function rotationUpdateOnMouseMove(e) {
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

    gsap.to(camera.rotation, {
      x: x * maxRotate,
      y: y * maxRotate,
      ease: "power2.out",
    });
  }

  // const snap = useSnapshot(state);

  useEffect(() => {
    gsapOnRender(camera, rotationUpdateOnMouseMove);

    let mouseTimer;

    function startMouseDetection() {
      document.addEventListener("mousemove", handleMouseMove);
    }

    function handleMouseMove() {
      // Clear the previous timer if it exists
      clearTimeout(mouseTimer);

      // Set a new timer for 5 seconds
      mouseTimer = setTimeout(function () {
        console.log("Mouse stopped moving for 5 seconds");
        // Add your code here to handle the mouse being stopped for 5 seconds
      }, 5000);
    }

    // Start mouse detection when the script is loaded
    startMouseDetection();

    return () => {
      window?.removeEventListener("mousemove", rotationUpdateOnMouseMove);
    };
  }, [camera,  ]);

  return (
    <>
      <axesHelper args={[5]} />
      {/* <Earth /> */}
      {/* <AlienPlanet /> */}
      {/* <AlienPlanetGLB /> */}
      <AlienPlanetGLTF />
    </>
  );
}
