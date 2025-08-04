import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export default function RoboModel(props) {
  const { scene } = useGLTF('/assets/robo.glb');

  let scale = 5;
  let position = [0, 0, 0];

  const width = window.innerWidth;

  if (width <= 480) {
    scale = 4.2;
    position = [0, -1.2, 0];
  } else if (width <= 768) {
    scale = 4.5;
    position = [0, -1.4, 0];
  } else if (width <= 1024) {
    scale = 4.8;
    position = [0, -1.6, 0];
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

  return <primitive object={scene} {...props} scale={scale} position={position} />;
}
