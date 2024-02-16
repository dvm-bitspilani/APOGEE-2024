import { Preload, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NoToneMapping, LinearEncoding } from "three";
import Decors from "./Decors.jsx";
import Loader from "./Loaders.jsx";
import "../../../styles/events/experience.css";

export default function Experience({
  midwifery,
  scene3D,
  boat,
  bike,
  github,
  mail,
  twitter,
  linkedin,
}) {
  return (
    <>
      <div id="smooth-wrapper">
        <div className="container" id="smooth-content"></div>
      </div>
      <Canvas
        gl={{
          toneMapping: NoToneMapping,
          outputEncoding: LinearEncoding,
          powerPreference: "high-performance",
        }}
      >
        <Environment files="./textures/envMap.hdr" />

        <Decors
          midwifery={midwifery}
          scene3D={scene3D}
          boat={boat}
          bike={bike}
          github={github}
          mail={mail}
          twitter={twitter}
          linkedin={linkedin}
        />

        <ambientLight color={0xffeedd} intensity={6} />

        <Preload all />
      </Canvas>

      <Loader />
    </>
  );
}
