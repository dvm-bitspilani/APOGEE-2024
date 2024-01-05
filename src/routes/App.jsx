import "../styles/App.scss"

import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import { motion } from "framer-motion"
import { Loader } from "@components/Loader"
import { Scene } from "@components/Landing/Scene"

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y : 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
    <Canvas camera={{ fov: 75, position: [3,3,5]}}>
      <Suspense fallback={<Loader/>}>
        <OrbitControls />
        <ambientLight />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Scene />
      </Suspense>
    </Canvas>
    </motion.div>
  )
}

export default App
