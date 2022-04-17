import ReactDOM from 'react-dom'
import React, { Suspense, useState } from 'react'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader'
import { Stage, OrbitControls } from '@react-three/drei'
import physic from './torigate.gltf'
import useIsVisible from "./Scroll.js"
import * as THREE from "three";
import "./styles.css"
import { useNavigate } from "react-router-dom"
import { unmountComponentAtNode, render } from "react-dom";



function Physic ({isScrolling, route}) {
  var y = 0.01
  var timeelapsed = 0
  const gltf = useLoader(GLTFLoader, physic)
  gltf.scene.scale.set(1, 1, 1)
  const [e, sete] = useState(0);

  

  useFrame((state, delta) => {
    
    timeelapsed += delta
      gltf.scene.position.y = Math.cos( timeelapsed ) * 0.4;
    if (gltf.scene.rotation.y > 3.1){
      y = 0
    }
    if (y == 0 && isScrolling==1){
     gltf.scene.position.z += 0.1
    }
    if (gltf.scene.position.z > 20) {
      sete(1)
      route("/welcome")
    }
    gltf.scene.rotation.y += y
  })
    return (
    
      <primitive classname="Torigate" autoRotate object={gltf.scene} position={[0,0,0]} rotation={[0, 0, 0]} />
      )
  }


const  Torigate = ({isScrolling}, {y}) => {
  const navigate = useNavigate()
  const vec = new THREE.Vector3()
function MoveCamera() {
  useFrame(({ camera }) => {
    camera.position.lerp(vec.set(0,0,20), 0.1)
  })
  return null
}
var e = 1
  y = -1
  return (
    <>
    <Suspense  fallback="loading">
      <Canvas camera={{position: [0, 0, 0] }} style={{height:800}}>
        <ambientLight intensity={0.5} />
        <MoveCamera />
        <spotLight intensity={2} position={[0, 300, 400]} />
          <Physic  isScrolling={isScrolling} route={navigate}/>
      </Canvas>
      </Suspense>
    </>
  )
}

export default Torigate;
