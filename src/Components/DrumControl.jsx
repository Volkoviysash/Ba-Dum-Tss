import React from "react";

const DrumControl = ({ changeSoundGroup }) => {
  return (
    <div>
      <button onClick={changeSoundGroup}>Change sounds group</button>
    </div>
  );
};

export default DrumControl;
