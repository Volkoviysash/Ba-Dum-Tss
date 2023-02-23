import React, { useState } from "react";
import DrumControl from "./Components/DrumControl";
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

  const audioKeys2 = [
    {
      keyCode: 81,
      trackName: "Chord 1",
      keyLetter: "Q",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: 87,
      trackName: "Chord 2",
      keyLetter: "W",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyCode: 69,
      trackName: "Chord 3",
      keyLetter: "E",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      keyCode: 65,
      trackName: "Shaker",
      keyLetter: "A",
      audioLink:
        "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      keyCode: 83,
      trackName: "Open-HH",
      keyLetter: "S",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      keyCode: 68,
      trackName: "Closed-HH",
      keyLetter: "D",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      keyCode: 90,
      trackName: "Punchy-Kick",
      keyLetter: "Z",
      audioLink:
        "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      keyCode: 88,
      trackName: "Side-Stick",
      keyLetter: "X",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      keyCode: 67,
      trackName: "Snare",
      keyLetter: "C",
      audioLink: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  const soundsName = {
    heaterKit: "Heater Kit",
    smoothPianoKit: "Smooth Piano Kit",
  };

  const soundsGroup = {
    heaterKit: audioKeys1,
    smoothPianoKit: audioKeys2,
  };

  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(1);
  const [soundGroupName, setSoundGroupName] = useState("heaterKit");
  const [sounds, setSounds] = useState(soundsGroup[soundGroupName]);
  const [trackName, setTrackName] = useState("");

  const powerSwitch = () => {
    setPower(!power);
    console.log(power);
  };

  const changeSoundGroup = () => {
    setTrackName("");
    if (soundGroupName === "heaterKit") {
      setSounds(soundsGroup.smoothPianoKit);
      setSoundGroupName("smoothPianoKit");
    } else {
      setSounds(soundsGroup.heaterKit);
      setSoundGroupName("heaterKit");
    }
  };

  const playTrack = (track, trackName) => {
    setTrackName(trackName);
    track.volume = volume;
    track.currentTime = 0;
    track.play();
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <DrumPad power={power} soundsArray={sounds} playTrack={playTrack} />
        <DrumControl
          power={power}
          powerSwitch={powerSwitch}
          soundTitle={trackName || soundsName[soundGroupName]}
          changeSoundGroup={changeSoundGroup}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default App;
