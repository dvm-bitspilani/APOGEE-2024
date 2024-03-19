import { OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import Background from "../Landing/Background";
// import { Speed } from "../Speed";
import state from "../state";
import { Spaceship } from "../Models/SpaceShip";
import gsap from "gsap";
import Card from "./Card";

function Experience() {
  const scroll = useScroll();

  const cameraRef = useRef();

  const data = useMemo(
    () => [
      {
        cardPosition: [15, -5, 0],
        cardRotation: [0, 0, 0],
        textPosition: [22.5, -12.5, 0],
        textRotation: [0, Math.PI / 2, 0],
        video: "../../../videos/akbar.mp4",
        text: "",
        driveLink: "https://drive.google.com/file/d/0B8qjV3FXLM4bMzV3N1R1WFViUUU/view?usp=drivesdk&resourcekey=0-LE316yW4KBSuSZ2rGwn4ZQ"
      },
      {
        cardPosition: [-20, -60, 7.5],
        cardRotation: [0, (Math.PI * -150) / 180, 0],
        textPosition: [-27.5, -62.5, 0],
        textRotation: [0, (Math.PI * -70) / 180, 0],
        video: "../../../videos/elenla.mp4",
        text: "",
        driveLink: "https://drive.google.com/file/d/0B8qjV3FXLM4bQ09TVGszOHJ6MGc/view?usp=drivesdk&resourcekey=0-AfUPNcfuFta6Tp9ZCh_x_w"
      },
      {
        cardPosition: [10, -105, -20],
        cardRotation: [0, (Math.PI * 70) / 180, 0],
        textPosition: [-27.5, -62.5, 0],
        textRotation: [0, (Math.PI * -70) / 180, 0],
        video: "../../../videos/shivshankar.mp4",
        text: "",
        driveLink: "https://drive.google.com/file/d/0B8qjV3FXLM4baHZRQU1aM0ZxSkU/view?usp=drivesdk&resourcekey=0-M7KBycRoqsY9l0EjiMIkjA"
      },
    ],
    []
  );

  useEffect(() => {
    state.camera = cameraRef.current;
  }, []);

  const radius = useMemo(() => 100, []); // radius of the helix
  const speed = useMemo(() => 5, []); // speed of the helix
  const verticalSpeed = useMemo(() => 100, []); // speed of vertical movement

  useFrame((_state, delta) => {
    if (cameraRef.current) {
      const { current: camera } = cameraRef;

      // Calculate the new position
      const newPosition = [
        radius * Math.cos(scroll.offset * speed),
        -scroll.offset * verticalSpeed,
        radius * Math.sin(scroll.offset * speed),
      ];

      // Animate the camera position
      gsap.to(camera.position, {
        x: newPosition[0],
        y: newPosition[1],
        z: newPosition[2],
        // duration: 0.5,
        ease: "power2.out",
      });

      // Point the camera to the Spaceship
      camera.lookAt(0, camera.position.y - 1, 0);
    }
  });

  function calculateLightPosition(cardPosition, cardRotation, index) {
    // Calculate the position of the light based on the card's position and rotation
    // This is a simple example, you may need to adjust the calculation to fit your needs
    const direction = index === 2 ? 10 : -10;

    const lightPosition = [
      cardPosition[0] + Math.sin(cardRotation[1]) * -10,
      cardPosition[1] + 10,
      cardPosition[2] + Math.cos(cardRotation[1]) * -10,
    ];

    return lightPosition;
  }

  return (
    <>
      {/* <OrbitControls /> */}
      <PerspectiveCamera
        ref={cameraRef}
        position={[0, 125, 0]}
        // rotation={[0, Math.PI / 2, 0]}
        // zoom={0.5}
        // fov={50}
        makeDefault
      />
      <Background />
      {/* <Speed /> */}
      <Stars
        radius={15}
        depth={75}
        count={500}
        factor={4}
        saturation={5}
        fade
        speed={0}
      />
      {data.map((item, index) => {
        const lightPosition = calculateLightPosition(
          item.cardPosition,
          item.cardRotation,
          index
        );
        return (
          <React.Fragment key={index}>
            <Card
              cardPosition={item.cardPosition}
              cardRotation={item.cardRotation}
              textPosition={item.textPosition}
              textRotation={item.textRotation}
              video={item.video}
              text={item.text}
              driveLink={item.driveLink}
            />
            <directionalLight
              position={lightPosition}
              intensity={100}
              color={Number("#9AF0F4".replace("#", "0x"))}
            />
          </React.Fragment>
        );
      })}

      <Spaceship />
    </>
  );
}

export default Experience;
