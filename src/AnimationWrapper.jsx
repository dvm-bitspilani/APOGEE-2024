import { useEffect } from "react";

import App from "@routes/App.jsx";
import Register from "@routes/Register.jsx";
import Events from "@routes/Events.jsx";
import CategoryEvents from "@routes/CategoryEvents.jsx";
import Speakers from "./routes/Speakers";
import ComingSoon from "@routes/ComingSoon.jsx";

import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import ReactGa from "react-ga4";

import state from "./components/state";

export default function AnimationWrapper() {
  ReactGa.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);

  useEffect(() => {
    state.isMobile = window.innerWidth < 768;
    console.log(import.meta.env)
  }, []);

  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:category" element={<CategoryEvents />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/*" element={<ComingSoon />} />
      </Routes>
    </AnimatePresence>
  );
}
