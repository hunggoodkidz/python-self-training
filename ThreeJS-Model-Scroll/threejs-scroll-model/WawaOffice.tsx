/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/WawaOffice.glb -t 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['01_office']: THREE.Mesh
    ['02_library']: THREE.Mesh
    ['03_attic']: THREE.Mesh
  }
  materials: {
    ['01']: THREE.MeshStandardMaterial
    ['02']: THREE.MeshStandardMaterial
    ['03']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./models//WawaOffice.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
      <mesh geometry={nodes['02_library'].geometry} material={materials['02']} position={[0, 2.114, -2.23]} />
      <mesh geometry={nodes['03_attic'].geometry} material={materials['03']} position={[-1.97, 4.227, -2.199]} />
    </group>
  )
}

useGLTF.preload('./models/WawaOffice.glb')
