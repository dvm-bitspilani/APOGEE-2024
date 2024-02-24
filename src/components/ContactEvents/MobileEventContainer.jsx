import { useThree } from "@react-three/fiber";
import { Text, Image } from "@react-three/drei";

import { useControls } from "leva";

import Register from "./Register";

import placeholder from "@assets/events/event-cat-placeholder.png";
import { useEffect, useMemo, useRef } from "react";

import * as THREE from "three";
import InfoText from "./InfoText";

export default function EventContainer(props) {
  const { position } = props;
  const { viewport } = useThree();

  //   const { xPercent, yPercent } = useControls("EventContainer", {
  //     xPercent: {
  //       value: 0.62,
  //       step: 0.01,
  //       min: 0,
  //       max: 1,
  //     },
  //     yPercent: {
  //       value: 0.54,
  //       step: 0.01,
  //       min: 0,
  //       max: 1,
  //     },
  //   });

  //   const { textPosition } = useControls("EventContainer", {
  //     textPosition: {
  //       value: [-0.45, 0.37, 0],
  //       step: 0.01,
  //     },
  //   });

  const xPercent = useMemo(() => 0.62, []);
  const yPercent = useMemo(() => 0.7, []);
  const textPosition = useMemo(() => [-0.35, 0.42, 0], []);

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
          opacity={1}
          //   transparent
        />
      </mesh>
      <Text
        position={[0, viewport.height * textPosition[1] * yPercent, 0]}
        font="/fonts/Alacrity Sans Bold.ttf"
        fontSize={Math.min(viewport.width * 0.03, 0.4)}
        // maxWidth={viewport.width * 0.23}
      >
        Paper Presentation Event
        <meshStandardMaterial
          attach="material"
          color={"#9AF0F4"}
          emissiveIntensity={1.5}
          emissive={"#9AF0F4"}
          toneMapped={false}
        />
      </Text>
      <Text
        color={"#9AF0F4"}
        anchorX={"center"}
        textAlign="center"
        position={[0, viewport.height * textPosition[1] * yPercent - 0.15, 0]}
        font="/fonts/Alacrity Sans Regular.otf"
        fontSize={Math.max(viewport.width * 0.001, 0.1)}
      >
        Some Club or Department
      </Text>
      <Image
        position={[0, viewport.height * (textPosition[1] - 0.2) * yPercent, 0]}
        url={placeholder}
        scale={[
          viewport.width * xPercent * 0.8,
          viewport.height * yPercent * 0.3,
          1,
        ]}
      />
      <InfoText
        position={[viewport.width * textPosition[0] * xPercent, 0, 0]}
        data={{ category: "Location", value: "LTC 5105" }}
      />
      <InfoText
        position={[0, 0, 0]}
        data={{ category: "Time", value: "5th April, 6PM" }}
      />
      <InfoText
        position={[-viewport.width * textPosition[0] * xPercent, 0, 0]}
        data={{ category: "For queries", value: "9390145617" }}
      />
      <Text
        anchorY={"top"}
        textAlign="left"
        position={[0, -0.4, 0]}
        color={"#9AF0F4"}
        font="/fonts/Alacrity Sans Light.ttf"
        fontSize={Math.min(viewport.width * 0.05, 0.13)}
        maxWidth={viewport.width * xPercent * 0.8}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
        nulla id tellus mattis tempor. Sed augue odio Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Quisque ut nulla id tellus mattis tempor.
        Sed augue
      </Text>

      <Register
        position={[0, -viewport.height * textPosition[1] * yPercent, 0]}
      />
    </group>
  );
}
