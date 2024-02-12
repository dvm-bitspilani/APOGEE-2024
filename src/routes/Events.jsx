import { Suspense } from "react";
// import { useWindowSize } from "rooks";
import { Canvas } from "@react-three/fiber";
import "../styles/events/events.css";
import { ImageContainer } from "../components/Events/ImageContainer";

function EventsPage() {
  //   const { innerHeight, innerWidth } = useWindowSize();

  return (
    <div className="eventsContainer">
      <Canvas>
        <Suspense fallback={null}>
          {/* <Image position={[-, 0, 0]} /> */}
          <ImageContainer />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default EventsPage;
