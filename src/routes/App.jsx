import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"

import { motion } from "framer-motion"
import { Loader } from "@components/Loader"
import { Scene } from "@components/Landing/Scene"
import { Hud } from "@components/Landing/HUD"

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y : 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
    <Canvas camera={{ fov: 75, position: [3,3,5]}}>
      <Suspense fallback={<Loader/>}>
        <Stars radius={15} depth={50} count={3000} factor={4} saturation={5} fade speed={0}/>
        {/* <OrbitControls /> */}
        <ambientLight />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Scene />
      </Suspense>
    </Canvas>
    <Hud />
    </motion.div>
  )
}

export default App
