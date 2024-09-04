import useStore from "../useStore";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Canvas } from "@react-three/fiber";
import BackgroundScene from "./Background";
import Models from "./Model";
import { Suspense } from "react";

const Overlay = () => {
  const { playing, start } = useStore(state => state);

  return (
    <>
      {playing ? (
        <Canvas
          shadows
          camera={{
            fov: 25,
            near: 0.1,
            far: 100,
            position: [0, 0, 8],
          }}
        >
          <Suspense fallback={null}>
            <BackgroundScene />
            <Models />
          </Suspense>
        </Canvas>
      ) : (
        <div className="overlay">
          <h5 className="text_display">
            <BsPlayCircle className="btn_play" onClick={() => start()} />
          </h5>

          <div className="content">
                    <span>
                      <AiOutlineArrowUp />
                    </span>
                    <span>Click to Start</span>
                    <span style={{textAlign:'center'}}>
                      Audio API simulation / by rodeomads{" "}
                      <div style={{display:'flex', justifyContent:'space-between', width:'25vw'}}>
                   <a href="https://github.com/921Mdas" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/gratias-njila-944b93323/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    <a href="https://www.instagram.com/madszee009/" target="_blank" rel="noopener noreferrer">Instagram</a>

                      </div>
                    </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;
