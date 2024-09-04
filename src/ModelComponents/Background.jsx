import { OrbitControls, Sky, Sparkles, useGLTF } from "@react-three/drei";
import React, { useMemo, Suspense, useRef } from "react";
import * as THREE from "three";
import { useControls, folder } from "leva";
import { useFrame } from "@react-three/fiber";
import Lights from "./Lights";
import useStore from "../useStore";
import {CellFractureSphere} from './CellFracture';
import StaringHost from './Graphs';
import Title from "./Title";
import satelitteModel from '../models/satellite.glb'
import {SAT} from '../ModelComponents/Satelitte';
import PlayPauseButton from '../ModelComponents/Button';
import { Leva } from "leva";
 
const BackgroundScene = () => {
  const { average } = useStore(state => state);
  const reducedAvg = Math.floor(Math.abs(average * 0.1));
  const vec = new THREE.Vector3();

  // move with mouse
 useFrame((state, _delta) => {
  state.camera.position.lerp(
    vec.set(10 - state.mouse.x * 2, 1, 3), // Reduced the mouse.x influence from 4 to 2
    0.05
  );
  state.camera.position.lerp(
    vec.set(
      Math.sin(state.pointer.x / 8) * 9, // Reduced pointer.x influence by doubling the divisor
      1.25 + state.pointer.y / 2, // Reduced pointer.y influence by half
      Math.cos(state.pointer.x / 8) * 5 // Reduced pointer.x influence by doubling the divisor
    ),
    0.05
  );
  state.camera.lookAt(0, 0, 0);
});

  const geometryCtrl = useMemo(() => {
    return {
      sky: folder({
        turbidity: { value: reducedAvg, min: 0, max: 20, step: 0.1 },
        rayleigh: { value: 0.00, min: 0, max: 4, step: 0.01 },
        mieCofficient: {
          value: 0.10,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mieDirection: { value: 1, min: 0, max: 1, step: 0.01 },
        elevation: { value: 2, min: 0, max: 90, step: 10 },
        azimuth: { value: -180, min: -180, max: 190, step: 10 },
        exposure: { value: 0.4, min: 0, max: 1, step: 0.1 },
      }),
      sat:folder({
       satpositionx: { value: -5.87, min: -20, max: 1, step: 0.01 },
       satpositiony: { value: -6.0, min: -20, max: 1, step: 0.01 },
       satpositionz: { value: -4.83, min: -20, max: 1, step: 0.01 },
       satrotationx: { value: -1.4, min: -20, max: 20, step: 0.01 },
       satrotationy: { value: -0, min: -20, max: 20, step: 0.01 },
       satrotationz: { value:0, min: -20, max: 20, step: 0.01 },

      })
    };
  }, []);

  const {
    turbidity,
    rayleigh,
    mieCofficient,
    mieDirection,
    elevation,
    azimuth,
    exposure,
    satpositionx,
    satpositiony,
    satpositionz,
    satrotationx,
    satrotationy,
    satrotationz
  } = useControls("material", geometryCtrl);

  return (
    <Suspense>
      <OrbitControls />
      <Leva hidden={true} />
      <Sky
        turbidity={reducedAvg + 10}
        distance={500000}
        sunPosition={[0, reducedAvg, 0]}
        inclination={100}
        azimuth={azimuth - reducedAvg}
        elevation={elevation}
        mieCoefficient={mieCofficient}
        exposure={exposure}
        rayleigh={rayleigh}
        mieDirectionalG={mieDirection}
      />
      <SAT    scale={0.2}
      position={[satpositionx, satpositiony, satpositionz]}
      rotation={[satrotationx, satrotationy, satrotationz]}
       
 />
      <CellFractureSphere />
      <PlayPauseButton />
      <Title />
      <Lights />
      <StaringHost />
      <fog attach={"fog"} args={["white", 0, 100]} />
    </Suspense>
  );
};

export default BackgroundScene;
