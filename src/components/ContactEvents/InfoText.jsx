import { useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function InfoText({ position, data }) {
  const { viewport } = useThree();

  return (
    <group position={position}>
      <Text
        anchorX={"left"}
        font="/fonts/Alacrity Sans Bold.ttf"
        fontSize={Math.max(viewport.width * 0.01, 0.15)}
      >
        {data.category}
      </Text>
      <Text
        anchorX={"left"}
        position={[0, -0.25, 0]}
        font="/fonts/Alacrity Sans Bold.ttf"
        fontSize={Math.max(viewport.width * 0.012, 0.17)}
      >
        {data.value}
      </Text>
    </group>
  );
}
