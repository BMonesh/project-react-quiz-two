import React from "react";
import "../CSS/ModifiedResult.css";

class ModifiedResult extends React.Component {
  render() {
    return (
      <div className="result-container">
        <h1 className="result-heading">Your Quiz Result</h1>
        <div className="result-dialog-box">
          <h2>You need to practice more!</h2>
          <h1>
            Your score is <span>20%</span>
          </h1>
          <div className="result-details">
            <div className="result-info">
              <h3>Total Number of Questions</h3>
              <p>50</p>
            </div>
            <div className="result-info">
              <h3>Total Number of Attempts</h3>
              <p>50</p>
            </div>
            <div className="result-info">
              <h3>Total Number of Correct Answers</h3>
              <p>50</p>
            </div>
            <div className="result-info">
              <h3>Total Number of Wrong Answers</h3>
              <p>50</p>
            </div>
          </div>
        </div>
        <div className="result-buttons">
          <button className="play-again-btn">Play Again</button>
          <button className="back-to-home-btn">Back to Home</button>
        </div>
      </div>
    );
  }
}

export default ModifiedResult;
