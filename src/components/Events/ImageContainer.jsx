import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

import Image from "./Image";

export function ImageContainer() {
  const { viewport } = useThree();

  const { position1, position2 } = useControls({
    position1: {
      value: [0, 0, 0],
      label: "Position 1",
    },
    position2: {
      value: [viewport.width, 0, 0],
      label: "Position 2",
    },
  });
  return (
    <>
      <Image position={position1} />
      <Image position={position2} />
    </>
  );
}
