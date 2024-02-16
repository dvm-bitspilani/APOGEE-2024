import React, { useRef, useEffect } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import { useControls } from "leva";

import state from "@components/state";

export default function ProceduralPlanet(props) {
  const { nodes, materials } = useGLTF("/models/procedural3.glb");
  materials["Material.001"].side = THREE.FrontSide;

  const alienPlanetRef = useRef();
  const directionalLightRef = useRef(null);

  useFrame((state, delta) => {
    alienPlanetRef.current.rotation.y -= delta * 0.1;
    alienPlanetRef.current.rotation.x -= delta * 0.05;
  });

  useEffect(() => {
    state.alienPlanet = alienPlanetRef.current;
  }, []);

  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 2, "green");

  // const { color, intensity, position } = useControls("Alien Planet Light", {
  //     position: {
  //       value: [-3, 2.5, -3.5],
  //       step: 0.1,
  //       label: "Position",
  //     },
  //     color: {
  //       value: "#24dede",
  //       label: "Color",
  //     },
  //     intensity: {
  //         value: 0.5,
  //         step: 0.1,
  //         min: 0,
  //         max: 10,
  //       },
  //   });

  // Create a material for the backside
  const backsideMaterial = new THREE.MeshBasicMaterial({
    color: "black",
    side: THREE.BackSide,
  });

  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        intensity={0.5}
        rotation={[Math.PI, 0, 0]}
        position={[-3, 2.5, -3.5]}
        color={new THREE.Color(Number("0x" + "#24dede".replace("#", "")))}
        target={alienPlanetRef.current}
      />
      <group
        {...props}
        position={[0.75, -1.5, -2]}
        dispose={null}
        ref={alienPlanetRef}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.001"]}
          scale={1.084}
        />
        <mesh
          geometry={nodes.Sphere.geometry}
          material={backsideMaterial}
          scale={-1.084}
        />
      </group>
    </>
  );
}
useGLTF.preload("/models/procedural3.glb");
