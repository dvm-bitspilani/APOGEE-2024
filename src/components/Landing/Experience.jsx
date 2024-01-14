import { OrbitControls, Sphere } from "@react-three/drei";
import Background from "./Background";
import * as THREE from "three";
import TextureMap from "../../../public/images/texture-bg.jpg";

function Experience() {
  return (
    <>
      <OrbitControls />
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
