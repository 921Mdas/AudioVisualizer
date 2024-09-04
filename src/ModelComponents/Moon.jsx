import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Moon = ({ centralPosition = [0, 0, 0], orbitRadius =5, orbitSpeed = 0.3, ...props }) => {
  const moonRef = useRef();
  const angleRef = useRef(0);

  useFrame((state, delta) => {
    angleRef.current += orbitSpeed * delta;

    const x = centralPosition[0] + orbitRadius * Math.cos(angleRef.current);
    const z = centralPosition[2] + orbitRadius * Math.sin(angleRef.current);
    const y = centralPosition[1];

    if (moonRef.current) {
      moonRef.current.position.set(x, y + 2, z);
    }
  });

  return (
    <mesh ref={moonRef} {...props} scale={0.5} position={[0,0,0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

export default Moon;
