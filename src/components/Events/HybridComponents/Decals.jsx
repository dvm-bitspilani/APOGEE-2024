import { Decal, useTexture } from "@react-three/drei";

export default function Decals({
  incubatorReact,
  incubatorThree,
  project1Gsap,
  project1Three,
  project2Three,
  project2Blender,
  project3Three,
  project3Rapier,
  project3Blender,
  project4Three,
  project4React,
  project4Gsap,
  project4Blender,
  project5Three,
  project5React,
  project5Gsap,
  project5Blender,
}) {
  const [react, three, blender, greensock, rapier] = useTexture([
    "./textures/react.png",
    "./textures/three.png",
    "./textures/blender.png",
    "./textures/gsap.png",
    "./textures/rapier.png",
  ]);

  const initNewDecal = (decalArgs, color, map, toneMapped) => {
    toneMapped === undefined ? (toneMapped = true) : 0;

    return (
      <Decal
        position={[decalArgs.x, decalArgs.y, decalArgs.z]}
        rotation={[0, decalArgs.rot, 0]}
        scale={decalArgs.scale}
      >
        <meshStandardMaterial
          color={color}
          map={map}
          toneMapped={toneMapped}
          transparent
          polygonOffset
          polygonOffsetFactor={-10}
        />
      </Decal>
    );
  };
  return (
    <>
      {initNewDecal(incubatorReact, [0.5, 0.5, 3.5], react, false)}
      {initNewDecal(incubatorThree, [0.5, 0.5, 3.5], three, false)}

      {initNewDecal(project1Gsap, 0x999999, greensock)}
      {initNewDecal(project1Three, 0xffffff, three)}

      {initNewDecal(project2Three, 0xffffff, three)}
      {initNewDecal(project2Blender, 0xaaaaaa, blender)}

      {initNewDecal(project3Three, 0xffffff, three)}
      {initNewDecal(project3Rapier, 0xaaaaaa, rapier)}
      {initNewDecal(project3Blender, 0xaaaaaa, blender)}

      {initNewDecal(project4Three, 0xffffff, three)}
      {initNewDecal(project4React, 0xffffff, react)}
      {initNewDecal(project4Gsap, 0xaaaaaa, greensock)}
      {initNewDecal(project4Blender, 0xaaaaaa, blender)}

      {initNewDecal(project5Three, 0xffffff, three)}
      {initNewDecal(project5React, 0xffffff, react)}
      {initNewDecal(project5Gsap, 0xaaaaaa, greensock)}
      {initNewDecal(project5Blender, 0xaaaaaa, blender)}
    </>
  );
}
