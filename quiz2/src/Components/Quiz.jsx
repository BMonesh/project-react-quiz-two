import React from "react";
import "../CSS/Quiz.css"
import Question from '../resources/quizQuestion.json';

class CustomQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      questionIndex: 0,
      question: "What temperature does water boil at?",
      optionOne: "50°C",
      optionTwo: "25°C",
      optionThree: "100°C",
      optionFour: "150°C",
    };
  }

  handleNext = () => {
    if (this.state.questionIndex < 14) {
      this.setState(
        {
          questionIndex: this.state.questionIndex + 1,
        },
        () => {
          this.renderQuestions();
        }
      );
    }
  };

  handlePrev = () => {
    if (this.state.questionIndex > 0) {
      this.setState(
        {
          questionIndex: this.state.questionIndex - 1,
        },
        () => {
          this.renderQuestions();
        }
      );
    }
  };

  renderQuestions = () => {
    this.setState({
      question: Question[this.state.questionIndex].question,
      optionOne: Question[this.state.questionIndex].optionA,
      optionTwo: Question[this.state.questionIndex].optionB,
      optionThree: Question[this.state.questionIndex].optionC,
      optionFour: Question[this.state.questionIndex].optionD,
    });
  };

  handleQuit = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      this.setState(
        {
          questionIndex: 0,
        },
        () => {
          this.renderQuestions();
        }
      );
    }
  };

  render() {
    return (
      <div className="quiz-wrapper">
        <h1 className="quiz-heading">Quiz Time</h1>
        <div className="question-number">
          <h4>
            Question <span>{this.state.questionIndex + 1}</span> of <span>15</span>
          </h4>
        </div>
        <h2 className="quiz-question">{this.state.question}</h2>
        <div className="answer-options">
          <div className="option">{this.state.optionOne}</div>
          <div className="option">{this.state.optionTwo}</div>
          <div className="option">{this.state.optionThree}</div>
          <div className="option">{this.state.optionFour}</div>
        </div>
        <div className="quiz-buttons">
          <div className="prev-btn">
            <button onClick={this.handlePrev}>Previous</button>
          </div>
          <div className="next-btn">
            <button onClick={this.handleNext}>Next</button>
          </div>
          <div className="quit-btn">
            <button onClick={this.handleQuit}>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomQuiz;
