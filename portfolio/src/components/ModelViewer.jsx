// components/ModelViewer.jsx
import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import Spinner from './Spinner'
import TopBar from './TopBar'
import SideBar from './SideBar'
import HomeButton from './Home'
function Model() {
  const gltf = useGLTF('/src/assets/mainmodel.glb')
  return <primitive object={gltf.scene} dispose={null} scale={2} />
}

export default function ModelViewer() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <HomeButton />
      <TopBar />
      <SideBar />
      {loading && <Spinner />}
      <Canvas style={{ height: '100vh', width: '100vw' }} camera={{ position: [-300, 0, 0] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableDamping={true} dampingFactor={0.1} rotateSpeed={1.5} enableZoom={false} />
      </Canvas>
    </div>
  )
}
