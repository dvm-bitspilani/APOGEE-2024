import { useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";

import { useControls } from "leva";

export default function EventContainer(props) {
  const { position } = props;
  const { viewport } = useThree();

  const { xPercent, yPercent } = useControls("EventContainer", {
    xPercent: {
      value: 0.62,
      step: 0.01,
      min: 0,
      max: 1,
    },
    yPercent: {
      value: 0.54,
      step: 0.01,
      min: 0,
      max: 1,
    },
  });

  return (
    <group position={position}>
      <mesh>
        <planeGeometry
          attach="geometry"
          args={[xPercent * viewport.width, yPercent * viewport.height]}
        />
        <meshBasicMaterial
          attach="material"
          color="white"
          opacity={0.2}
          transparent
        />
      </mesh>
      <Text
        color="white"
        fontSize={viewport.width / 10}
        position={[
          -viewport.width * 0.18,
          viewport.height * 0.2,
          0,
        ]}
      >
        Hello
      </Text>
    </group>
  );
}
