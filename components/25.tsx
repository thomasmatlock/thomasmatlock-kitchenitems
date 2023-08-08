/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/25.glb --transform -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube256: THREE.Mesh
    Cube256_1: THREE.Mesh
    Cube256_2: THREE.Mesh
  }
  materials: {
    ['outliner 0.025']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/25-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 2.15, -2.29]}>
        <mesh geometry={nodes.Cube256.geometry} material={materials['outliner 0.025']} />
        <mesh geometry={nodes.Cube256_1.geometry} material={materials['outliner 0.025']} />
        <mesh geometry={nodes.Cube256_2.geometry} material={materials['outliner 0.025']} />
      </group>
    </group>
  )
}

useGLTF.preload('/25-transformed.glb')