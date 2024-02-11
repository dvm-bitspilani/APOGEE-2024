import React, { Suspense } from "react";
import { useWindowSize } from "rooks";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import bgImage from "../../public/images/praneel.png";
import "../styles/events/events.css";
import { useControls } from "leva";

function Image(props) {
  const texture = useLoader(THREE.TextureLoader, bgImage);
  const { viewport } = useThree();

  console.log(viewport.width, viewport.height);

  return (
    <mesh position={props.position}>
      <planeGeometry
        attach="geometry"
        args={[viewport.width, viewport.height]}
      />
      <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
    </mesh>
  );
}

function ImageContainer() {
  const { viewport } = useThree();

  const { position1, position2 } = useControls({
    position1: {
      value: [-1, 0, 0],
      label: "Position 1",
    },
    position2: {
      value: [viewport.width - 1, 0, 0],
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

function EventsPage() {
  //   const { innerHeight, innerWidth } = useWindowSize();

  return (
    <div className="eventsContainer">
      <Canvas>
        <Suspense fallback={null}>
          {/* <Image position={[-, 0, 0]} /> */}
          <ImageContainer />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default EventsPage;
