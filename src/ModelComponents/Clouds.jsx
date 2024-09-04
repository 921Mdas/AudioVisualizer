import { Cloud } from "@react-three/drei";
import React, { useMemo } from "react";
import { useControls, folder } from "leva";
import useStore from "../useStore";

const Clouds = () => {
  const { average } = useStore(state => state);
  const reducedAvg = Math.floor(Math.abs(average * 0.1));

  const cloudControls = useMemo(() => {
    return {
      cloud: folder({
        Opacity: { value: 0.49, min: 0, max: 5, step: 0.01 },
        Speed: { value: 0.5, step: 0.01, min: 0, max: 10 },
        Width: { value: 1.94, min: 1, max: 20, step: 0.01 },
        Segments: { value: 55, min: 1, max: 100, step: 1 },
        Depth: { value: 1, min: 1, max: 10, step: 0.1 },
      }),
    };
  }, []);

  const { Opacity, Speed, Width, Segments, Depth } = useControls(
    "cloudControl",
    cloudControls
  );

  return (
    <>
      <Cloud
        opacity={Opacity}
        speed={Speed} // Rotation speed
        width={Width} // Width of the full cloud
        depth={Depth} // Z-dir depth
        segments={Segments} // Number of particles
        position={[0, -10, 9]}
      />
      <Cloud
        opacity={Opacity}
        speed={Speed } // Rotation speed
        width={Width} // Width of the full cloud
        depth={Depth} // Z-dir depth
        segments={Segments} // Number of particles
        position={[0, -10, -9]}
      />
    </>
  );
};

export default Clouds;
