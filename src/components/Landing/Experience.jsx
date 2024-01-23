import { OrbitControls, Sphere, PerspectiveCamera } from "@react-three/drei";
import Background from "./Background";
import * as THREE from "three";
import TextureMap from "/images/texture-bg.jpg";
import { Scene } from "./Scene";
import { Stars, useScroll } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { Speed } from "../Speed";
import state from "../state";

function Experience() {
  const scroll = useScroll();
  const lastScroll = useRef(0);

  const cameraRef = useRef();

  useEffect(() => {
    state.camera = cameraRef.current;
  }, []);


  useFrame((_state, delta) => {
    if (cameraRef.current && scroll.offset - lastScroll.current > 0.0005) {
      const { current: camera } = cameraRef;

      const amplitude = -0.5;
      const frequency = 10;

      const newPosition = [
        amplitude * Math.sin(scroll.offset * frequency),
        0,
        scroll.offset * -50,
      ];
      // console.log(newPosition);

      gsap.to(camera.position, {
        x: newPosition[0],
        y: newPosition[1],
        z: newPosition[2],
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });

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
      <Speed />
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
