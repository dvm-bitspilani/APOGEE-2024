import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

import Image from "./Image";
import { useEffect, useState } from "react";

// State Management
import state from "../state";
import { useSnapshot } from "valtio";

export function ImageContainer() {
  const { viewport } = useThree();
  const { innerWidth, innerHeight } = window;

  const [categoryOffset, setCategoryOffset] = useState(0);

  const snap = useSnapshot(state);

  useEffect(() => {
    function handleScroll(e) {
      const multiplier = viewport.width / innerHeight;
      setCategoryOffset((categoryOffset) =>
        Math.min(
          Math.max(categoryOffset + e.deltaY * multiplier, 0),
          state.numCategories * viewport.width - viewport.width
        )
      );
    }

    document.addEventListener("wheel", handleScroll);

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, [viewport.width, innerHeight]);

  const positions = Array.from({ length: snap.numCategories }, (v, i) => {
    return [viewport.width * i - categoryOffset, 0, 0];
  });

  const images = positions.map((position, index) => (
    <Image key={index} position={position} />
  ));

  return <>{images}</>;
}
