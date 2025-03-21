# Three.js Component Library

A modern React component library for Three.js that provides reusable 3D components and hooks for easy integration into React applications.

## Features

- 🎨 Customizable 3D components
- 🎮 Powerful hooks for Three.js scene management
- 🎯 TypeScript support
- 🎪 Tailwind CSS styling support
- 📦 Zero dependencies (peer dependencies required)

## Installation

```bash
npm install threejs-magic three @react-three/fiber @types/three @types/react-dom @types/react
```

## Peer Dependencies

This library requires the following peer dependencies:

- react: ^18.0.0
- react-dom: ^18.0.0
- three: ^0.160.0
- @react-three/fiber: ^8.15.0
- @types/three: ^0.160.0

## Basic Usage

```tsx
import { Scene3D } from 'your-threejs-library-name';

function App() {
  return (
    <Scene3D>
      {/* Your 3D content here */}
    </Scene3D>
  );
}
```

## Components

### Scene3D
A wrapper component that sets up the Three.js scene with proper camera and lighting.

### Model3D
A component for loading and displaying 3D models with customizable properties.

## Hooks

### useAnimation
Custom hook for handling animations in Three.js scenes.

### useControls
Hook for implementing camera controls and interactions.

### useLoader
Hook for efficiently loading 3D models and textures.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Your Name]
