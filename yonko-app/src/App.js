import ReactDOM from 'react-dom'
import React, { Suspense, useState } from 'react'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader'
import { Stage, OrbitControls } from '@react-three/drei'
import duck from './torigate.gltf'

function Duck() {
  var x = 0.001
  var y = 0.001
  var p = 0.01
  const gltf = useLoader(GLTFLoader, duck)
  useFrame((state, delta) => {
    gltf.scene.rotation.x += x
    if (gltf.scene.rotation.x > 0.3){
      x = -0.001
    } else if (gltf.scene.rotation.x < 0){
      x = 0.001
    }
    gltf.scene.rotation.y += y
    if (gltf.scene.rotation.y > 1){
      y = -0.001
    } else if (gltf.scene.rotation.y < -0.5){
      y = 0.001
    }
    gltf.scene.position.y += p
    if (gltf.scene.position.y > 0.5){
      p = -0.01
    } else if (gltf.scene.position.y < 0){
      p = 0.01
    }
  })

  return (
    <primitive autoRotate object={gltf.scene} position={[0, 0, 0]} rotation={[0, 0, 0]} />
  )
}

function App() {
  function lol() {
    console.log("scroll")
  }
  return (
    <>
      <Canvas onScroll={lol} camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 10, 20] }} 
       
      dpr={[1, 2]}
      style={{ height: 800 }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={2} position={[0, 300, 400]} />
        <Duck />
      </Canvas>
    </>
  )
}

export default App;
