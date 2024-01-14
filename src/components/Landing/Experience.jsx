import { OrbitControls, Sphere, PerspectiveCamera } from "@react-three/drei";
import Background from "./Background";
import * as THREE from "three";
import TextureMap from "../../../public/images/texture-bg.jpg";

function Experience() {
  return (
    <>
      <OrbitControls />
      {/* <PerspectiveCamera
              position={[-10, -10, 5]}
              fov={50}
              makeDefault
            /> */}
      {/* <Sphere scale={[100, 100, 100]}>
        <meshBasicMaterial
          side={THREE.BackSide} // Render the material on the back side of the geometry (inside)
        >
          <texture map={new THREE.TextureLoader().load(TextureMap)} />{" "}
        </meshBasicMaterial>{" "}
      </Sphere> */}
      <Background />
    </>
  );
}

export default Experience;
