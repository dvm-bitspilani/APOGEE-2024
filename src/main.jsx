import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import { BrowserRouter as Router } from "react-router-dom";
import AnimationWrapper from "./AnimationWrapper";

import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AnimationWrapper />
      <SpeedInsights
        includeLighthouse={true}
        includePsi={true}
        psiStrategy="mobile"
        lighthouseStrategy="mobile"
      />
    </Router>
  </React.StrictMode>,
);
