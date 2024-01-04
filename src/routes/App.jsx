import "../styles/App.scss"

import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import { motion } from "framer-motion"

import { Link } from "react-router-dom"

function Scene() {

  const {camera} = useThree()

  camera.lookAt(0,0,0)

  useFrame((state, delta) => {
    // console.log(camera.position)
  })

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y : 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
    <Canvas camera={{ fov: 75, position: [3,3,5]}}>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Scene />
    </Canvas>
    </motion.div>
  )
}

export default App
