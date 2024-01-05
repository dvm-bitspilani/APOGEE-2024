import React from "react";
import { useThree, useFrame } from "@react-three/fiber";

export function Scene() {

  const { camera } = useThree();

  camera.lookAt(0, 0, 0);

  useFrame((state, delta) => {
    // console.log(camera.position)
  });

  return (
    <>
    </>
  );
}
