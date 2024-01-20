import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Stats, ScrollControls } from "@react-three/drei";

import { motion } from "framer-motion";
import Loader from "@components/Loader";
import { Scene } from "@components/Landing/Scene";
import { Hud } from "@components/Landing/HUD";
import EffectComposerLayer from "../components/EffectComposer";
// import Background from "../components/Landing/Background";
import Experience from "../components/Landing/Experience";
import { OrbitControls } from "@react-three/drei";

function App() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <Canvas camera={{ fov: 75, position: [0, 0, 0] }}>
        {/* <EffectComposerLayer /> */}
        <Suspense fallback={<Loader />}>
          {/* <OrbitControls /> */}
          <ambientLight intensity={0.5} />
          {/* <directionalLight position={[10, 10, 5]} intensity={1} /> */}
          {/* <Scene /> */}
          {/* <axesHelper args={[5]} /> */}
          <ScrollControls
            pages={10}
            damping={0.5}
            style={{
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
              width: "auto",
              height: "auto",
              animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
              animationDelay: "5s",
              // pointerEvents: 'none',
              opacity: 0,
            }}
          >
            <Experience />
          </ScrollControls>
        </Suspense>
        <Stats />
      </Canvas>
      <Hud />
    </motion.div>
  );
}

export default App;
