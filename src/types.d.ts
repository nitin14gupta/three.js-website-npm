/// <reference types="@react-three/fiber" />
import { Object3DNode } from '@react-three/fiber';
import { Group, Object3D } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      hemisphereLight: JSX.IntrinsicElements['mesh'];
      spotLight: JSX.IntrinsicElements['mesh'];
      primitive: { object: any; [key: string]: any };
      group: Object3DNode<Group, typeof Group>;
    }
  }
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    hemisphereLight: Object3DNode<Object3D, typeof Object3D>;
    spotLight: Object3DNode<Object3D, typeof Object3D>;
    group: Object3DNode<Group, typeof Group>;
    primitive: { object: any; [key: string]: any };
  }
} 