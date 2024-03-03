import { Float, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
// import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

// State management
import state from "../state";
import { useSnapshot } from "valtio";

export default function MascotModel({ mascotPos }) {
  const scroll = useScroll();
  const ref = useRef();

  const snap = useSnapshot(state);

  const { nodes, materials } = useGLTF("/models/mascot23.glb");

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
        z: Math.PI / 10,
        y: Math.PI,
        duration: 1,
        ease: "power3.out",
      });
    } else if (isScrolling && direction === -1) {
      gsap.to(refCurrent.rotation, {
        z: Math.PI / 10,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    }

    // document.addEventListener("wheel", handleDirection);

    return () => {
      gsap.to(refCurrent.rotation, {
        y: Math.PI / 2,
        z: 0,
        duration: 0.8,
        ease: "power3.inout",
      });
      // document.removeEventListener("wheel", handleDirection);
    };
  }, [isScrolling, direction]);

  return (
    <Float
      speed={snap.isMobile ? 0 : isScrolling ? 15 : 2} // Animation speed, defaults to 1
      rotationIntensity={0} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[-0.2, 0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <group
        dispose={null}
        position={mascotPos}
        ref={ref}
        rotation={[0, Math.PI / 2, 0]}
        scale={snap.isMobile ? 0.4 : 0.5}
      >
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials.Metal}
        position={[-0.027, 0.431, 1.545]}
        rotation={[0.383, -1.167, 2.933]}
        scale={[0.021, 0.044, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials.Metal}
        position={[-0.133, 0.44, 1.545]}
        rotation={[0.326, -1.456, -3.066]}
        scale={[0.025, 0.054, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials.Metal}
        position={[-0.077, 0.435, 1.56]}
        rotation={[0.504, -1.13, 3.124]}
        scale={[0.026, 0.055, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={materials.Metal}
        position={[-0.145, 0.501, 1.534]}
        rotation={[0.905, 0.578, 2.444]}
        scale={[0.034, 0.054, 0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.004"]}
        position={[0.047, 1.024, 0.57]}
        scale={[1.518, 1.631, 1.631]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.001"]}
        position={[0.047, 1.021, 0.57]}
        scale={[1.528, 1.642, 1.642]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.001"]}
        position={[0.047, 1.024, 0.57]}
        scale={[1.518, 1.631, 1.631]}
      />
      <group
        position={[-0.474, 1.21, 0.648]}
        rotation={[0, 0, 0.126]}
        scale={[0.021, 0.023, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_1.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["matte plastic "]}
        position={[0.005, 2.709, -0.488]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.229, 0.136, 0.216]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["matte plastic "]}
        position={[0.009, 3.239, -0.499]}
        scale={[0.029, 0.448, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.004"]}
        position={[0.009, 2.633, 0.534]}
        scale={[0.731, 0.844, 1.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["Bronze metal"]}
        position={[0.02, 1.386, 1.488]}
        rotation={[2.706, -0.044, -3.047]}
        scale={[0.145, 0.16, 0.145]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials.Metal}
        position={[0.005, 1.238, 1.559]}
        rotation={[2.867, -0.028, -3.041]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials["Bronze metal"]}
        position={[-0.019, 1.015, 1.603]}
        rotation={[3.068, -0.008, -3.038]}
        scale={[0.136, 0.15, 0.136]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials.Metal}
        position={[-0.038, 0.832, 1.614]}
        rotation={[-3.002, 0.014, -3.038]}
        scale={[0.137, 0.133, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004.geometry}
        material={materials["matte plastic "]}
        position={[0.021, 1.499, 1.369]}
        rotation={[2.84, -0.031, -3.042]}
        scale={[0.211, 0.2, 0.242]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials["Bronze metal"]}
        position={[-0.06, 0.616, 1.575]}
        rotation={[0.19, -0.02, 3.039]}
        scale={[0.138, 0.152, 0.138]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={materials["Material.002"]}
        position={[-0.07, 2.633, 0.534]}
        scale={[0.731, 0.844, 1.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone001.geometry}
        material={materials.Metal}
        position={[0.01, 3.744, -0.495]}
        scale={0.075}
      />
      </group>
    </Float>
  );
}

useGLTF.preload("/models/mascot23.glb");
