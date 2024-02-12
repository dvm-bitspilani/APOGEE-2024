import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import { motion } from "framer-motion";
import Loader from "@components/Loader";
// import { Scene } from "@components/Landing/Scene";
import { Hud } from "@components/Landing/HUD";
import ContactHUD from "@components/Contact/ContactHUD";
// import EffectComposerLayer from "../components/EffectComposer";
// import Background from "../components/Landing/Background";
import Experience from "../components/Landing/Experience";
// import { OrbitControls } from "@react-three/drei";
import state from "@components/state";

import AboutUs from "@components/About/AboutUs";

function App() {
  useEffect(() => {
    state.isHamOpen = false;
    state.activeSection = 0;

    return () => {
      state.isHamOpen = false;
      state.activeSection = 0;
      state.isMoving = false;
      state.targetSection = 0;
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <Canvas>
        {/* <EffectComposerLayer /> */}
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={1.5} />
          <Experience />
        </Suspense>
        {/* <Stats /> */}
      </Canvas>
      <Hud />
      <ContactHUD />
      <AboutUs />
    </motion.div>
  );
}

export default App;
