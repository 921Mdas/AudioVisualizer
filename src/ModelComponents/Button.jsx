import React from 'react';
import useStore from '../useStore';
import { Html } from '@react-three/drei';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import icons

const PlayPauseButton = () => {
  const { playing, start } = useStore(state => ({
    playing: state.playing,
    start: state.start,
  }));

  return (
    <Html>
      <button onClick={start} className="play-pause-button">
        {playing ? <FaPause /> : <FaPlay />}
      </button>
    </Html>
  );
};

export default PlayPauseButton;
