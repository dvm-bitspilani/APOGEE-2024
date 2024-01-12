import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

import { useControls } from "leva";

import gsap from "gsap";

import state from "@components/state";
// import { useSnapshot, subscribe } from "valtio";

// Styles
import * as navigatorStyles from "@styles/HUD.module.scss";


export function Scene() {
  const { camera } = useThree();
  camera.lookAt(0, 0, 0);
  const { position, rotation } = useControls("Camera", {
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

  useFrame((state, delta) => {
    camera.position.set(...position);
  });

  // const snap = useSnapshot(state);

  useEffect(() => {
    setInterval(() => {
      console.log(state.count);
    }, 1000);
  }, []);

  useEffect(() => {
    gsap.set("#landing-hud-overlay", { opacity: 0 });
    gsap.set(camera.rotation, { x: 0, y: 0, z: 0 });

    const tl = gsap.timeline();

    tl.to(camera.rotation, {
      x: Math.PI / 2,
      y: Math.PI,
      z: Math.PI / 4,
      duration: 2,
      delay: 2.5,
      ease: "power2.inOut",
    })
    .to(
      '#landing-hud-overlay',
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      ">"
    )
    .fromTo(
      `.${navigatorStyles.navigatorLinks} button`,
      {
        x: -100,
        opacity: 0,
      }, 
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.in",
        stagger: 0.2,
      },
      "-=1"
    )
  }, [camera.rotation]);

  return <></>;
}
