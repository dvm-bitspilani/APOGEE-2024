import { useThree } from "@react-three/fiber";
import { Text, Image } from "@react-three/drei";

import { useControls } from "leva";

import Register from "./Register";

import placeholder from "@assets/events/event-cat-placeholder.png";
import { useEffect, useMemo, useRef } from "react";

import * as THREE from "three";
import InfoText from "./InfoText";

export default function EventContainer(props) {
  const { position, data } = props;
  const { viewport } = useThree();

  // const { xPercent, yPercent } = useControls("EventContainer", {
  //   xPercent: {
  //     value: 0.62,
  //     step: 0.01,
  //     min: 0,
  //     max: 1,
  //   },
  //   yPercent: {
  //     value: 0.54,
  //     step: 0.01,
  //     min: 0,
  //     max: 1,
  //   },
  // });

  const xPercent = useMemo(() => 0.62, []);
  const yPercent = useMemo(() => 0.54, []);

  // const { textPosition } = useControls("EventContainer", {
  //   textPosition: {
  //     value: [-0.45, 0.37, 0],
  //     step: 0.01,
  //   },
  // });

  const textPosition = useMemo(() => [-0.45, 0.37, 0], []);

  const imgRef = useRef();

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(imgRef.current);
    const size = box.getSize(new THREE.Vector3());

    imgRef.current.position.x -= size.x / 2;
    imgRef.current.position.y -= size.y / 2;
  }, [viewport]);

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
          opacity={0}
          transparent
        />
      </mesh>
      <Text
        anchorX={"left"}
        position={[
          viewport.width * textPosition[0] * xPercent,
          viewport.height * textPosition[1] * yPercent,
          0,
        ]}
        font="/fonts/Alacrity Sans Bold.ttf"
        fontSize={Math.min(viewport.width * 0.02, 0.25)}
        maxWidth={viewport.width * xPercent * 0.3}
      >
        {data.name}
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
        anchorX={"left"}
        // textAlign="center"
        position={[
          viewport.width * textPosition[0] * xPercent,
          viewport.height * textPosition[1] * yPercent - 0.5,
          0,
        ]}
        maxWidth={viewport.width * xPercent * 0.3}
        font="/fonts/Alacrity Sans Regular.otf"
        fontSize={Math.min(viewport.width * 0.015, 0.23)}
      >
        {data.club_dept}
      </Text>
      <Text
        anchorX={"left"}
        // anchorY={"top"}
        textAlign="left"
        position={[
          viewport.width * textPosition[0] * xPercent,
          // viewport.height * textPosition[1] * yPercent - 0.6,
          0,
          0,
        ]}
        color={"#9AF0F4"}
        font="/fonts/Alacrity Sans Light.ttf"
        fontSize={Math.min(viewport.width * 0.0115, 0.2)}
        maxWidth={viewport.width * 0.23}
      >
        {data.description}
      </Text>
      <Image
        ref={imgRef}
        position={[
          -viewport.width * textPosition[0] * xPercent,
          viewport.height * textPosition[1] * yPercent,
          0,
        ]}
        // url={data.image_url !== "NA" ? data.image_url : placeholder}
        url={placeholder}
        scale={[viewport.width * 0.3, viewport.height * 0.3, 1]}
        anchorX={"right"}
      />
      <InfoText
        position={[
          viewport.width * (textPosition[0] + 0.1) * xPercent,
          -viewport.height * textPosition[1] * yPercent,
          0,
        ]}
        data={{ category: "Location", value: "TBA" }}
      />
      <InfoText
        position={[
          viewport.width * (textPosition[0] + 0.3) * xPercent,
          -viewport.height * textPosition[1] * yPercent,
          0,
        ]}
        data={{ category: "Time", value: "TBA" }}
      />
      <InfoText
        position={[
          viewport.width * (textPosition[0] + 0.5) * xPercent,
          -viewport.height * textPosition[1] * yPercent,
          0,
        ]}
        data={{ category: "For queries", value: `${data.contact}` }}
      />
      <Register
        position={[
          -viewport.width * textPosition[0] * xPercent,
          -viewport.height * textPosition[1] * yPercent,
          0,
        ]}
        link={data.link}
      />
    </group>
  );
}
