import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial } from "lamina";
import * as THREE from "three";
import { TextureLoader } from "three";
import TextureMap from "/images/nebula-v3.jpg";
import { Stars } from "@react-three/drei";

import { useControls } from "leva";

const Background = () => {
  const textureSphereBg = new TextureLoader().load(TextureMap);
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
      <Sphere args={[150, 40, 40]} rotation={[2,-1,0]}>
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
