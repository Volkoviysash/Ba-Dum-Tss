import React from "react";

function DrumPad(props) {
  return (
    <button className="drum-pad">
      {props.audioKey}
      <audio src={props.sound} className="clip" id={props.audioKey}></audio>
    </button>
  );
}

export default DrumPad;
