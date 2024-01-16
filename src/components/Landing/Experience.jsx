import { OrbitControls, Sphere, PerspectiveCamera } from "@react-three/drei";
import Background from "./Background";
import * as THREE from "three";
import TextureMap from "/images/texture-bg.jpg";
import { Scene } from "./Scene";
import { Stars } from "@react-three/drei";

function Experience() {
  return (
    <>
      {/* <OrbitControls /> */}
      {/* <PerspectiveCamera position={[0, 0, 0]} rotation={[0, Math.PI/2, 0]} zoom={0.5} fov={50} makeDefault /> */}
      {/* <Sphere scale={[100, 100, 100]}>
        <meshBasicMaterial
          side={THREE.BackSide} // Render the material on the back side of the geometry (inside)
        >
          <texture map={new THREE.TextureLoader().load(TextureMap)} />{" "}
        </meshBasicMaterial>{" "}
      </Sphere> */}
      {/* <Background /> */}
      <Stars
        radius={15}
        depth={50}
        count={3000}
        factor={4}
        saturation={5}
        fade
        speed={0}
      />
      <Scene />
    </>
  );
}

export default Experience;
