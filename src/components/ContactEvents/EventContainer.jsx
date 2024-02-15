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

  const { textPosition } = useControls("EventContainer", {
    textPosition: {
      value: [-0.45, 0.3, 0],
      step: 0.01,
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
          color="#314557"
          opacity={0.4}
          transparent
        />
      </mesh>
      <Text
        anchorX={"left"}
        position={[
          viewport.width * textPosition[0] * xPercent,
          viewport.height * textPosition[1] * yPercent,
          0,
        ]}
        font="/fonts/Alacrity Sans Bold.ttf"
        fontSize={0.5}
      >
        QUANTACULUS
        <meshStandardMaterial
          attach="material"
          color={"#9AF0F4"}
          emissiveIntensity={1.5}
          emissive={"#9AF0F4"}
          toneMapped={false}
        />
      </Text>
    </group>
  );
}
