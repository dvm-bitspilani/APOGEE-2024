import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Stats } from "@react-three/drei";

import { motion } from "framer-motion";
import Loader from "@components/Loader";
import { Scene } from "@components/Landing/Scene";
import { Hud } from "@components/Landing/HUD";
import EffectComposerLayer from "../components/EffectComposer";
// import Background from "../components/Landing/Background";
import Experience from "../components/Landing/Experience";


function App() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <Canvas camera={{ fov: 75, position: [0, 0, 0] }}>
        <EffectComposerLayer />
        <Suspense fallback={<Loader />}>
          {/* <OrbitControls /> */}
          <ambientLight intensity={0.5}/>
          {/* <directionalLight position={[10, 10, 5]} intensity={1} /> */}
          {/* <Scene /> */}
          {/* <axesHelper args={[5]} /> */}
          <Experience />
        </Suspense>
        <Stats />
      </Canvas>
      <Hud />
    </motion.div>
  );
}

export default App;
