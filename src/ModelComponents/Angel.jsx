import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import useStore from "../useStore";
import { useFrame } from "@react-three/fiber";
import angelfrag from '../glsl/angelfrag';
import angelvert from '../glsl/angelvert';
import { useEffect } from "react";


export function Angel(props) {
  // state
  const { updateAudioData } = useStore(state => state);
  const rawmaterial = useRef();
  const planeRef = useRef();

  // uniforms
  const uniforms = useMemo(() => ({
    uTime: {
      value: 1.0,
    },
    uMouse: {
      value: new THREE.Vector2(0, 0), // Initialize with default mouse position
    },
    uResolution: {
      value: new THREE.Vector2(window.innerWidth, window.innerHeight), // Initialize with screen resolution
    },
    uAverage: {
        value: { value: new Float32Array(512)}, // Initialize average uniform
      },
    uBigWavesElevation: { value: 0.2 },
    uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
    uDepthColor: { value: new THREE.Color('#0000cf') },
    uSurfaceColor: { value: new THREE.Color('#8888ff') },
    uColorOffset: { value: 0.08 },
    uColorMultiplier: { value: 5 },
    uSound :{value:0}

  }), []);

  // animation
  useFrame((_state, delta)=>{
    rawmaterial.current.uniforms.uTime.value += delta;
    if(rawmaterial.current){
          const { average } = useStore.getState();
          rawmaterial.current.uniforms.uAverage.value = average; // Update shader with the average value
    }

  })

 useEffect(() => {
   const count = planeRef.current?.attributes.position.count;
   const randoms = new Float32Array(count);
   for (let i = 0; i < count; i++) {
     randoms[i] = Math.random();
   }

   const handleMouseMove = (event) => {
      uniforms.uMouse.value.x = event.clientX / window.innerWidth;
      uniforms.uMouse.value.y = 1 - (event.clientY / window.innerHeight); // Invert y-axis if necessary
   };

    window.addEventListener('mousemove', handleMouseMove);

    // Start audio data updates
    updateAudioData();



   planeRef.current.setAttribute(
     "aRandom",
     new THREE.BufferAttribute(randoms, 1)
   );

   return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

 },[planeRef.current, uniforms, updateAudioData]);


  return (

  <group position={[-1,-1.8,0]} rotation={[0.2,0,0]}>
    <mesh {...props} rotation={[Math.PI * -0.5,0,0.9]} position={[-1.8,-2,-7.8]} >
      <planeGeometry args={[10, 10, 128, 128]} ref={planeRef} />
      <rawShaderMaterial ref={rawmaterial} wireframe={true} depthWrite={false} blending={THREE.AdditiveBlending} vertexColors={true} fragmentShader={angelfrag} vertexShader={angelvert} side={THREE.DoubleSide} uniforms={uniforms}/>
    </mesh>
    <mesh {...props} rotation={[Math.PI * 0.5,0,2.25]} position={[-8,-2,0]} >
      <planeGeometry args={[10, 10, 128, 128]} ref={planeRef} />
      <rawShaderMaterial ref={rawmaterial} wireframe={true} depthWrite={false} blending={THREE.AdditiveBlending} vertexColors={true} fragmentShader={angelfrag} vertexShader={angelvert} side={THREE.DoubleSide} uniforms={uniforms}/>
    </mesh>
   
  </group>
  );
}

