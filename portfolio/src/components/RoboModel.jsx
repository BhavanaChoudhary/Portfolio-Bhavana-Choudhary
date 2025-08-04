import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export default function RoboModel(props) {
  const { scene } = useGLTF('/assets/robo.glb');

  // Responsive scale based on screen width
  let scale = 5.5;
  if (window.innerWidth <= 480) {
    scale = 3.2;
  } else if (window.innerWidth <= 768 && window.innerWidth > 380) {
    scale = 4;
  } else if (window.innerWidth <= 768) {
    scale = 4.2;
  } else if (window.innerWidth <= 1024) {
    scale = 5;
  }

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          child.material.emissiveIntensity = 5;
          child.material.metalness = 0.7;
          child.material.roughness = 0.2;
        }
      }
    });
  }, [scene]);

  // Slightly lifted position
  return <primitive object={scene} {...props} scale={scale} position={[0, -0.3, 0]} />;
}
