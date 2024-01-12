import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

import { useControls } from "leva";

// Styles
import { gsapOnRender } from "./gsapOnRender";
import Earth from "./Earth";

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

  useFrame((state, delta) => {
    camera.position.set(...position);
  });

  function rotationUpdateOnMouseMove(e) {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const center = {
      x: innerWidth / 2,
      y: innerHeight / 2,
    };
    const maxRotate = Math.PI / 8;
    // const { innerWidth, innerHeight } = window;

    const y = (center.x - clientX) / innerWidth;
    const x = (center.y - clientY) / innerHeight;

    camera.rotation.x = maxRotate * x;
    camera.rotation.y = maxRotate * y;
  }

  // const snap = useSnapshot(state);

  useEffect(() => {
    setInterval(() => {
      // console.log(state.count);
    }, 1000);
  }, []);

  useEffect(() => {
    gsapOnRender(camera, rotationUpdateOnMouseMove);

    return () => {
      window?.removeEventListener("mousemove", rotationUpdateOnMouseMove);
    };

  }, [camera]);

  return <>
    <axesHelper args={[5]} />
    <Earth />
  </>;
}
