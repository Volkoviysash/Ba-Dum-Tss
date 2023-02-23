import React from "react";

const DrumControl = ({
  power,
  powerSwitch,
  changeSoundGroup,
  soundTitle,
  volume,
  handleVolumeChange,
}) => {
  return (
    <div className="controleBlock">
      <h2>Drum Control</h2>
      <div className="controle">
        <div className="leftCol">
          <button className="power" onClick={powerSwitch}>
            {power ? "Power OFF" : "Power ON"}
          </button>
          <button className="changeSoundGroup" onClick={changeSoundGroup}>
            Change sounds group
          </button>
        </div>
        <div className="rightCol">
          <h2 id="display">{soundTitle}</h2>
          <h3 className="volumeTitle">Volume: {Math.round(volume * 100)}%</h3>
          <input
            className="volumeInput"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DrumControl;
