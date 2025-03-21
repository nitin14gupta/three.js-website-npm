import { useFrame } from '@react-three/fiber';
import { useRef, useCallback } from 'react';
import { Object3D, Vector3 } from 'three';

export interface AnimationConfig {
  rotationSpeed?: Vector3;
  oscillation?: {
    axis: 'x' | 'y' | 'z';
    speed: number;
    amplitude: number;
  };
  customAnimation?: (object: Object3D, delta: number) => void;
}

export const useAnimation = (config: AnimationConfig = {}) => {
  const objectRef = useRef<Object3D | undefined>(undefined);
  const timeRef = useRef<number>(0);

  const animate = useCallback((delta: number) => {
    if (!objectRef.current) return;

    const obj = objectRef.current;
    timeRef.current += delta;

    // Handle rotation
    if (config.rotationSpeed) {
      obj.rotation.x += config.rotationSpeed.x * delta;
      obj.rotation.y += config.rotationSpeed.y * delta;
      obj.rotation.z += config.rotationSpeed.z * delta;
    }

    // Handle oscillation
    if (config.oscillation) {
      const { axis, speed, amplitude } = config.oscillation;
      const position = Math.sin(timeRef.current * speed) * amplitude;
      obj.position[axis] = position;
    }

    // Handle custom animation
    if (config.customAnimation) {
      config.customAnimation(obj, delta);
    }
  }, [config]);

  useFrame((_, delta) => {
    animate(delta);
  });

  return objectRef;
};

export default useAnimation; 