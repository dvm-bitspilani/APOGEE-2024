import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial } from "lamina";
import * as THREE from "three";
import { TextureLoader } from "three";
import TextureMap from "/images/nebula.jpg";
import { Stars } from "@react-three/drei";

const Background = () => {
  const textureSphereBg = new TextureLoader().load(TextureMap);
  textureSphereBg.anisotropy = 16;

  return (
    <>
      <Sphere args={[150, 40, 40]} rotateX={180}>
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
