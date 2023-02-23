import React, { useRef, useState } from "react";

function DrumKey({ playTrack, trackName, keyCode, audioKey, sound }) {
  const audioRef = useRef();

  const handleClick = () => {
    playTrack(audioRef.current, trackName);
  };

  const handleKeydown = (event) => {
    if (event.keyCode === keyCode) {
      handleClick();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
    <div>
      <audio ref={audioRef} src={sound} className="clip" id={trackName} />
      <button id="drum-key" className="drum-key" onClick={() => handleClick()}>
        {audioKey}
      </button>
    </div>
  );
}

export default DrumKey;
