import React from "react";
import { Html } from "@react-three/drei";
import useStore from "../useStore";

const Title = () => {
  const {average} = useStore((state)=>state)
  const speed = 300000
  return (
    <>
      <Html wrapperClass="label_sphere" position={[-5, 1, 0]} >
        <div style={{fontWeight:'bold'}}>
        DESTINATION: CANIS MAJOR DWARF GALAXY <br/>
        </div>
        <div>
        CURRENT SPEED: { speed - Math.ceil(average)} KM/S
        </div>
        <div>
        ORIGIN: EARTH
        </div>
        <div>
        HOST: RODEO MADS
        </div>
        <div>
        GRAVITY: {Math.ceil(average)}
        </div>
      </Html>
     
    </>
  );
};

export default Title;
