import { create } from 'zustand';
import { Vector3, Euler, MathUtils } from 'three';
import { addEffect } from "@react-three/fiber";

let audio, audioContext, sourceNode, analyzerNode, audioData;
let gainNode;

const createAudio = (url) => {
  console.log('audio url', url);
  try {
    // Create and set up the audio context if it doesn't already exist
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Create audio element and connect it to the audio context
    audio = new Audio(url);
    sourceNode = audioContext.createMediaElementSource(audio);

    // Check if analyzerNode already exists; if not, create it
    if (!analyzerNode) {
      analyzerNode = audioContext.createAnalyser();
      analyzerNode.fftSize = 512; // Set FFT size for frequency analysis
    }

    // Check if gainNode already exists; if not, create it
    if (!gainNode) {
      gainNode = audioContext.createGain();
      gainNode.gain.value = 0.1;
    }

    // Connect nodes
    sourceNode.connect(analyzerNode);
    analyzerNode.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Initialize audio data array
    audioData = new Float32Array(analyzerNode.frequencyBinCount);

    // Store nodes in Zustand state for easy access
    useStore.setState({
      analyzerNode,
      audioData,
      gainNode,
      sourceNode,
    });

    // Handle audio ended event
    audio.addEventListener('ended', () => useStore.getState().end(true));
    
    console.log("Audio context and nodes created successfully");

  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while creating audio");
  }
};

const useStore = create((set, get) => ({
  // State for UI and audio
  showLoadingPage: true,
  colors: {
    black: '#1c162e',
    darkred: "#3c162e",
    white: 'white',
    lightred: '#7c162e',
  },
  camInitPos: new Vector3(0, 2.5, 20),
  camFinalPos: new Vector3(0, 1, 8),
  camInitRot: new Euler(MathUtils.degToRad(10), 0, 0),
  camFinalRot: new Euler(0, 0, 0),
  isSoldierAnimated: false,
  soldierPos: new Vector3(0, 2.5, 20),
  playing: false,
  ended: false,
  isAudioPaused: true,
  analyzer: null,
  songData: [],
  average: 0,

  audioData: new Float32Array(0), // Initialize with an empty array
  average: 0,
  analyzerNode: null,
  gainNode: null,
  sourceNode: null,

  avg: () => {
    const { audioData } = get();
    let value = 0;

    if (audioData.length > 0) {
      for (let i = 0; i < audioData.length; i++) {
        value += audioData[i];
      }
      const average = value / audioData.length;
      set({ average });
    }
  },

  updateAudioData: () => {
    addEffect(() => {
      const { analyzerNode } = get();
      if (!analyzerNode) return;

      const audioData = new Float32Array(analyzerNode.frequencyBinCount);
      analyzerNode.getFloatFrequencyData(audioData);

      set({ audioData });
      get().avg();
      console.log("Audio data updated");
    });
  },

  start: () => {
    if (!audioContext) createAudio('/GG.mp3');
    if (get().isAudioPaused) {
      audio.play();
      set({ playing: true, isAudioPaused: false });
      console.log("Audio playing");
    } else {
      audio.pause();
      set({ playing: false, isAudioPaused: true });
      console.log("Audio paused");
    }
  },

  reset: () => {
    set({ ended: false, playing: false, isAudioPaused: true });
    console.log("Audio reset");
  },

  end: (status) => {
    set({ ended: status, playing: false, isAudioPaused: true });
    console.log("Audio ended:", status);
  },
}));

// Debug: Log changes in the store to verify updates
useStore.subscribe((state) => console.log('State changed:', state));

export default useStore;
