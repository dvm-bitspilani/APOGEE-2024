import { Suspense, useEffect, useState } from "react";
// import { useWindowSize } from "rooks";
import { Canvas } from "@react-three/fiber";
import "../styles/events/events.css";
import Experience from "../components/Events/Experience";
import { ScrollControls } from "@react-three/drei";

import Instructions from "../components/ContactEvents/Instructions";

import { motion } from "framer-motion";

// Effect Composer
import EffectComposer from "@components/EffectComposer";

// State Management
import state from "@components/state";
import { useSnapshot } from "valtio";
import Controller from "../components/ContactEvents/Controller";

function EventsPage() {
  const snap = useSnapshot(state);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "APOGEE '2024 | Events";

    async function fetchData() {
      const response = await fetch(
        "https://bits-apogee.org/2024/main/registrations/get_event_categories"
      );
      const data = await response.json();
      state.numCategories = data.data.length;
      state.categories = data.data;
      setLoading(false);
    }
    fetchData();

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
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0 }}
    >
      {loading ? (
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Loading...
        </h1>
      ) : (
        <>
          <Canvas>
            {/* <OrbitControls /> */}
            <Suspense fallback={null}>
              {/* <EffectComposer /> */}
              <ambientLight intensity={1} />
              <pointLight position={[0, -0.2, 2]} intensity={5} />
              <ScrollControls
                pages={state.numCategories}
                damping={0.3}
                horizontal={snap.isMobile ? true : false}
              >
                <Experience />
              </ScrollControls>
            </Suspense>
            {/* <Stats /> */}
            {/* <AxesHelper /> */}
          </Canvas>
          <Controller route="/" text="HOME" />
          <Instructions text="Scroll to start the visit, click on any Category to see events" />
        </>
      )}
    </motion.div>
  );
}

export default EventsPage;
