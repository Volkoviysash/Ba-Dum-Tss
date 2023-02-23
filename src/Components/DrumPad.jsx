import React from "react";
import DrumKey from "./DrumKey";

function DrumPad({ power, soundsArray, playTrack }) {
  return (
    <div id="drum-pad">
      {power
        ? soundsArray.map((audioKey) => (
            <DrumKey
              key={audioKey.keyLetter}
              trackName={audioKey.trackName}
              keyCode={audioKey.keyCode}
              audioKey={audioKey.keyLetter}
              sound={audioKey.audioLink}
              playTrack={playTrack}
            />
          ))
        : soundsArray.map((audioKey) => (
            <DrumKey
              key={audioKey.keyLetter}
              keyCode={audioKey.keyCode}
              audioKey={audioKey.keyLetter}
              sound="#"
            />
          ))}
    </div>
  );
}

export default DrumPad;
