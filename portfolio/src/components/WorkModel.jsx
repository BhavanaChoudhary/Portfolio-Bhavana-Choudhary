// WorkModel.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

const WorkModel = () => {
  const { scene } = useGLTF('/assets/otherworks.glb');

  return (
    <primitive 
      object={scene} 
      scale={[2, 2, 2]} 
      position={[0, -2, 0]}
      rotation={[0, 0.5, 0]}
    />
  );
};

export default WorkModel;