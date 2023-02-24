import React from "react";
import DrumKey from "./DrumKey";

function DrumPad({ power, soundsArray, playTrack }) {
  return (
    <div id="drum-pad">
      <h1 className="title">Drum Machine</h1>
      {soundsArray.map((audioKey) =>
        power ? (
          <DrumKey
            power={power}
            key={audioKey.keyLetter}
            trackName={audioKey.trackName}
            keyCode={audioKey.keyCode}
            audioKey={audioKey.keyLetter}
            sound={audioKey.audioLink}
            playTrack={playTrack}
          />
        ) : (
          <DrumKey
            power={power}
            key={audioKey.keyLetter}
            trackName={audioKey.trackName}
            keyCode={audioKey.keyCode}
            audioKey={audioKey.keyLetter}
            sound={audioKey.audioLink}
            playTrack={() => {}}
          />
        )
      )}
    </div>
  );
}

export default DrumPad;
