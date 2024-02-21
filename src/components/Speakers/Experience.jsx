import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import Background from "../Landing/Background";
// import { Speed } from "../Speed";
import state from "../state";
import { Spaceship } from "../Models/SpaceShip"; 

function Experience() {
  const cameraRef = useRef();

  useEffect(() => {
    state.camera = cameraRef.current;
  }, []);

  return (
    <>
      <OrbitControls />
      <PerspectiveCamera
        ref={cameraRef}
        position={[0, 0, 0]}
        zoom={0.7}
        fov={40}
        // makeDefault
      />
      <Background />
      {/* <Speed /> */}
      <Stars
        radius={15}
        depth={75}
        count={500}
        factor={4}
        saturation={5}
        fade
        speed={0}
      />
         <Spaceship />
    </>
  );
}

export default Experience;
