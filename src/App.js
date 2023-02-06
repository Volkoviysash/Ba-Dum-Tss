import React from "react";
import DrumKey from "./Components/DrumKey";
import "./index.css";

function App() {
  const audioKeys = [
    {
      keyLetter: "Q",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyLetter: "W",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyLetter: "E",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyLetter: "A",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyLetter: "S",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyLetter: "D",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyLetter: "Z",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyLetter: "X",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyLetter: "C",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="drum-pad">
          {audioKeys.map((audioKey) => (
            <DrumKey
              key={audioKey.keyLetter}
              audioKey={audioKey.keyLetter}
              sound={audioKey.audioLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
