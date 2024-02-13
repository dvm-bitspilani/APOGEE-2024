import { useThree } from "@react-three/fiber";

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
    <mesh position={position}>
      <planeGeometry
        args={[xPercent * viewport.width, yPercent * viewport.height]}
      />
      <meshBasicMaterial
        attach="material"
        color="white"
        opacity={0.02}
        transparent
      />
    </mesh>
  );
}
