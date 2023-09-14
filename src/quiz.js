import React, { useState } from 'react';
import './Quiz.css';
import image from './image.png';
import { useHistory } from 'react-router-dom';
import ThanksScreen from './ThanksScreen';

function Quiz() {
  // Sample data for the quiz
  const quizData = {
    questionText: 'What is the capital of France?',
    options: ['A. Paris', 'B. London', 'C. Berlin', 'D. Madrid'],
  };
  const questions = [
    {
      question: 'Does your child have limited speech (non-verbal or speaks in only short phrases)?',
    },
    {
      question: 'Does your child tend to give random answers to questions, or make random comments?',
    },
    {
      question: 'Does your child not respond to their name?',
    },
    {
      question: 'Does your child avoid eye contact?',
    },
    {
      question: 'Does your child not engage in pretend play with other children?',
    },
    {
      question: 'Does your child struggle to understand other people\'s feelings?',
    },
  ];
  const options = ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'];

  // State to manage the current question and selected answer
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Function to handle the selection of an answer
  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  // Function to move to the next question
  const handleNextQuestion = () => {
    // Check if an answer is selected before proceeding
    if (selectedAnswer !== null) {
      // Move to the next question and reset selected answer
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer(null);
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  // Check if all questions are answered
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    
    <div className="app">
      {/* <Sidebar /> */}
      <div className="left-side">
        <h1>Question {currentQuestion + 1}</h1>
        <p>{questions[currentQuestion].question}</p>
      </div>
      <img src={image} alt="Quiz" className=" question-image" />
      <div className="right-side">
        {/* Progress bar */}
        <div className="mb-4">
          <div className="bg-gray-200 h-4 rounded-lg">
            <div
              className="bg-purple-400 h-4 rounded-lg"
              style={{ width: `${progressPercentage}%` }}>
              </div>
          </div>
          <p className="text-xs text-center mt-2">
            {currentQuestion + 1} of {questions.length}
          </p>
        </div>
        <div className="options">
          {options.map((option, index) => (
            <div
              key={index}
              className={`option ${selectedAnswer === index ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(index)}
            >
              {option}
            </div>
          ))}
        </div>
        {currentQuestion<questions.length-1?(
            <button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
            Next
          </button>):(
          <button  onClick={() => window.location.href = '/thanksScreen'} disabled={selectedAnswer === null}>
            Submit
            </button>)}
      </div>
    </div>
  );
}

export default Quiz;
