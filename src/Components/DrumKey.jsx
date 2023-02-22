import React, { useRef, useState } from "react";

function DrumKey(props) {
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef(null);

  const toggleActivity = () => {
    setIsActive(!isActive);
  };

  const handleClick = () => {
    audioRef.current.play();
  };

  const handleKeydown = (event) => {
    if (event.keyCode === props.keyCode) {
      handleClick();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, []);

  return (
    <div>
      <audio
        ref={audioRef}
        src={props.sound}
        className="clip"
        id={props.audioKey}
      />
      <button id="drum-key" className="drum-key" onClick={handleClick}>
        {props.audioKey}
      </button>
    </div>
  );
}

export default DrumKey;
