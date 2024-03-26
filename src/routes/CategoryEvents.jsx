import { Suspense, useEffect, useState } from "react";
// import { useWindowSize } from "rooks";
import { Canvas } from "@react-three/fiber";
// import "../styles/events/events.css";
import Experience from "../components/ContactEvents/Experience";
import { ScrollControls } from "@react-three/drei";
import Loader from "../components/Loader";

import { motion } from "framer-motion";

// Effect Composer
import EffectComposer from "@components/EffectComposer";

// State Management
import state from "@components/state";
import { useSnapshot } from "valtio";

import { useParams } from "react-router-dom";
import Instructions from "../components/ContactEvents/Instructions";
import Controller from "../components/ContactEvents/Controller";

function EventsPage() {
  const params = useParams();

  const snap = useSnapshot(state);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Events | ${params.category}`;
    async function fetchData() {
      const response = await fetch(
        `https://bits-apogee.org/2024/main/registrations/events/${params.category}`
      );
      const data = await response.json();
      state.currentEvent = 1;
      state.numEvents = data.data.events.length;
      state.events = data.data.events;
      setLoading(false);
    }
    fetchData();
  }, [params.category]);

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
            <Suspense fallback={<Loader />}>
              {/* <EffectComposer /> */}
              <ambientLight intensity={1} />
              <pointLight position={[0, -0.2, 2]} intensity={5} />
              {/* <directionalLight position={[0, 0, 5]} intensity={1} /> */}
              <ScrollControls
                pages={state.numEvents}
                damping={0.3}
                horizontal={snap.isMobile ? true : false}
              >
                <Experience />
              </ScrollControls>
            </Suspense>
          </Canvas>
          <Controller route="/events" text="BACK" />
          <Instructions text="Scroll to start the visit, click on any events register button to see details" />
        </>
      )}
    </motion.div>
  );
}

export default EventsPage;
