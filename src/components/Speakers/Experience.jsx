import { OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import Background from "../Landing/Background";
// import { Speed } from "../Speed";
import state from "../state";
import { Spaceship } from "../Models/SpaceShip";
import gsap from "gsap";
import Card from "./Card";

function Experience() {
  const scroll = useScroll();

  const cameraRef = useRef();

  useEffect(() => {
    state.camera = cameraRef.current;
  }, []);

  const radius = useMemo(() => 70, []); // radius of the helix
  const speed = useMemo(() => 7, []); // speed of the helix
  const verticalSpeed = useMemo(() => 100, []); // speed of vertical movement

  useFrame((_state, delta) => {
    if (cameraRef.current) {
      const { current: camera } = cameraRef;

      // Calculate the new position
      const newPosition = [
        radius * Math.cos(scroll.offset * speed),
        -scroll.offset * verticalSpeed,
        radius * Math.sin(scroll.offset * speed),
      ];

      // Animate the camera position
      gsap.to(camera.position, {
        x: newPosition[0],
        y: newPosition[1],
        z: newPosition[2],
        // duration: 0.5,
        ease: "power2.out",
      });

      // Point the camera to the Spaceship
      camera.lookAt(0, camera.position.y - 1, 0);
    }
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <PerspectiveCamera
        ref={cameraRef}
        position={[0, 125, 0]}
        // rotation={[0, Math.PI / 2, 0]}
        // zoom={0.5}
        // fov={50}
        makeDefault
      />
      <directionalLight
        position={[1, 1, -1]}
        intensity={100}
        color={Number("#9AF0F4".replace("#", "0x"))}
      />
      <directionalLight
        position={[1, 1, 1]}
        intensity={100}
        color={Number("#9AF0F4".replace("#", "0x"))}
      />
      <directionalLight
        position={[0, -2, 1]}
        intensity={100}
        color={Number("#9AF0F4".replace("#", "0x"))}
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
      {/* <Card /> */}
      <Spaceship />
    </>
  );
}

export default Experience;
