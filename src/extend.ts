import { extend } from '@react-three/fiber';
import {
  HemisphereLight,
  SpotLight,
  Group,
  Object3D,
  PerspectiveCamera,
} from 'three';

// Extend Three.js elements to make them available in JSX
extend({
  HemisphereLight,
  SpotLight,
  Group,
  Object3D,
  PerspectiveCamera,
}); 