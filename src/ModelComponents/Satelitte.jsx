import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import satellite from '../models/satellite.glb';

export function SAT(props) {
  const { nodes } = useGLTF(satellite);
  const satelliteRef = useRef();

  useFrame(() => {
    // Increment the rotation on the y-axis to make the satellite spin
    if (satelliteRef.current) {
      satelliteRef.current.rotation.z += 0.001; // Adjust the speed by changing the value
    }
  });

  return (
    <group {...props} dispose={null} ref={satelliteRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        // rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          metalness={1}
          roughness={0.05} // Adjust to get the desired level of shininess
          color="silver" // You can adjust the color to your preference
          envMapIntensity={1} // This can enhance the reflection if using an environment map
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(satellite);
