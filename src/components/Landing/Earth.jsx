import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import earthImg from "/images/earth.jpg";
import * as THREE from "three";
import { useControls } from "leva";
import { Float } from "@react-three/drei";

export default function Earth() {
  const earthRef = useRef();
  const [earthTexture] = useLoader(THREE.TextureLoader, [earthImg]);

  // const {position, rotation} = useControls('Earth', {
  //     position: {
  //         value: [2,-1,-2],
  //         step: 1,
  //         min: -10,
  //         max: 10
  //     },
  //     rotation: {
  //         value: [1, 1, 1],
  //         step: 0.1,
  //         min: -Math.PI,
  //         max: Math.PI
  //     }
  // })

  useFrame(() => {
    earthRef.current.rotation.y -= 0.0005;
  });

  return (
    <Float
      speed={0.5} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[-1, 0.4]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <mesh
        ref={earthRef}
        position={[3, -1.5, -6]}
        rotation={[0, 0, 0]}
        scale={0.45}
      >
        
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial map={earthTexture} roughness={1} fog={false} />
      </mesh>
    </Float>
  );
}
