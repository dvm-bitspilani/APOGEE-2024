import { Instance, Instances, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { AdditiveBlending, DoubleSide, MathUtils } from "three";
import state from "./state";

const INSTANCES = 300;
const MAX_OPACITY = 0.75;

const SpeedShape = () => {
  const ref = useRef();

  let randomPosition = {
    x: 0,
    y: 0,
    z: 0,
  };
  let randomSpeed = 0;

  const resetRandom = () => {
    randomPosition = {
      x:  MathUtils.randFloatSpread(8),
      y:  MathUtils.randFloatSpread(5),
      z: MathUtils.randFloatSpread(80),
    };
    randomSpeed = MathUtils.randFloat(16, 20);

    // console.log(randomPosition)
  };
  resetRandom();

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.position.z += randomSpeed * delta;
      if (ref.current.position.z > 5) {
        resetRandom();
        ref.current.position.z = randomPosition.z;
      }
    }
  });

  return (
    <Instance
      ref={ref}
      color="white"
      position={[randomPosition.x, randomPosition.y, randomPosition.z]}
      rotation-y={Math.PI / 2}
    />
  );
};

export const Speed = () => {
  const speedMaterial = useRef();

  useFrame((_state, delta) => {
    if (state.isMoving) {
      speedMaterial.current.opacity = MAX_OPACITY;
    }
    else {
      speedMaterial.current.opacity = 0;
    }
    if (speedMaterial.current.opacity > 0) {
      speedMaterial.current.opacity -= delta * 0.2;
    }
  });

  return (
    <group>
      <Instances>
        <planeGeometry args={[1, 0.004]} />
        <meshBasicMaterial
          ref={speedMaterial}
          side={DoubleSide}
          blending={AdditiveBlending}
          opacity={0}
          transparent
        />
        {Array(INSTANCES)
          .fill()
          .map((_, key) => (
            <SpeedShape key={key} />
          ))}
      </Instances>
    </group>
  );
};
