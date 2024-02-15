import { Text } from "@react-three/drei";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OpenButton(props) {
  const { position } = props;
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();
  const navigate = useNavigate();

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

  const handleNavigation = () => {
    navigate("/events/kernel");
  };

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={handleNavigation}
    >
      <mesh>
        <planeGeometry attach="geometry" args={[2, 0.5]} />
        <meshStandardMaterial attach="material" color={"#9AF0F4"} />
      </mesh>
      <meshBasicMaterial
        attach="material"
        color="#314557"
        opacity={0.2}
        transparent
      />
      <Text
        fontSize={0.2}
        maxWidth={300}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="/fonts/Alacrity Sans Bold.ttf"
      >
        Open Category
        <meshStandardMaterial
          ref={meshRef}
          attach="material"
          color={"#9AF0F4"}
          emissive={"#9AF0F4"}
          toneMapped={false}
        />
      </Text>
    </group>
  );
}
