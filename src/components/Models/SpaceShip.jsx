

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Spaceship(props) {
  const { nodes, materials } = useGLTF('/models/rocket9.glb')
  return (
    <group {...props} dispose={null} position={[-100,-200,-90]}>
      <mesh geometry={nodes.Rocket.geometry} material={materials['Rocket.003']} position={[95.449, -1.116, 63.512]} />
    </group>
  )
}

useGLTF.preload('/models/rocket9.glb')
