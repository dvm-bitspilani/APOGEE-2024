import { Text } from "@react-three/drei";

export const createNewText = (
  text,
  rotation,
  position,
  fontSize,
  font,
  material,
  maxWidth,
  onClick,
  textAlign,
  onPointerEnter,
  onPointerLeave,
) => {
  maxWidth === undefined ? (maxWidth = 50) : 0;
  onClick === undefined ? (onClick = null) : 0;
  onPointerEnter === undefined ? (onPointerEnter = null) : 0;
  onPointerLeave === undefined ? (onPointerLeave = null) : 0;
  textAlign === undefined ? (textAlign = "left") : 0;

  return (
    <Text
      rotation={rotation}
      position={position}
      maxWidth={maxWidth}
      fontSize={fontSize}
      font={font}
      material={material}
      onClick={onClick}
      textAlign={textAlign}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {text}
    </Text>
  );
};
