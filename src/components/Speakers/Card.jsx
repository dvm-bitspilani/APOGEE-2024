import React, { useRef, useEffect, Suspense } from "react";
import { MeshTransmissionMaterial } from "./MeshTransmissionMaterial";
import { useVideoTexture } from '@react-three/drei'
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function Card(props) {
  const cube1 = useRef(null);
  const texture = useVideoTexture("https://storage.googleapis.com/activetheory-v6.appspot.com/media/chile_1.mp4")

  useEffect(() => {
    if (cube1.current) {
      const material = new MeshTransmissionMaterial(10);
      material.clearcoat = 1;
      material.clearcoatRoughness = 0;
      material.transmission = 1.05;
      material.chromaticAberration = 3;
      material.anisotrophicBlur = 0.1;
      material.roughness = 0;
      material.thickness = 4.5;
      material.ior = 1.5;
      material.distortion = 0.1;
      material.distortionScale = 0.2;
      material.temporalDistortion = 0.2;
      material.map = texture;
      material.transparent = true;
      material.opacity = 0.75;
      material.color = new THREE.Color(0x9AF0F4);
      cube1.current.material = material;
    }
  }, []);

  const handleClick = (event) => {
    window.open('https://your-link.com', '_blank');
  };

  return (
    <>
      <mesh position={[10, -5, 0]} ref={cube1} onClick={handleClick}>
        <boxGeometry args={[1.5, 35, 60]} />
      </mesh>
      <Text
        position={[15, -12.5, 0]} 
        rotation={[0, Math.PI / 2, 0]}
        color="white" 
        fontSize={5} 
        maxWidth={200} 
        lineHeight={1} 
        letterSpacing={0.02} 
        textAlign={'center'} 
        font="../../../public/fonts/Alacrity Sans Regular.otf" 
        anchorX="center" 
        anchorY="middle" 
      >
        Insert Text Here
      </Text>
    </>
  );
}