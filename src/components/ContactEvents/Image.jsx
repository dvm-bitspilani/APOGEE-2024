import * as THREE from "three";
import bgImage from "/images/praneel.png";
import mobilebgImage from "/images/praneel-mobile.png";

import { useLoader, useThree } from "@react-three/fiber";
// import { Text } from "@react-three/drei";

// State Management
import state from "../state";
import { useSnapshot } from "valtio";

export default function Image(props) {
  const snap = useSnapshot(state);

  const texture = useLoader(THREE.TextureLoader, bgImage);
  const mobileTexture = useLoader(THREE.TextureLoader, mobilebgImage);

  const { viewport } = useThree();

  return (
    <mesh position={props.position}>
      <planeGeometry
        attach="geometry"
        args={[viewport.width, viewport.height]}
      />
      <meshBasicMaterial
        attach="material"
        map={snap.isMobile ? mobileTexture : texture}
        toneMapped={false}
      />
    </mesh>
  );
}
