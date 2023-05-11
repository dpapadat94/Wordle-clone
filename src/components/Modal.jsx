import React from "react";

function Modal({ isCorrect, turn, solution }) {
  const refresh = () => {
    location.reload();
  };
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">The word was: {solution}!</p>
          <p>You found the solution in {turn} guesses</p>
          <button className="modal-btn" onClick={refresh}>
            Play again
          </button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Out of Guesses</h1>
          <p className="solution"> The word was: {solution}</p>
          <p>Better luck next time.</p>
          <button className="modal-btn" onClick={refresh}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
}

export default Modal;
