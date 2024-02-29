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

  const { nodes, materials } = useGLTF("/models/Mascot.glb");

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
          geometry={nodes.Cylinder013.geometry}
          material={materials.Metal}
          position={[0.001, 0.471, -0.299]}
          rotation={[2.897, 0, 0]}
          scale={[0.021, 0.044, 0.021]}
        />
        <mesh
          geometry={nodes.Cylinder014.geometry}
          material={materials.Metal}
          position={[0.003, 0.432, -0.411]}
          rotation={[2.897, 0, 0]}
          scale={[0.023, 0.05, 0.023]}
        />
        <mesh
          geometry={nodes.Cylinder015.geometry}
          material={materials.Metal}
          position={[-0.024, 0.436, -0.346]}
          rotation={[2.897, 0, 0]}
          scale={[0.026, 0.055, 0.026]}
        />
        <mesh
          geometry={nodes.Cylinder016.geometry}
          material={materials.Metal}
          position={[0, 0.443, 1.601]}
          rotation={[-2.957, 0, 0]}
          scale={[0.021, 0.044, 0.021]}
        />
        <mesh
          geometry={nodes.Cylinder017.geometry}
          material={materials.Metal}
          position={[0.002, 0.476, 1.49]}
          rotation={[-2.957, 0, 0]}
          scale={[0.025, 0.054, 0.025]}
        />
        <mesh
          geometry={nodes.Cylinder018.geometry}
          material={materials.Metal}
          position={[-0.025, 0.431, 1.543]}
          rotation={[-2.957, 0, 0]}
          scale={[0.026, 0.055, 0.026]}
        />
        <mesh
          geometry={nodes.Cylinder019.geometry}
          material={materials.Metal}
          position={[0.103, 0.606, -0.273]}
          rotation={[2.373, -0.533, -0.457]}
          scale={[0.031, 0.05, 0.031]}
        />
        <mesh
          geometry={nodes.Cylinder020.geometry}
          material={materials.Metal}
          position={[0.103, 0.606, 1.421]}
          rotation={[1.025, -0.795, -2.276]}
          scale={[0.034, 0.054, 0.034]}
        />
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials["Light iron"]}
          position={[-0.49, 1.331, 0.568]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.183, 0.256, 0.204]}
        />
        <mesh
          geometry={nodes.Sphere002.geometry}
          material={materials["Wax Plastic"]}
          position={[0.033, 1.221, 0.552]}
          scale={[0.797, 0.784, 0.823]}
        />
        <mesh
          geometry={nodes.Cone.geometry}
          material={materials["Wax Plastic.002"]}
          position={[0, 3.81, -0.499]}
          scale={[0.071, 0.093, 0.071]}
        />
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials["matte plastic "]}
          position={[0, 2.709, -0.499]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.249, 0.136, 0.216]}
        />
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials["matte plastic "]}
          position={[0, 2.709, 1.558]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[0.249, 0.136, 0.216]}
        />
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={materials["Wax Plastic.002"]}
          position={[0, 3.239, -0.499]}
          scale={[0.027, 0.448, 0.027]}
        />
        <mesh
          geometry={nodes.Sphere.geometry}
          material={materials["Wax Plastic.001"]}
          position={[0, 2.633, 0.534]}
          scale={[0.682, 0.844, 1.009]}
        />
        <mesh
          geometry={nodes.Cylinder003.geometry}
          material={materials["Bronze metal"]}
          position={[0.001, 1.377, -0.296]}
          rotation={[0.438, 0, 0]}
          scale={[0.145, 0.16, 0.145]}
        />
        <mesh
          geometry={nodes.Cylinder004.geometry}
          material={materials.Metal}
          position={[0.001, 1.229, -0.368]}
          rotation={[0.276, 0, 0]}
          scale={0.107}
        />
        <mesh
          geometry={nodes.Cylinder005.geometry}
          material={materials["Bronze metal"]}
          position={[0.001, 1.004, -0.411]}
          rotation={[0.074, 0, 0]}
          scale={[0.136, 0.15, 0.136]}
        />
        <mesh
          geometry={nodes.Cylinder006.geometry}
          material={materials.Metal}
          position={[0.001, 0.82, -0.422]}
          rotation={[-0.14, 0, 0]}
          scale={[0.137, 0.133, 0.137]}
        />
        <mesh
          geometry={nodes.Sphere003.geometry}
          material={materials.Material}
          position={[0.011, 1.49, -0.177]}
          rotation={[0.304, 0, 0]}
          scale={[0.211, 0.2, 0.242]}
        />
        <mesh
          geometry={nodes.Cylinder007.geometry}
          material={materials["Bronze metal"]}
          position={[0.001, 0.604, -0.383]}
          rotation={[2.951, 0, 0]}
          scale={[0.138, 0.152, 0.138]}
        />
        <mesh
          geometry={nodes.Cylinder008.geometry}
          material={materials["Bronze metal"]}
          position={[0.004, 1.384, 1.481]}
          rotation={[2.704, 0, Math.PI]}
          scale={[0.145, 0.16, 0.145]}
        />
        <mesh
          geometry={nodes.Cylinder009.geometry}
          material={materials.Metal}
          position={[0.004, 1.235, 1.553]}
          rotation={[2.865, 0, Math.PI]}
          scale={0.107}
        />
        <mesh
          geometry={nodes.Cylinder010.geometry}
          material={materials["Bronze metal"]}
          position={[0.004, 1.011, 1.597]}
          rotation={[3.068, 0, Math.PI]}
          scale={[0.136, 0.15, 0.136]}
        />
        <mesh
          geometry={nodes.Cylinder011.geometry}
          material={materials.Metal}
          position={[0.004, 0.827, 1.608]}
          rotation={[-3.002, 0, -Math.PI]}
          scale={[0.137, 0.133, 0.137]}
        />
        <mesh
          geometry={nodes.Sphere004.geometry}
          material={materials.Material}
          position={[-0.007, 1.496, 1.363]}
          rotation={[2.838, 0, Math.PI]}
          scale={[0.211, 0.2, 0.242]}
        />
        <mesh
          geometry={nodes.Cylinder012.geometry}
          material={materials["Bronze metal"]}
          position={[0.004, 0.61, 1.569]}
          rotation={[0.191, 0, Math.PI]}
          scale={[0.138, 0.152, 0.138]}
        />
        <mesh
          geometry={nodes.Sphere005.geometry}
          material={materials["Material.002"]}
          position={[-0.006, 2.633, 0.534]}
          scale={[0.682, 0.844, 1.009]}
        />
        <mesh
          geometry={nodes.Curve008.geometry}
          material={materials["SVGMat.080"]}
        />
        <group
          position={[-0.479, 1.133, 0.388]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[28.107, 62.098, 28.107]}
        >
          <mesh
            geometry={nodes.Curve123.geometry}
            material={materials["SVGMat.079"]}
          />
          <mesh
            geometry={nodes.Curve123_1.geometry}
            material={materials["SVGMat.076"]}
          />
          <mesh
            geometry={nodes.Curve123_2.geometry}
            material={materials["SVGMat.076"]}
          />
          <mesh
            geometry={nodes.Curve123_3.geometry}
            material={materials["SVGMat.076"]}
          />
          <mesh
            geometry={nodes.Curve123_4.geometry}
            material={materials["SVGMat.076"]}
          />
          <mesh
            geometry={nodes.Curve123_5.geometry}
            material={materials["SVGMat.076"]}
          />
          <mesh
            geometry={nodes.Curve123_6.geometry}
            material={materials["SVGMat.076"]}
          />
          <mesh
            geometry={nodes.Curve123_7.geometry}
            material={materials["SVGMat.076"]}
          />
          <mesh
            geometry={nodes.Curve123_8.geometry}
            material={materials["SVGMat.079"]}
          />
          <mesh
            geometry={nodes.Curve123_9.geometry}
            material={materials["SVGMat.081"]}
          />
          <mesh
            geometry={nodes.Curve123_10.geometry}
            material={materials["SVGMat.082"]}
          />
          <mesh
            geometry={nodes.Curve123_11.geometry}
            material={materials["SVGMat.083"]}
          />
          <mesh
            geometry={nodes.Curve123_12.geometry}
            material={materials["SVGMat.084"]}
          />
          <mesh
            geometry={nodes.Curve123_13.geometry}
            material={materials["SVGMat.085"]}
          />
          <mesh
            geometry={nodes.Curve123_14.geometry}
            material={materials["SVGMat.086"]}
          />
          <mesh
            geometry={nodes.Curve123_15.geometry}
            material={materials["SVGMat.087"]}
          />
          <mesh
            geometry={nodes.Curve123_16.geometry}
            material={materials["SVGMat.088"]}
          />
          <mesh
            geometry={nodes.Curve123_17.geometry}
            material={materials["SVGMat.089"]}
          />
          <mesh
            geometry={nodes.Curve123_18.geometry}
            material={materials["SVGMat.090"]}
          />
          <mesh
            geometry={nodes.Curve123_19.geometry}
            material={materials["SVGMat.091"]}
          />
          <mesh
            geometry={nodes.Curve123_20.geometry}
            material={materials["SVGMat.092"]}
          />
          <mesh
            geometry={nodes.Curve123_21.geometry}
            material={materials["SVGMat.093"]}
          />
          <mesh
            geometry={nodes.Curve123_22.geometry}
            material={materials["SVGMat.094"]}
          />
          <mesh
            geometry={nodes.Curve123_23.geometry}
            material={materials["SVGMat.095"]}
          />
          <mesh
            geometry={nodes.Curve123_24.geometry}
            material={materials["SVGMat.096"]}
          />
          <mesh
            geometry={nodes.Curve123_25.geometry}
            material={materials["SVGMat.097"]}
          />
          <mesh
            geometry={nodes.Curve123_26.geometry}
            material={materials["SVGMat.098"]}
          />
          <mesh
            geometry={nodes.Curve123_27.geometry}
            material={materials["SVGMat.099"]}
          />
          <mesh
            geometry={nodes.Curve123_28.geometry}
            material={materials["SVGMat.100"]}
          />
          <mesh
            geometry={nodes.Curve123_29.geometry}
            material={materials["SVGMat.101"]}
          />
          <mesh
            geometry={nodes.Curve123_30.geometry}
            material={materials["SVGMat.102"]}
          />
          <mesh
            geometry={nodes.Curve123_31.geometry}
            material={materials["SVGMat.103"]}
          />
          <mesh
            geometry={nodes.Curve123_32.geometry}
            material={materials["SVGMat.104"]}
          />
          <mesh
            geometry={nodes.Curve123_33.geometry}
            material={materials["SVGMat.105"]}
          />
          <mesh
            geometry={nodes.Curve123_34.geometry}
            material={materials["SVGMat.106"]}
          />
          <mesh
            geometry={nodes.Curve123_35.geometry}
            material={materials["SVGMat.107"]}
          />
        </group>
        <mesh
          geometry={nodes.bolt_head.geometry}
          material={materials["Iron Touched"]}
        />
        <mesh
          geometry={nodes.bolt_head002.geometry}
          material={materials["Iron Touched"]}
          position={[-0.499, 1.495, 0.388]}
          rotation={[-0.532, 0, Math.PI / 2]}
          scale={4.012}
        />
        <mesh
          geometry={nodes.bolt_head001.geometry}
          material={materials["Iron Touched"]}
          position={[-0.499, 1.495, 0.755]}
          rotation={[0.573, 0, Math.PI / 2]}
          scale={4.012}
        />
        <mesh
          geometry={nodes.bolt_head003.geometry}
          material={materials["Iron Touched"]}
          position={[-0.499, 1.173, 0.388]}
          rotation={[-1.099, 0, Math.PI / 2]}
          scale={4.012}
        />
        <mesh
          geometry={nodes.bolt_head004.geometry}
          material={materials["Iron Touched"]}
          position={[-0.499, 1.173, 0.755]}
          rotation={[-0.037, 0, Math.PI / 2]}
          scale={4.012}
        />
        <mesh
          geometry={nodes.bolt_head005.geometry}
          material={materials["Iron Touched"]}
          position={[-0.055, 1.514, 1.579]}
          rotation={[1.544, 0.212, 0.336]}
          scale={3.805}
        />
      </group>
    </Float>
  );
}

useGLTF.preload("/models/Mascot.glb");
