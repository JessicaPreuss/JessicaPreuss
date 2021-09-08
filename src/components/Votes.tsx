import { useState } from "react";
import ProgressBar from "./progressBar";

export default function Votes() {
  const [chocolateVotes, setChocolateVotes] = useState(0);
  const [vanillaVotes, setVanillaVotes] = useState(0);
  const [strawberryVotes, setStrawberryVotes] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);

  return (
    <div>
      <h1>Vote Here </h1>
      <button
        onClick={() => {
          setChocolateVotes((prev) => prev + 1);
          setTotalVotes((prev) => prev + 1);
        }}
      >
        Chocolate
      </button>
      <button
        onClick={() => {
          setVanillaVotes((prev) => prev + 1);
          setTotalVotes((prev) => prev + 1);
        }}
      >
        Vanilla
      </button>
      <button
        onClick={() => {
          setStrawberryVotes((prev) => prev + 1);
          setTotalVotes((prev) => prev + 1);
        }}
      >
        Strawberry
      </button>

      <p>
        Chocolate: {chocolateVotes} ({(chocolateVotes / totalVotes).toFixed(1)}
        %)
      </p>
      <ProgressBar bgcolor="#8B4513" progress={chocolateVotes} />
      <p>
        Vanilla: {vanillaVotes} ({(vanillaVotes / totalVotes).toFixed(1)}%)
      </p>
      <ProgressBar bgcolor="#FFEBCD" progress={vanillaVotes} />
      <p>
        Strawberry: {strawberryVotes} (
        {(strawberryVotes / totalVotes).toFixed(1)}%)
      </p>
      <ProgressBar bgcolor="#FFB6C1" progress={strawberryVotes} />
    </div>
  );
}
