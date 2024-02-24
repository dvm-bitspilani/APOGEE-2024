import { Suspense, useEffect } from "react";
// import { useWindowSize } from "rooks";
import { Canvas } from "@react-three/fiber";
import "../styles/events/events.css";
import Experience from "../components/Speakers/Experience";
import { ScrollControls } from "@react-three/drei";

import { motion } from "framer-motion";

// Effect Composer
import EffectComposer from "@components/EffectComposer";

// State Management
import state from "@components/state";
import { useSnapshot } from "valtio";

function Speakers() {
  const snap = useSnapshot(state);

  useEffect(() => {
    document.title = "APOGEE '2024 | Speakers";
    return () => {
      document.title = "APOGEE '2024 | Celestial Epiphany";
    };
  }, []);
  
  return (
    <motion.div
      className="eventsContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
    >
      <Canvas>
        {/* <OrbitControls /> */}
        <Suspense fallback={null}>
          <EffectComposer />
          <ambientLight intensity={1.5}>
          <ScrollControls
            pages={state.numCategories}
            damping={0.3}
            horizontal={snap.isMobile ? true : false}
          >
            <Experience />
          </ScrollControls>
          </ambientLight>
        </Suspense>
        {/* <Stats /> */}
        {/* <AxesHelper /> */}
      </Canvas>
    </motion.div>
  );
}

export default Speakers;
