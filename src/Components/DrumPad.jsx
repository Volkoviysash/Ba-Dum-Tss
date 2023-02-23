import React from "react";
import DrumKey from "./DrumKey";

function DrumPad({ soundsArray, playTrack, volume }) {
  return (
    <div id="drum-pad">
      {soundsArray.map((audioKey) => (
        <DrumKey
          key={audioKey.keyLetter}
          trackName={audioKey.trackName}
          keyCode={audioKey.keyCode}
          audioKey={audioKey.keyLetter}
          sound={audioKey.audioLink}
          playTrack={playTrack}
        />
      ))}
    </div>
  );
}

export default DrumPad;
