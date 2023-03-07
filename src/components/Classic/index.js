import { useState, useRef } from "react";
import pierre from "../../assets/images/pierre.png";
import feuille from "../../assets/images/feuille.png";
import ciseaux from "../../assets/images/ciseaux.png";
import versus from "../../assets/images/vs.png";
import "./styles.scss";

function Classic() {
  const [playerChoice, setPlayerChoice] = useState(null);
  let [playerScore, setPlayerScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState(null);
  let [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState(null);
  const [final, setFinal] = useState(false);
  const choices = ["pierre", "feuille", "ciseaux"];
  const [fight, setFight] = useState(false);

  const handleReset = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setFinal(false);
    setPlayerChoice(null);
    setResult(null);
  };

  const handleChoice = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    setPlayerChoice(choice);
    setFinal(false);
    setResult(null);
  };

  const handlePlay = () => {
    if (playerChoice === computerChoice) {
      setResult("Egalité");
    } else if (
      (playerChoice === "pierre" && computerChoice === "ciseaux") ||
      (playerChoice === "feuille" && computerChoice === "pierre") ||
      (playerChoice === "ciseaux" && computerChoice === "feuille")
    ) {
      setResult("Vous gagnez la manche");
      setPlayerScore(playerScore + 1);
    } else {
      setResult("Vous perdez la manche");
      setComputerScore(computerScore + 1);
    }
    setFinal(true);
    setFight(true);
    setTimeout(() => {
      setFight(false), handleNewPlay();
    }, 2000);
  };

  const handleNewPlay = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };
  // console.log(result);
  // console.log(computerChoice);
  // console.log(playerChoice);

  return (
    <main className="conteneur">
      <div className="header">
        <h1 className="header-title">Version classique</h1>
        <div className="choice">
          {playerScore === 3 || computerScore === 3 || result != null ? (
            ""
          ) : (
            <div className="choice-contener">
              <p className="choice-contener-text">Choisissez entre : </p>
              <button
                className="choice-button pierre"
                onClick={() => handleChoice("pierre")}
              >
                Pierre
              </button>
              <button
                className="choice-button feuille"
                onClick={() => handleChoice("feuille")}
              >
                Feuille
              </button>
              <button
                className="choice-button ciseaux"
                onClick={() => handleChoice("ciseaux")}
              >
                Ciseaux
              </button>
            </div>
          )}
        </div>
        <div className="score">
          <p className="score-player">score joueur : {playerScore}</p>
          <p className="score-computer">score ordinateur : {computerScore}</p>
        </div>
      </div>

      <div className="result">
        <div className="result-player-contener">
          <p className="result-player">Choix du joueur</p>
          {playerChoice === "pierre" ? (
            <img className="result-player-image" src={pierre} alt="pierre" />
          ) : playerChoice === "feuille" ? (
            <img className="result-player-image" src={feuille} alt="feuille" />
          ) : playerChoice === "ciseaux" ? (
            <img className="result-player-image" src={ciseaux} alt="feuille" />
          ) : (
            ""
          )}
        </div>

        <div></div>

        <div className="result-final">
          {/* <img
              className={fight ? "combat" : "paix"}
              src={versus}
              alt="logoFight"
            /> */}

          {playerScore === 3 || computerScore === 3 ? (
            <div className="gameOver">
              <p className="gameOver-text">Game Over</p>
              {playerScore === 3
                ? "Vous remportez cette partie !"
                : "L'ordinateur remporte cette partie !"}
              <button className="gameOver-button" onClick={() => handleReset()}>
                Rejouer
              </button>
            </div>
          ) : (
            <div>
              <p className="result-result">{result === null ? "" : result}</p>

              <button
                className={`validation-button ${fight ? "paix" : ""}`}
                onClick={() => handlePlay()}
              >
                Tenter sa chance
              </button>
            </div>
          )}
        </div>

        <div className="result-computer-contener">
          <p className="result-computer">Choix de l'ordinateur </p>
          {final ? (
            <div className="result-computer-contener-bis">
              {computerChoice === "pierre" ? (
                <img
                  className="result-computer-image"
                  src={pierre}
                  alt="pierre"
                />
              ) : computerChoice === "feuille" ? (
                <img
                  className="result-computer-image"
                  src={feuille}
                  alt="feuille"
                />
              ) : computerChoice === "ciseaux" ? (
                <img
                  className="result-computer-image"
                  src={ciseaux}
                  alt="feuille"
                />
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </main>
  );
}

export default Classic;
