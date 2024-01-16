import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial } from "lamina";
import * as THREE from "three";
import { TextureLoader } from "three";
import TextureMap from "../../../public/images/nebula-bg.jpg";
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
      <Stars
        radius={15}
        depth={50}
        count={1000}
        factor={4}
        saturation={5}
        fade
        speed={0}
      />
    </>
  );
};

export default Background;
