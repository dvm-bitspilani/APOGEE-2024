import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import earthImg from '/images/earth.jpg'
import * as THREE from 'three'
import { useControls } from 'leva'

export default function Earth() {
    const earthRef = useRef()
    const [earthTexture] = useLoader(THREE.TextureLoader, [earthImg])

    // const {position, rotation} = useControls('Earth', {
    //     position: {
    //         value: [2,-1,-2],
    //         step: 1,
    //         min: -10,
    //         max: 10
    //     },
    //     rotation: {
    //         value: [1, 1, 1],
    //         step: 0.1,
    //         min: -Math.PI,
    //         max: Math.PI
    //     }
    // })

    useFrame(() => {
        earthRef.current.rotation.y += 0.0005
    })

  return (
    <mesh ref={earthRef} position={[2,-1,-2]} rotation={[1,1,1]} scale={0.3}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>

  )
}
