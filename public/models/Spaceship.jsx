import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/spaceship.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.027, 0.001, 0]} rotation={[-Math.PI / 2, -0.096, 0]} scale={0.673}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[250.103, 91.618, 1544.81]} rotation={[Math.PI / 2, 0, 0]} scale={500}>
            <mesh geometry={nodes.ship_2_ship_2_0.geometry} material={materials.ship_2} />
            <mesh geometry={nodes.Slice_Emission_0.geometry} material={materials.Emission} position={[-0.125, -0.012, 0]} />
          </group>
          <mesh geometry={nodes.ship_bg_backed_0.geometry} material={materials.backed} position={[0, 0, 137.09]} rotation={[-Math.PI / 2, 0, 0]} scale={500} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/spaceship.glb')
