import React, { useRef } from "react";

function DrumKey(props) {
  const audioRef = useRef(null);

  const handleClick = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={props.sound}
        className="clip"
        id={props.audioKey}
      />
      <button className="drum-key" onClick={handleClick}>
        {props.audioKey}
      </button>
    </div>
  );
}

export default DrumKey;
