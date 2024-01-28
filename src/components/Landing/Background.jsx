import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial } from "lamina";
import * as THREE from "three";
import { TextureLoader } from "three";
import TextureMap from "/images/nebula-v2.jpg";
import { Stars } from "@react-three/drei";

import { useControls } from "leva";

import { useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";

const Background = () => {
  
  const textureSphereBg = useLoader(TextureLoader, TextureMap);
  textureSphereBg.anisotropy = 16;

  // const [textureSphereBg, setTextureSphereBg] = useState(null);

  // useEffect(() => {
  //   const loader = new THREE.TextureLoader().load(TextureMap);
  //   // loader.anisotropy = 16;
  //   setTextureSphereBg(loader);
  //   }, []);

  const {rotation} = useControls("Background", {
    rotation: {
      value: [1, -1, 0],
      step: 0.1,
      min: -Math.PI * 2,
      max: Math.PI * 2,
    },
  });

  return (
    <>
      <Sphere args={[150, 40, 40]} rotation={rotation}>
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
