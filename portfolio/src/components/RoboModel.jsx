import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export default function RoboModel(props) {
  const { scene } = useGLTF('/assets/robo.glb');

  // Responsive scale based on screen width
  let scale = 5;
  if (window.innerWidth <= 480) {
    scale = 2.8;
  } else if (window.innerWidth <= 768 && window.innerWidth > 380) {
    scale = 3.0;
  }else if (window.innerWidth <= 768) {
    scale = 3.5;
  } else if (window.innerWidth <= 1024) {
    scale = 4.2;
  }

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        // Make the robot much brighter
        if (child.material) {
          child.material.emissiveIntensity = 5;
          child.material.metalness = 0.7;
          child.material.roughness = 0.2;
        }
      }
    });
  }, [scene]);

  // Responsive scale and position
  return <primitive object={scene} {...props} scale={scale} position={[0, 0, 0]} />;
}

