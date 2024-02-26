

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/rocket.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="emite_1_a_13" position={[0, 0, -873.78]}>
                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.emit} />
              </group>
              <group name="emite_1_b_14" position={[0, 0, -37.203]}>
                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.emit} />
              </group>
              <group name="p_103_spaceship005_0" scale={50}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.spaceship_main} />
              </group>
              <group name="p_103_spaceship009_1" scale={50}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.spaceship_main} />
              </group>
              <group name="p_103_spaceship010_2" scale={50}>
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.spaceship_main} />
              </group>
              <group name="p_103_spaceship011_3" scale={50}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.spaceship_main} />
              </group>
              <group name="p_103_spaceship015_4" scale={50}>
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.spaceship_main} />
              </group>
              <group name="p_103_spaceship001_5" scale={50}>
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.spaceship_main} />
              </group>
              <group name="p_103_spaceship006_6" scale={50}>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.spaceship_main} />
              </group>
              <group name="p_103_spaceship_RPanel_7" scale={50}>
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.spaceship_main} />
              </group>
              <group name="p_103_spaceship003_RPanel_8" scale={50}>
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.spaceship_main} />
              </group>
              <group name="p_103_spaceship002_RPanel_9" scale={50}>
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.spaceship_main} />
              </group>
              <group name="p_103_spaceship004_RPanel_10" scale={50}>
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.spaceship_main} />
              </group>
              <group name="RCables001_11" scale={50}>
                <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.misc} />
              </group>
              <group name="RCables001_Flanges_12" scale={50}>
                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.misc} />
              </group>
              <group name="p_103_spaceship007_RScatter001_15" scale={50}>
                <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.misc} />
              </group>
              <group name="emit_2_16" scale={50}>
                <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.emit2} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/rocket.glb')
