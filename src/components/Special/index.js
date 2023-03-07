import { useState } from "react";

function Special() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const choices = ["pierre", "feuille", "ciseaux"];

  return (
    <div className="conteneur">
      <div className="header">
        <h1 className="header-title">version spéciale</h1>
      </div>
      <div className="choice">
        <p>Choisissez entre : </p>
        <button className="choice-pierre">Pierre</button>
        <button className="choice-feuille">Feuille</button>
        <button className="choice-ciseaux">Ciseaux</button>
      </div>
    </div>
  );
}

export default Special;
