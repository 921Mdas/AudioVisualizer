import React, { useRef, useEffect } from "react";
import useStore from "../useStore";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import Moon from "./Moon";

export const CoreCell = props => {
  return (
    <mesh {...props} position={[0, 3, 0]}>
      <sphereGeometry />
      <meshStandardMaterial
        emissive={"white"}
        emissiveIntensity={1}
        color={"white"}
        metalness={0.4}
        roughness={0.2}
      />
    </mesh>
  );
};



export function CellFractureSphere(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/cell.glb");
  const { actions, mixer } = useAnimations(animations, group);
  const { average } = useStore(state => state);
  const time = useRef(0);

  const outerMaterial = new THREE.MeshStandardMaterial({
    color: "#FFFFF0",
    metalness: 0.2,
    roughness: 0.1,
  });

  const insideMaterial = new THREE.MeshStandardMaterial({
    color: "#FFFFF0",
    metalness: 0.2,
    roughness: 0.1,
  });

  useEffect(() => Object.keys(actions).forEach(key => actions[key].play()), []);

  useFrame(_ => {
    // controls the speed of the animation
    mixer.timeScale = 1;
    // control of animation based on beat
    mixer.setTime(
      (time.current = THREE.MathUtils.lerp(
        1,
        average > -120 ? Math.abs(average * 0.0003) : 0,
        0.5
      ))
    );
    // variation of color based on beat
    insideMaterial.color
      .copy(new THREE.Color("#FFFFF0"))
      .multiplyScalar(average * 0.01);

    outerMaterial.color
      .copy(new THREE.Color("#FFFFF0"))
      .multiplyScalar(average * 0.01);
  });

  return (
    <>
    
    <group ref={group} {...props} dispose={null} scale={0.5} position={[-5,0,-10]} rotation={[0,0.55,0]}>
      <group name="Scene">
        <group name="Sphere_cell" position={[-0.01, 1.99, -0.87]}>
          <mesh
            name="Sphere_cell095"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell095.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell095_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell095_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell001" position={[-0.07, 2.01, 0.53]}>
          <mesh
            name="Sphere_cell096"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell096.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell096_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell096_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell003" position={[-0.79, 1.63, -0.18]}>
          <mesh
            name="Sphere_cell002_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell002_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell002_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell002_2.geometry}
            material={insideMaterial}
          />
        </group>
        <mesh
          name="Sphere_cell010"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell010.geometry}
          material={insideMaterial}
          position={[0.14, 2.77, -0.1]}
        />
        <group name="Sphere_cell005" position={[-0.3, 3.01, 0.24]}>
          <mesh
            name="Sphere_cell004_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell004_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell004_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell004_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell002" position={[-0.65, 2.79, -0.29]}>
          <mesh
            name="Sphere_cell001_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell001_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell001_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell001_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell009" position={[-0.7, 2.28, 0.52]}>
          <mesh
            name="Sphere_cell006_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell006_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell006_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell006_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell004" position={[-0.56, 1.69, 0.58]}>
          <mesh
            name="Sphere_cell003_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell003_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell003_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell003_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell013" position={[0.9, 1.94, -0.12]}>
          <mesh
            name="Sphere_cell009_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell009_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell009_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell009_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell006" position={[0.09, 1.49, 0.66]}>
          <mesh
            name="Sphere_cell005_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell005_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell005_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell005_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell018" position={[-0.03, 3.1, -0.12]}>
          <mesh
            name="Sphere_cell011_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell011_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell011_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell011_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell011" position={[0.11, 1.27, -0.3]}>
          <mesh
            name="Sphere_cell008"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell008.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell008_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell008_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell014" position={[-0.39, 2.34, -0.89]}>
          <mesh
            name="Sphere_cell010_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell010_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell010_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell010_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell024" position={[0.11, 2.35, 0.95]}>
          <mesh
            name="Sphere_cell017"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell017.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell017_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell017_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell019" position={[-0.16, 2.22, -0.88]}>
          <mesh
            name="Sphere_cell012"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell012.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell012_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell012_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell020" position={[-0.36, 1.44, -0.54]}>
          <mesh
            name="Sphere_cell013_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell013_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell013_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell013_2.geometry}
            material={insideMaterial}
          />
        </group>
        <mesh
          name="Sphere_cell042"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell042.geometry}
          material={insideMaterial}
          position={[-0.27, 1.57, -0.18]}
        />
        <group name="Sphere_cell022" position={[-0.38, 2.89, -0.38]}>
          <mesh
            name="Sphere_cell015"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell015.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell015_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell015_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell021" position={[0.07, 2.77, -0.59]}>
          <mesh
            name="Sphere_cell014_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell014_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell014_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell014_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell027" position={[-0.09, 1.3, 0.47]}>
          <mesh
            name="Sphere_cell020_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell020_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell020_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell020_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell028" position={[-0.64, 1.75, -0.57]}>
          <mesh
            name="Sphere_cell021_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell021_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell021_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell021_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell031" position={[-0.07, 1.99, 0.87]}>
          <mesh
            name="Sphere_cell023_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell023_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell023_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell023_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell034" position={[-0.07, 1.2, -0.04]}>
          <mesh
            name="Sphere_cell026_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell026_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell026_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell026_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell023" position={[0.07, 1.76, -0.91]}>
          <mesh
            name="Sphere_cell016"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell016.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell016_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell016_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell036" position={[-0.73, 1.84, 0.16]}>
          <mesh
            name="Sphere_cell028_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell028_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell028_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell028_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell025" position={[-0.7, 1.44, 0.15]}>
          <mesh
            name="Sphere_cell018_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell018_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell018_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell018_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell026" position={[0.62, 2.64, 0.16]}>
          <mesh
            name="Sphere_cell019_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell019_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell019_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell019_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell029" position={[-0.73, 2.67, 0.33]}>
          <mesh
            name="Sphere_cell022_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell022_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell022_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell022_2.geometry}
            material={insideMaterial}
          />
        </group>
        <mesh
          name="Sphere_cell047"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell047.geometry}
          material={insideMaterial}
          position={[0.19, 1.89, -0.03]}
        />
        <group name="Sphere_cell032" position={[0.15, 2.97, -0.5]}>
          <mesh
            name="Sphere_cell024_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell024_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell024_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell024_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell051" position={[-0.4, 2.72, -0.6]}>
          <mesh
            name="Sphere_cell041_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell041_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell041_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell041_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell033" position={[-0.26, 1.24, -0.28]}>
          <mesh
            name="Sphere_cell025_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell025_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell025_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell025_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell035" position={[0.37, 2.95, -0.28]}>
          <mesh
            name="Sphere_cell027_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell027_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell027_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell027_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell037" position={[0.31, 2.33, -0.89]}>
          <mesh
            name="Sphere_cell029_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell029_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell029_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell029_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell039" position={[0.01, 2.74, 0.71]}>
          <mesh
            name="Sphere_cell030"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell030.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell030_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell030_1.geometry}
            material={insideMaterial}
          />
        </group>
        <mesh
          name="Sphere_cell040"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell040.geometry}
          material={insideMaterial}
          position={[0.18, 2.25, -0.46]}
        />
        <group name="Sphere_cell041" position={[0.08, 2.99, 0.36]}>
          <mesh
            name="Sphere_cell032_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell032_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell032_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell032_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell044" position={[-0.83, 2.24, 0.08]}>
          <mesh
            name="Sphere_cell034_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell034_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell034_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell034_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell046" position={[-0.11, 1.21, 0.22]}>
          <mesh
            name="Sphere_cell036_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell036_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell036_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell036_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell048" position={[-0.57, 1.4, -0.09]}>
          <mesh
            name="Sphere_cell038"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell038.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell038_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell038_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell045" position={[-0.47, 2.47, -0.41]}>
          <mesh
            name="Sphere_cell035_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell035_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell035_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell035_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell053" position={[-0.13, 1.58, -0.67]}>
          <mesh
            name="Sphere_cell042_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell042_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell042_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell042_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell056" position={[0.36, 2.23, 0.83]}>
          <mesh
            name="Sphere_cell044_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell044_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell044_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell044_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell065" position={[0.12, 2.21, -0.97]}>
          <mesh
            name="Sphere_cell051_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell051_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell051_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell051_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell058" position={[0.51, 1.41, -0.14]}>
          <mesh
            name="Sphere_cell046_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell046_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell046_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell046_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell049" position={[-0.43, 2.72, 0.55]}>
          <mesh
            name="Sphere_cell039_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell039_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell039_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell039_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell066" position={[0.27, 1.71, -0.71]}>
          <mesh
            name="Sphere_cell052"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell052.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell052_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell052_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell062" position={[0.21, 1.87, 0.91]}>
          <mesh
            name="Sphere_cell049_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell049_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell049_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell049_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell050" position={[0.12, 3.06, 0.1]}>
          <mesh
            name="Sphere_cell040_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell040_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell040_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell040_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell070" position={[0.12, 1.17, -0.02]}>
          <mesh
            name="Sphere_cell055"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell055.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell055_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell055_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell054" position={[-0.31, 2.4, 0.84]}>
          <mesh
            name="Sphere_cell043"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell043.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell043_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell043_1.geometry}
            material={insideMaterial}
          />
        </group>
        <mesh
          name="Sphere_cell057"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell057.geometry}
          material={insideMaterial}
          position={[-0.24, 2.81, 0.06]}
        />
        <group name="Sphere_cell071" position={[0.57, 1.44, 0.19]}>
          <mesh
            name="Sphere_cell056_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell056_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell056_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell056_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell074" position={[-0.84, 2.43, -0.28]}>
          <mesh
            name="Sphere_cell059"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell059.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell059_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell059_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell060" position={[-0.47, 2.42, -0.76]}>
          <mesh
            name="Sphere_cell047_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell047_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell047_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell047_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell073" position={[-0.05, 2.53, -0.82]}>
          <mesh
            name="Sphere_cell058_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell058_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell058_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell058_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell061" position={[-0.58, 1.49, -0.36]}>
          <mesh
            name="Sphere_cell048_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell048_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell048_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell048_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell077" position={[0.55, 2.38, -0.69]}>
          <mesh
            name="Sphere_cell061_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell061_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell061_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell061_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell063" position={[-0.02, 3.01, -0.4]}>
          <mesh
            name="Sphere_cell050_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell050_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell050_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell050_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell067" position={[0.72, 2.02, 0.37]}>
          <mesh
            name="Sphere_cell053_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell053_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell053_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell053_2.geometry}
            material={insideMaterial}
          />
        </group>
        <mesh
          name="Sphere_cell080"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell080.geometry}
          material={insideMaterial}
          position={[0.01, 2.67, 0.27]}
        />
        <group name="Sphere_cell081" position={[-0.34, 2.97, -0.14]}>
          <mesh
            name="Sphere_cell065_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell065_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell065_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell065_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell068" position={[-0.81, 2.52, -0.04]}>
          <mesh
            name="Sphere_cell054_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell054_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell054_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell054_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell083" position={[0.24, 1.28, 0.22]}>
          <mesh
            name="Sphere_cell067_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell067_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell067_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell067_2.geometry}
            material={insideMaterial}
          />
        </group>
        <mesh
          name="Sphere_cell088"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell088.geometry}
          material={insideMaterial}
          position={[-0.49, 1.75, -0.33]}
        />
        <mesh
          name="Sphere_cell072"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_cell072.geometry}
          material={insideMaterial}
          position={[-0.23, 2.44, -0.04]}
        />
        <group name="Sphere_cell075" position={[0, 2.44, 0.62]}>
          <mesh
            name="Sphere_cell060_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell060_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell060_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell060_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell090" position={[0.61, 1.75, -0.52]}>
          <mesh
            name="Sphere_cell073_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell073_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell073_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell073_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell078" position={[0.53, 1.93, 0.73]}>
          <mesh
            name="Sphere_cell062_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell062_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell062_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell062_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell079" position={[0.44, 1.65, 0.58]}>
          <mesh
            name="Sphere_cell063_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell063_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell063_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell063_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell086" position={[-0.91, 1.97, -0.17]}>
          <mesh
            name="Sphere_cell070_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell070_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell070_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell070_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell082" position={[0.72, 2.49, -0.28]}>
          <mesh
            name="Sphere_cell066_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell066_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell066_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell066_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell089" position={[-0.67, 2.28, -0.64]}>
          <mesh
            name="Sphere_cell072_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell072_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell072_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell072_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell084" position={[-0.45, 1.34, 0.12]}>
          <mesh
            name="Sphere_cell068_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell068_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell068_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell068_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell092" position={[-0.59, 2.79, 0.08]}>
          <mesh
            name="Sphere_cell075_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell075_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell075_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell075_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell085" position={[-0.57, 2.02, -0.43]}>
          <mesh
            name="Sphere_cell069"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell069.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell069_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell069_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell093" position={[0.36, 2.74, 0.53]}>
          <mesh
            name="Sphere_cell076"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell076.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell076_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell076_1.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell091" position={[-0.17, 1.52, 0.34]}>
          <mesh
            name="Sphere_cell074_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell074_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell074_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell074_2.geometry}
            material={insideMaterial}
          />
        </group>
        <group name="Sphere_cell094" position={[0.66, 2.39, 0.59]}>
          <mesh
            name="Sphere_cell077_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell077_1.geometry}
            material={outerMaterial}
          />
          <mesh
            name="Sphere_cell077_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell077_2.geometry}
            material={insideMaterial}
          />
        </group>
      </group>
      <Moon/>
    </group>

    </>
     );
}

useGLTF.preload("/cell.glb");
