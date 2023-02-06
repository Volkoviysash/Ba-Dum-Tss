import React from "react";
import DrumPad from "./Components/DrumPad";
import "./index.css";

function App() {
  const audioKeys1 = [
    {
      keyCode: 81,
      trackName: "Heater 1",
      keyLetter: "Q",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      trackName: "Heater 2",
      keyLetter: "W",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      trackName: "Heater 3",
      keyLetter: "E",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      trackName: "Heater 4",
      keyLetter: "A",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      trackName: "Clap",
      keyLetter: "S",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      trackName: "Open-HH",
      keyLetter: "D",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      trackName: "Kick-n'-Hat",
      keyLetter: "Z",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      trackName: "Kick",
      keyLetter: "X",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      trackName: "Closed-HH",
      keyLetter: "C",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  return (
    <div className="App">
      <div id="drum-machine">
        <DrumPad soundsArray={audioKeys1} />
      </div>
    </div>
  );
}

export default App;
