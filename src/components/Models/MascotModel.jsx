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
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}
