import { Float } from "@react-three/drei";
import { useControls } from "leva";

export default function MascotModel() {
  const { position } = useControls("Mascot", {
    position: {
      value: [0, -2, 0.6],
      step: 0.1,
      min: -10,
      max: 10,
    },
  });
  return (
    <Float
      speed={2} // Animation speed, defaults to 1
      rotationIntensity={2} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[0, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </Float>
  );
}
