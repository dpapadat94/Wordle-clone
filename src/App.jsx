import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import { randomword } from "./wordsData";

function App() {
  const [solution, setSolution] = useState(null);
  const [rules, setRules] = useState(false);

  useEffect(() => {
    const randomSolution =
      randomword[Math.floor(Math.random() * randomword.length)];
    setSolution(randomSolution);
  }, [setSolution]);

  const refresh = () => {
    location.reload();
  };
  const switchRules = () => {
    setRules((prev) => !prev);
    console.log(rules);
  };

  return (
    <div className="App">
      <div className="navWrap">
        <p onClick={refresh} className="howBtn">
          New Word
        </p>
        <h1>Wordle Clone</h1>
        <p onClick={switchRules} className="howBtn">
          How to Play
        </p>
      </div>
      {solution && <Wordle solution={solution} />}
      {rules && (
        <div className="modal">
          <div>
            <p className="rules-title">How To Play</p>
            <p>Guess any 5 letter word. You have 6 tries.</p>
            <p>
              The color of the tiles will change to show how close your guess
              was to the correct word.
            </p>
            <ul className="rules-list">
              <li>
                {" "}
                <span className="rule-color">Grey:</span> the letter is not in
                the word
              </li>
              <li>
                <span className="rule-color-y">Yellow:</span> the letter is in
                the word but in a different position.
              </li>
              <li>
                <span className="rule-color-g">Green:</span> The letter is in
                the word and in the correct position.
              </li>
            </ul>
            <button className="modal-btn" onClick={refresh}>
              Lets Play
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
