import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Background from "./Background";
import { Scene } from "./Scene";
import { Stars } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Speed } from "../Speed";
import state from "../state";

function Experience() {

  const cameraRef = useRef();

  useEffect(() => {
    state.camera = cameraRef.current;
  }, []);

  return (
    <>
      {/* <OrbitControls /> */}
      <PerspectiveCamera
        ref={cameraRef}
        position={[0, 0, 0]}
        zoom={0.7}
        fov={40}
        makeDefault
      />
      <Background />
      {/* <Speed /> */}
      <Stars
        radius={15}
        depth={75}
        count={5000}
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
