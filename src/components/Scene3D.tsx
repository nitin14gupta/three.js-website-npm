import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import '../extend';

interface Scene3DProps {
  children: React.ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  backgroundColor?: string;
  ambientLightIntensity?: number;
}

export const Scene3D: React.FC<Scene3DProps> = ({
  children,
  className = '',
  cameraPosition = [0, 5, 10],
  backgroundColor = '#000000',
  ambientLightIntensity = 0.5,
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: cameraPosition }}
        style={{ background: backgroundColor }}
      >
        <Environment preset="city" />
        <hemisphereLight intensity={ambientLightIntensity} />
        <spotLight position={[10, 10, 5]} angle={0.15} penumbra={1} intensity={1} />
        <OrbitControls enableDamping />
        {children}
      </Canvas>
    </div>
  );
};

export default Scene3D;