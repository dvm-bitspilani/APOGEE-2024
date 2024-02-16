import { Float, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
// import { useControls } from "leva";
import { useMemo, useEffect, useRef, useState } from "react";

// State management
import state from "../state";

export default function MascotModel({ mascotPos }) {
  const scroll = useScroll();
  const ref = useRef();

  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState(1);

  const prevOffset = useRef(scroll.offset);

  useFrame(() => {
    // Direction Controls
    if (scroll.offset > prevOffset.current && direction === -1) {
      setDirection(1);
    } else if (scroll.offset < prevOffset.current && direction === 1) {
      setDirection(-1);
    }
    prevOffset.current = scroll.offset;

    // Scroll controls
    if (scroll.delta > 0.0002 && isScrolling === false) {
      setIsScrolling(true);
    } else if (scroll.delta < 0.0002 && isScrolling === true) {
      setIsScrolling(false);
    }
  });

  useEffect(() => {
    const refCurrent = ref.current;
    state.mascotRef = refCurrent;

    if (isScrolling && direction === 1) {
      gsap.to(refCurrent.rotation, {
        z: -Math.PI / 7,
        duration: 1,
        ease: "power3.out",
      });
    } else if (isScrolling && direction === -1) {
      gsap.to(refCurrent.rotation, {
        z: Math.PI / 7,
        duration: 1,
        ease: "power3.out",
      });
    }

    // document.addEventListener("wheel", handleDirection);

    return () => {
      gsap.to(refCurrent.rotation, {
        z: 0,
        duration: 1,
        ease: "power3.inout",
      });
      console.log("cleanup");
      // document.removeEventListener("wheel", handleDirection);
    };
  }, [isScrolling, direction]);

  return (
    <Float
      speed={2} // Animation speed, defaults to 1
      // rotationIntensity={2} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[0, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <mesh position={mascotPos} ref={ref} rotation={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </Float>
  );
}
