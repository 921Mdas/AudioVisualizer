import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const StaringHost = ({ count = 100 }) => {
  const starsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const speed = 0.04; // Adjust speed to your liking

    // Move the stars backward to create the traveling effect
    starsRef.current.rotation.z = elapsedTime * speed;

    // Optionally, loop the position or rotation to create a seamless effect
    starsRef.current.position.z = (elapsedTime * speed) % 50;
  });

  return (
    <Stars
      ref={starsRef}
      radius={10}
      depth={50}
      count={5000}
      factor={8}
      saturation={1}
      fade
      speed={0.01} // You can adjust this for additional animation effect
    />
  );
};

export default StaringHost;
