import { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  const displayProgress = Math.ceil(progress);

  const [bars, setBars] = useState([]);

  useEffect(() => {
    const newBars = [];
    for (let i = 1; i <= 20; i++) {
      if (i <= displayProgress / 5 + 1) {
        newBars.push(
          <div
            key={`bar-${i}`}
            className="bar"
            style={{ backgroundColor: "#9AF0F4" }}
          ></div>
        );
      }
    }
    setBars(newBars);
  }, [displayProgress]);

  return (
    <Html fullscreen>
      <div className="loader">
        <div className="loaderWrapper">
          <span className="loading">Loading...</span>
          <div className="progressBar">{bars}</div>
        </div>
      </div>
    </Html>
  );
}
