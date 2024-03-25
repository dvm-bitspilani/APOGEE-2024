import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  const displayProgess = Math.ceil(progress)
  // console.log(progress);
  return (
    <Html fullscreen>
      <div style={{
        // width:"100%",
        // height:"100%",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translateY(-50%) translateX(-50%)",
        fontSize:"1.5rem"
      }}>
      {displayProgess} % Loaded
      </div>
    </Html>
  );
}
