import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial } from "lamina";
import * as THREE from "three";
import { TextureLoader } from "three";
import TextureMap from "/images/nebula-v2.jpg";
import { Stars } from "@react-three/drei";

import { useControls } from "leva";

import { useEffect, useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";

const Background = () => {
  const sphereRef = useRef();

  const textureSphereBg = useLoader(TextureLoader, TextureMap);
  textureSphereBg.anisotropy = 16;

  // const {rotation} = useControls("Background", {
  //   rotation: {
  //     value: [1, -1, 0],
  //     step: 0.1,
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //   },
  // });

  return (
    <>
      <Sphere args={[200, 40, 40]} rotation={[2, -1, 0]}>
        <meshBasicMaterial
          attach="material"
          side={THREE.BackSide}
          map={textureSphereBg}
        />
      </Sphere>
    </>
  );
};

export default Background;
