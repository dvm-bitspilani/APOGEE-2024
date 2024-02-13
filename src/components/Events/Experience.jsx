import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

import Image from "./Image";
import MascotModel from "../Models/MascotModel";

import { useEffect, useState } from "react";

// State Management
import state from "../state";
import { useSnapshot } from "valtio";

// gsap
import gsap from "gsap";
import { useScroll } from "@react-three/drei";

export default function Experience() {
  const { viewport } = useThree();
  const { innerWidth, innerHeight } = window;

  const [categoryOffset, setCategoryOffset] = useState(0);
  const snap = useSnapshot(state);

  const scroll = useScroll();

  useFrame(() => {
    // console.log(scroll);
    setCategoryOffset((categoryOffset) =>
      Math.min(
        Math.max(scroll.offset * viewport.width * state.numCategories, 0),
        state.numCategories * viewport.width - viewport.width
      )
    );
  });

  // useEffect(() => {
  //   function handleScroll(e) {
  //     const multiplier = viewport.width / innerHeight;
  //     setCategoryOffset((categoryOffset) =>
  //       Math.min(
  //         Math.max(categoryOffset + e.deltaY * multiplier, 0),
  //         state.numCategories * viewport.width - viewport.width
  //       )
  //     );
  //   }

  //   document.addEventListener("wheel", handleScroll);

  //   return () => {
  //     document.removeEventListener("wheel", handleScroll);
  //   };
  // }, [viewport.width, innerHeight]);

  const positions = Array.from({ length: snap.numCategories }, (v, i) => {
    return [viewport.width * i - categoryOffset, 0, 0];
  });

  const images = positions.map((position, index) => (
    <Image key={index} position={position} />
  ));

  return (
    <>
      {images}
      <MascotModel />
    </>
  );
}
