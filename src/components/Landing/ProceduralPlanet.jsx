import React, { useRef, useEffect } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import { useControls } from "leva";

import state from "@components/state";

export default function ProceduralPlanet(props) {
    const { nodes, materials } = useGLTF("/models/procedural2.glb");
    const alienPlanetRef = useRef();
    const directionalLightRef = useRef(null);
  
    useFrame((state, delta) => {
      alienPlanetRef.current.rotation.y -= 0.0005;
    });

    useEffect(() => {
        state.alienPlanet = alienPlanetRef.current;
      }, []);

    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 2, "green");
  
    const { color, intensity, position } = useControls("Alien Planet Light", {
        position: {
          value: [-3, 2.5, -3.5],
          step: 0.1,
          label: "Position",
        },
        color: {
          value: "#c0cb9c",
          label: "Color",
        },
        intensity: {
            value: 1.3,
            step: 0.1,
            min: 0,
            max: 10,
          },
      });

    return (
      <>
        <directionalLight
        ref={directionalLightRef}
          intensity={intensity}
          rotation={[Math.PI, 0, 0]}
          position={position}
          color={new THREE.Color(Number("0x" + color.replace("#", "")))}
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
            material={materials["Material.002"]}
            scale={1.084}
          />
        </group>
      </>
    );
  }
  useGLTF.preload("/models/procedural2.glb");