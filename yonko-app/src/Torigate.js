import ReactDOM from 'react-dom'
import React, { Suspense, useState } from 'react'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader'
import { Stage, OrbitControls } from '@react-three/drei'
import physic from './torigate.gltf'
import useIsVisible from "./Scroll.js"
import * as THREE from "three";

function Physic () {
  const onScroll=() => {
    console.log("scroll")
  }
  var x = 0.001
  var y = 0.03
  var p = 0.01
  var r = 1
  var py = 0.01
  var timeelapsed = 0
  const gltf = useLoader(GLTFLoader, physic)
  useFrame((state, delta) => {
    timeelapsed += delta
    if (r == 1) {
      gltf.scene.position.y = Math.cos( timeelapsed ) * 0.4;
    if (gltf.scene.rotation.x > 0.3){
      x = -0.05
    } else if (gltf.scene.rotation.x < 0){
      x = 0.05
    }
    if (gltf.scene.rotation.y > 3.1){
      y = 0
    }
       /* r = 0
        console.log( gltf.scene.rotation.x,  gltf.scene.rotation.y,  gltf.scene.rotation.z)
      } else if (gltf.scene.rotation.y>2.5) {
        y = 0.01
      } else if (gltf.scene.rotation.y<2.5) {
        y = 0.01
      } */
      
      if (gltf.scene.position.y > 0.5){
        
        p = -0.5
      } else if (gltf.scene.position.y < -0.5){
        p = 0.1
      }
      /*
      
      gltf.scene.position.z += p
      gltf.scene.rotation.x += x
      */
      gltf.scene.rotation.y += y
    }
    
  })

  return (
      <primitive autoRotate object={gltf.scene} position={[0, 0, 0]} rotation={[0, 0, 0]} />
    )
}


const  Torigate = () => {
  return (
    <>
    <Suspense  fallback="loading">
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 1, 20] }} 
       
      dpr={[1, 2]}
      style={{ height: 800 }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={2} position={[0, 300, 400]} />
          <Physic />
      </Canvas>
      </Suspense>
    </>
  )
}

export default Torigate;
