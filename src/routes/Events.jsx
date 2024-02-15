import { Suspense, useEffect } from "react";
// import { useWindowSize } from "rooks";
import { Canvas } from "@react-three/fiber";
import "../styles/events/events.css";
import Experience from "../components/Events/Experience";
import { OrbitControls, ScrollControls, Stats } from "@react-three/drei";

import { motion } from "framer-motion";

// Effect Composer
import EffectComposer from "@components/EffectComposer";

// State Management
import state from "@components/state";

function EventsPage() {
  useEffect(() => {
    document.title = "APOGEE '2024 | Events";
    // document.body.style.height = `${100 * state.numCategories}vh`;
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
          <ScrollControls pages={state.numCategories} damping={0.3}>
            <Experience />
          </ScrollControls>
        </Suspense>
        <Stats />
        {/* <AxesHelper /> */}
      </Canvas>
    </motion.div>
  );
}

export default EventsPage;
