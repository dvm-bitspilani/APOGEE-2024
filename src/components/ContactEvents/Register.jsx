import { Text } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as THREE from "three";

export default function Register(props) {
  const { position } = props;

  const { viewport } = useThree();

  const [hovered, setHovered] = useState(false);

  const meshRef = useRef();
  const groupRef = useRef();

  const navigate = useNavigate();

  const registerButtonTexture = useLoader(
    THREE.TextureLoader,
    "/images/register_bg.svg"
  );

  useEffect(() => {
    const material = meshRef.current;
    if (hovered) {
      gsap.to(material, {
        duration: 0.5,
        emissiveIntensity: 1.5,
      });

      document.body.style.cursor = "pointer";
    }

    return () => {
      gsap.to(material, {
        duration: 0.5,
        emissiveIntensity: 1,
      });
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(groupRef.current);
    const size = box.getSize(new THREE.Vector3());

    groupRef.current.position.x -= size.x / 2;
  }, [viewport]);

  const handleNavigation = () => {
    navigate("/events/kernel");
  };

  return (
    <group
      position={[position[0], position[1], position[2]]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={handleNavigation}
      ref={groupRef}
    >
      {/* Position the mesh 50% to the left or anchor it to the right */}
      <mesh>
        <planeGeometry attach="geometry" args={[2, 0.7]} />
        <meshBasicMaterial
          attach="material"
          map={registerButtonTexture}
          transparent
          opacity={0.7}
        />
      </mesh>
      <Text
        fontSize={0.2}
        maxWidth={300}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="/fonts/Alacrity Sans Light.ttf"
        // anchorX={"right"}
      >
        Register
        <meshStandardMaterial
          ref={meshRef}
          attach="material"
          // color={"#9AF0F4"}
          emissive={"#9AF0F4"}
          toneMapped={false}
        />
      </Text>
    </group>
  );
}
