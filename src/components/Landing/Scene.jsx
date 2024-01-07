import {useEffect} from "react";
import { useThree, useFrame } from "@react-three/fiber";

import {useControls} from "leva";

import gsap from "gsap";

export function Scene() {

  const { camera } = useThree();

  camera.lookAt(0, 0, 0);

  const {position, rotation} = useControls("Camera", {
    position: {
      value: [0, 0, 0],
      step: 10,
      min: -1000,
      max: 1000
    },
    rotation: {
      value: [0, 0, 0],
      step: 0.1,
      min: -10,
      max: 10
    }
  })

  useFrame((state, delta) => {
    // console.log(camera.position)
    camera.position.set(...position);
    // camera.rotation.set(...rotation);
  });

  useEffect(() => {
    gsap.set(camera.rotation, {x: 0, y: 0, z: 0})
    gsap.to(camera.rotation, {x: Math.PI/2, y: Math.PI, z: Math.PI/4, duration: 2, delay: 2.5, ease: "power2.inOut"})
  }, [])

  return (
    <>
    </>
  );
}
