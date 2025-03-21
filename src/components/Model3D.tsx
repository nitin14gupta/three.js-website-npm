import React from 'react';
import { ThreeEvent } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Vector3 } from 'three';
import { useAnimation } from '../hooks/useAnimation';
import '../extend';

export interface Model3DProps {
  url: string;
  scale?: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  animate?: boolean;
  rotationSpeed?: {
    x: number;
    y: number;
    z: number;
  };
  onClick?: (event: ThreeEvent<MouseEvent>) => void;
}

export const Model3D: React.FC<Model3DProps> = ({
  url,
  scale = [1, 1, 1],
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  animate = false,
  rotationSpeed = { x: 0, y: 0.01, z: 0 },
  onClick,
}) => {
  const { scene } = useGLTF(url);
  
  const modelRef = useAnimation(
    animate
      ? {
          rotationSpeed: new Vector3(
            rotationSpeed.x,
            rotationSpeed.y,
            rotationSpeed.z
          ),
        }
      : {}
  );

  return (
    <group
      ref={modelRef}
      scale={scale}
      position={position}
      rotation={rotation}
      onClick={onClick}
    >
      <primitive object={scene} />
    </group>
  );
};

export default Model3D; 