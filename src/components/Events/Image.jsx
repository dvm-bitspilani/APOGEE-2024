import * as THREE from "three";
import bgImage from "/images/praneel.png";

import { useLoader, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function Image(props) {
  const texture = useLoader(THREE.TextureLoader, bgImage);
  const { viewport } = useThree();

  // console.log(viewport.width, viewport.height);

  return (
    <group position={props.position}>
      <mesh>
        <planeGeometry
          attach="geometry"
          args={[viewport.width, viewport.height]}
        />
        <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
      </mesh>

      <Text color="white" fontSize={viewport.width / 10}>
        Hello
      </Text>
    </group>
  );
}
