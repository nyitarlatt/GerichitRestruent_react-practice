import { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [playBtn, setPlayBtn] = useState(false);
  const vidRef = useRef();

  return (
    <div
      className="app__video"
      onMouseEnter={() => {
        setPlayBtn(true);
      }}
      onMouseLeave={() => setPlayBtn(false)}
    >
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center app__video-overlay-bg">
        {playBtn && (
          <div
            className="app__video-overlay_circle  flex__center "
            onClick={() => {
              setPlayVideo(!playVideo);
              if (playVideo) {
                document
                  .querySelector(".app__video-overlay")
                  .classList.add("app__video-overlay-bg");
                vidRef.current.pause();
              } else {
                document
                  .querySelector(".app__video-overlay")
                  .classList.remove("app__video-overlay-bg");

                vidRef.current.play();
              }
            }}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
