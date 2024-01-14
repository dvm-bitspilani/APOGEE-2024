import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial } from "lamina";
import * as THREE from "three";
import { TextureLoader } from 'three';
import TextureMap from "../../../public/images/texture-bg.jpg";
const Background = () => {
  const textureSphereBg = new TextureLoader().load(TextureMap);
  textureSphereBg.anisotropy = 16;

  return (
    <Sphere args={[150, 40, 40]}>
      <meshBasicMaterial
        attach="material"
        side={THREE.BackSide}
        map={textureSphereBg}
      />
    </Sphere>
  );
};

export default Background;
