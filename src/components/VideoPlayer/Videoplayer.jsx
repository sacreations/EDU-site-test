import React, { useRef } from "react";
import "../VideoPlayer/Videoplayer.css";
import video from "../../assets/welcome.mp4";

const VideoPlayer = ({ playstate, setplaystate }) => {
  const player = useRef(null);

  const closeplayer = (e) => {
    if (e.target === player.current) {
      setplaystate(false);
    }
  };

  return (
    <div
      className={`video-player ${playstate ? "" : "hide"}`}
      ref={player}
      onClick={closeplayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};
export default VideoPlayer;
