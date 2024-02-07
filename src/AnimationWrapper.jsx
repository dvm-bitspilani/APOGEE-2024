import React from "react";

import App from "@routes/App.jsx";
import Register from "@routes/Register.jsx";
import ComingSoon from "@routes/ComingSoon.jsx";

import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import {
  Route,
  Routes,
} from "react-router-dom";
import ReactGa from "react-ga4";

export default function AnimationWrapper() {
  ReactGa.initialize("G-93KSJ6NXN3");
    
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<ComingSoon />} />
      </Routes>
    </AnimatePresence>
  );
}