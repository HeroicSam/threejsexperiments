import { Suspense, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function App() {

  const object = useLoader(GLTFLoader, 'grass.glb');
  console.log(object);

  return (
    <Canvas camera={{near: 0.01, far: 110, fov: 40 }}>
      <Suspense>
        <primitive object={object.scene} />
        <OrbitControls />
        <Environment preset='apartment' />
      </Suspense>
    </Canvas>
  )
}

export default App
