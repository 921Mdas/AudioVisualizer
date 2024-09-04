import React, { useRef, useMemo, useEffect } from "react";
import { useControls, folder } from "leva";
import useStore from "../useStore";
import * as THREE from "three";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  const { average } = useStore((state) => state);
  const reducedAvg = Math.floor(Math.abs(average * 0.1));

  const lightingControls = useMemo(() => {
    return {
      Directional: folder({
        DI: { value: 2.65, min: 0, max: 5, step: 0.01 },
        DP: { value: { x: -0.17, y: -0.81, z: -2.81 }, step: 0.01, min: -20, max: 20 },
        DCL: "white",
        DR: { value: { x: 0, y: 0, z: 0 }, step: 0.01, min: -Math.PI, max: Math.PI }, // Rotation
      }),
      RectArea: folder({
        RI: { value: 1, min: 0, max: 5, step: 0.01 },
        RP: { value: { x: -5.09, y: 2.00, z: 0 }, step: 0.01, min: -20, max: 20 },
        RCL: "#ff8f00",
        RR: { value: { x: -0.97, y: -0.08, z: 0.23 }, step: 0.01, min: -Math.PI, max: Math.PI }, // Rotation
      }),
      PointLight: folder({
        PI: { value: 0.5, min: 0, max: 5, step: 0.01 },
        PP: { value: { x: -3.07, y: -0.66, z: -0.26 }, step: 0.01, min: -20, max: 20 },
        PCL: "#e2a3ff",
        PR: { value: { x: 0, y: 0, z: 0 }, step: 0.01, min: -Math.PI, max: Math.PI }, // Rotation
      }),
    };
  }, []);

  const { DI, DP, DCL, DR, RI, RP, RCL, RR, PI, PP, PCL, PR } = useControls("light", lightingControls);

  const direction = useRef();
  const rectArea = useRef();
  const point = useRef();

  useEffect(() => {
    if (direction.current) {
      const dirHelper = new THREE.DirectionalLightHelper(direction.current, 1);
      // direction.current.add(dirHelper);
    }

    if (rectArea.current) {
      const rectHelper = new RectAreaLightHelper(rectArea.current);
      // rectArea.current.add(rectHelper);
    }

    if (point.current) {
      const pointHelper = new THREE.PointLightHelper(point.current, 0.5);
      // point.current.add(pointHelper);
    }
  }, []);

  return (
    <>
      {/* Directional Light */}
      <directionalLight
        ref={direction}
        castShadow
        position={[DP.x, DP.y, DP.z]}
        intensity={DI}
        color={DCL}
        rotation={[DR.x, DR.y, DR.z]}
      />

      {/* RectArea Light */}
      <rectAreaLight
        ref={rectArea}
        position={[RP.x, RP.y, RP.z]}
        intensity={RI}
        color={RCL}
        width={10} // Adjust as needed
        height={10} // Adjust as needed
        rotation={[RR.x, RR.y, RR.z]}
        lookAt={[0, 0, 0]} // Makes sure the light is pointed towards the center
      />

      {/* Point Light */}
      <pointLight
        ref={point}
        position={[PP.x, PP.y, PP.z]}
        intensity={PI}
        color={PCL}
        rotation={[PR.x, PR.y, PR.z]}
      />

      {/* Ambient Light */}
      <ambientLight intensity={1} />

      {/* Environment Light */}
     <Environment background>
         <color args={["#51087E"]} attach="background" />
         <Lightformer
           position={[0, 0, -5]}
           scale={10}
           intensity={4}
           color="red"
           form="ring"
         />
       </Environment>

    </>
  );
};

export default Lights;
