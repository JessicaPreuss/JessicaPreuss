import React from "react";

interface Progress {
  bgcolor: string;
  progress: number;
}

function ProgressBar({ bgcolor, progress }: Progress) {
  const Parentdiv = {
    height: 20,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    margin: 0,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 5,
    textAlign: "right" as "right",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
}

export default ProgressBar;
