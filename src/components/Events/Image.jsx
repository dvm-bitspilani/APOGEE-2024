import * as THREE from "three";
import bgImage from "/images/praneel.png";

import { useLoader, useThree } from "@react-three/fiber";

export default function Image(props) {
  const texture = useLoader(THREE.TextureLoader, bgImage);
  const { viewport } = useThree();

  // console.log(viewport.width, viewport.height);

  return (
    <mesh position={props.position}>
      <planeGeometry
        attach="geometry"
        args={[viewport.width, viewport.height]}
      />
      <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
    </mesh>
  );
}
