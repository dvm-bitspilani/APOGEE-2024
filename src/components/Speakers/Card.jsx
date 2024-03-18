import React, { useRef, useEffect, Suspense } from "react";
import { MeshTransmissionMaterial } from "./MeshTransmissionMaterial";
import { useVideoTexture } from "@react-three/drei";
import { Text } from "@react-three/drei";
import * as THREE from "three";

export default function Card(props) {
  const cube1 = useRef(null);
  const texture = useVideoTexture(props.video);

  useEffect(() => {
    if (cube1.current) {
      const material = new MeshTransmissionMaterial(10);
      material.clearcoat = 1;
      material.clearcoatRoughness = 0;
      material.transmission = 1.025;
      material.chromaticAberration = 1;
      material.anisotrophicBlur = 0.01;
      material.roughness = 0;
      material.thickness = 4.5;
      material.ior = 0.5;
      material.distortion = 0.1;
      material.distortionScale = 0.2;
      material.temporalDistortion = 0.2;
      material.map = texture;
      material.transparent = true;
      material.opacity = 0.95;
      // material.color = new THREE.Color(0x9AF0F4);
      cube1.current.material = material;
    }
  }, []);

  const handleClick = (event) => {
    window.open(props.driveLink, "_blank");
  };

  function calculateCardSize() {
    // Adjust these values to fit your needs
    const baseSize = [1.5, 35, 60];
    const mobileSize = [1.5, 20, 40];
  
    // Use the baseSize for large screens and the mobileSize for small screens
    const isMobile = window.innerWidth < 768;
    return isMobile ? mobileSize : baseSize;
  }

  return (
    <>
      <mesh
        position={props.cardPosition}
        ref={cube1}
        onClick={handleClick}
        rotation={props.cardRotation}
      >
        <boxGeometry args={calculateCardSize()} />
      </mesh>
      <Text
        position={props.textPosition}
        rotation={props.textRotation}
        color="white"
        fontSize={5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={"center"}
        font="../../../public/fonts/Alacrity Sans Regular.otf"
        anchorX="center"
        anchorY="middle"
      >
        {props.text}
      </Text>
    </>
  );
}
