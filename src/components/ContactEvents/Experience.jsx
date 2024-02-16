import { useFrame, useThree } from "@react-three/fiber";
// import { useControls } from "leva";

// Components
import Image from "./Image";
import MascotModel from "../Models/MascotModel";
import EventContainer from "./EventContainer";

import { useEffect, useState, useMemo } from "react";

// State Management
import state from "../state";
import { useSnapshot } from "valtio";

// Import Scroll to implement parallax
import { useScroll } from "@react-three/drei";

// GSAP
import gsapOnRender from "./gsapOnRender";

export default function Experience() {
  const { viewport } = useThree();

  const [categoryOffset, setCategoryOffset] = useState(0);
  const snap = useSnapshot(state);

  const mascotPos = useMemo(() => {
    return [0, -2, 0.6];
  }, []);

  useEffect(() => {
    gsapOnRender(mascotPos);
  }, [mascotPos]);

  const scroll = useScroll();

  useFrame(() => {
    // console.log(scroll);
    setCategoryOffset(
      scroll.offset * viewport.width * (state.numCategories - 1),
    );
  });

  const positions = Array.from({ length: snap.numCategories }, (v, i) => {
    return [viewport.width * i - categoryOffset, 0, 0];
  });

  const eventPositions = Array.from({ length: snap.numCategories }, (v, i) => {
    return [viewport.width * i - categoryOffset, viewport.height / 5.4, 0];
  });

  const eventContainers = eventPositions.map((position, index) => (
    <EventContainer key={index} position={position} />
  ));

  const images = positions.map((position, index) => (
    <Image key={index} position={position} />
  ));

  return (
    <>
      {images}
      <MascotModel />
      {eventContainers}
    </>
  );
}
