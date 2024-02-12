import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useHelper, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import ShieldMap from "../../../public/images/ShieldMap.png";
import { useControls } from "leva";
import { easing } from "maath";

import state from "@components/state";

export default function ProceduralPlanet(props) {
  const { nodes, materials } = useGLTF("/models/procedural3.glb");
  materials["Material.001"].side = THREE.FrontSide;

  const alienPlanetRef = useRef();
  const directionalLightRef = useRef(null);
  const ref = useRef();

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

  const [showSphereMap, setShowSphereMap] = useState(false);

  // const handleClick = () => {
  //   setShowSphereMap(true);
  //   setTimeout(() => {
  //     setShowSphereMap(false);
  //   }, 2000);
  // };

  console.log(ref.current)

  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, showSphereMap ? 1.125 : 0.75, 0.25, delta);
  });

  useEffect(() => {
    if (showSphereMap) {
      setTimeout(() => {
        setShowSphereMap(false);
      }, 5000);
    }
  }, [showSphereMap]);
  return (
    <>
      {/* Existing code */}
      <group
        {...props}
        position={[0.75, -1.5, -2]}
        dispose={null}
        ref={alienPlanetRef}
        onClick={(e) => (e.stopPropagation(), setShowSphereMap(!showSphereMap))}
      >
        {/* Existing code */}
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
        {/* Add the sphere layer */}
        {/* {showSphereMap && ( */}
        <mesh
          ref={ref}
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={
            new THREE.MeshBasicMaterial({
              map: new THREE.TextureLoader().load(ShieldMap),
              // transparent: true,
              opacity: 0.95,
            })
          }
          scale={1.084}
        />
      </group>
    </>
  );
}
useGLTF.preload("/models/procedural3.glb");
