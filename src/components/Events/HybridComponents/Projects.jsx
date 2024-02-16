import { useVideoTexture } from "@react-three/drei";

export default function Projects({
  project1,
  project2,
  project3,
  project4,
  project5,
}) {
  const videoProps = { muted: true, loop: true };

  const textureProject1 = useVideoTexture("./videos/midwifery.mp4", videoProps),
    textureProject2 = useVideoTexture("./videos/3DWorkspace.mp4", videoProps),
    textureProject3 = useVideoTexture("./videos/boatProject.mp4", videoProps),
    textureProject4 = useVideoTexture("./videos/portfolio.mp4"),
    textureProject5 = useVideoTexture("./videos/bikeConcept.mp4", videoProps);

  textureProject1.flipY = false;
  textureProject2.flipY = false;
  textureProject3.flipY = false;
  textureProject4.flipY = false;
  textureProject5.flipY = false;

  return (
    <>
      <mesh geometry={project1.geometry}>
        <meshStandardMaterial map={textureProject1} color={0x797979} />
      </mesh>
      <mesh geometry={project2.geometry}>
        <meshStandardMaterial map={textureProject2} color={0x909090} />
      </mesh>
      <mesh geometry={project3.geometry}>
        <meshStandardMaterial map={textureProject3} color={0xaaaaaa} />
      </mesh>
      <mesh geometry={project4.geometry}>
        <meshStandardMaterial map={textureProject4} color={0xaaaaaa} />
      </mesh>
      <mesh geometry={project5.geometry}>
        <meshBasicMaterial map={textureProject5} color={0xffffff} />
      </mesh>
    </>
  );
}
