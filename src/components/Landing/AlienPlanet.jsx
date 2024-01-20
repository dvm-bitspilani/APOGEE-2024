import { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useControls } from "leva";

import { Float, useHelper } from "@react-three/drei";

import alienImg from "/models/alien_planet/textures/Planet_baseColor.png";
import alienRoughnessImg from "/models/alien_planet/textures/Planet_metallicRoughness.png";

import gsap from "gsap/gsap-core";

export default function AlienPlanet() {
  const planetRef = useRef();
  const hemisphereLightRef = useRef(null);
  const directionalLightRef = useRef(null);

  useHelper(hemisphereLightRef, THREE.HemisphereLightHelper, 2, "red");
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 2, "green");

  const [alienTexture, alienRoughnessTexture] = useLoader(THREE.TextureLoader, [
    alienImg,
    alienRoughnessImg,
  ]);

  useFrame(() => {
    planetRef.current.rotation.y -= 0.0005;
  });

  return (
    <Float
      speed={0.5} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[-1, 0.4]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <group>
        {/* <hemisphereLight skyColor={new THREE.Color(0x226ea3)} groundColor={new THREE.Color(0x226ea3)} intensity={1} position={[3,-1.5,-6]} ref={hemisphereLightRef}/> */}
        <directionalLight
          ref={directionalLightRef}
          intensity={4}
          rotation={[Math.PI, 0, 0]}
          position={[3, -1.5, -6]}
          color={new THREE.Color(0x226ea3)}
        />
        <mesh
          ref={planetRef}
          position={[3, -1.5, -6]}
          rotation={[0, 0, 0]}
          scale={0.45}
        >
          <sphereGeometry args={[5, 64, 64]} />
          <meshStandardMaterial
            map={alienTexture}
            roughness={1}
            fog={true}
            roughnessMap={alienRoughnessTexture}
          />
        </mesh>
      </group>
    </Float>
  );
}

export function AlienPlanetGLB() {
  const alienPlanet = useLoader(
    GLTFLoader,
    "/models/alien_planet_1k.glb",
    useLoader.preload(GLTFLoader, "/models/alien_planet.glb"),
    (progress) => {
      console.log((progress.loaded / progress.total) * 100 + "% loaded");
    }
  );

  let alienPlanetMaterial;

  if (alienPlanet) {
    alienPlanet.traverse((child) => {
      if (child.isMesh) {
        alienPlanetMaterial = child.material;
      }
    });
  }

  useEffect(() => {
    if (alienPlanetMaterial) {
      alienPlanetMaterial.transparent = true;
      alienPlanetMaterial.opacity = 0;

      gsap.to(alienPlanetMaterial, {
        opacity: 1,
        duration: 2, // Duration of the fade-in in seconds
        ease: 'power2.inOut',
      });
    }
  }, [alienPlanetMaterial]);

  const alienPlanetRef = useRef();
  const directionalLightRef = useRef(null);

  // useHelper(hemisphereLightRef, THREE.HemisphereLightHelper, 2, "red");
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 2, "green");

  // const { intensity, rotation, position } = useControls(
  //   "Alien Planet Directional Light",
  //   {
  //     intensity: {
  //       value: 4,
  //       step: 0.1,
  //       min: 0,
  //       max: 10,
  //     },
  //     rotation: {
  //       value: [Math.PI, 0, 0],
  //       step: 0.1,
  //       min: -Math.PI,
  //       max: Math.PI,
  //     },
  //     position: {
  //       value: [-2, 2, -4],
  //       // step: 1,
  //       // min: -10,
  //       // max: 10,
  //     },
  //   }
  // );

  useFrame(() => {
    alienPlanetRef.current.rotation.y -= 0.0005;
  });

  return (
    <>
      {/* <Float
        speed={0.35} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.4, 0]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      > */}
        <group>
          {/* <hemisphereLight skyColor={new THREE.Color(0x226ea3)} groundColor={new THREE.Color(0x226ea3)} intensity={1} position={[3,-1.5,-6]} ref={hemisphereLightRef}/> */}
          <directionalLight
            ref={directionalLightRef}
            intensity={4}
            rotation={[Math.PI, 0, 0]}
            position={[-50, 50, -50]}
            color={new THREE.Color(0xffffff)}
          />
          <primitive
            ref={alienPlanetRef}
            position={[50, -75, -100]}
            rotation={[0, 0, 0]}
            scale={75}
            object={alienPlanet.scene}
          />
        </group>
      {/* </Float> */}
    </>
  );
}
