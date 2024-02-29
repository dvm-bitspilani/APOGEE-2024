import React, { useRef, useEffect } from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber/dist/react-three-fiber.cjs";
import { MeshTransmissionMaterial } from "./MeshTransmissionMaterial";

export default function Card(props) {
  const cube1 = useRef(null);
  const texture = useLoader(TextureLoader, "../../../public/images/speaker-card.png");

  useEffect(() => {
    if (cube1.current) {
      const material = new MeshTransmissionMaterial(10);
      material.clearcoat = 1;
      material.clearcoatRoughness = 0;
      material.transmission = 1;
      material.chromaticAberration = 3;
      material.anisotrophicBlur = 0.1;
      material.roughness = 0;
      material.thickness = 4.5;
      material.ior = 1.5;
      material.distortion = 0.1;
      material.distortionScale = 0.2;
      material.temporalDistortion = 0.2;
      cube1.current.material = material;
      // cube1.current.material.map = texture;
    }
  }, []);

  return (
    <mesh position={[5, -5, 0]} ref={cube1}>
      <boxGeometry args={[1, 30, 50]} />
    </mesh>
  );
}