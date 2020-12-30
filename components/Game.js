import { useState, useEffect } from "react";
import AnswerInput from "./AnswerInput";
import Quizzes from "../public/quiz.json";
import Quiz from "../public/questions.js";


const questFormat = p => <Quiz question = {p.question} />
const ansFormat = p => <Quiz correct_answer = {p.correct_answer} />
const questOnly = p => (p.question != "")
const quests = Quizzes.filter(questOnly)
const questFormatted = quests.map(questFormat)
const ansOnly = p => (p.correct_answer != "")
const answers = Quizzes.filter(ansOnly)
const ansText = p => p.correct_answer


const ansFormatted = answers.map(ansFormat)





const randint = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Game = (props) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const [score, setScore] = useState(0);

  const new_question = () => {
    setA(randint(0, 10));
    setB(randint(0, 10));
  };

  useEffect(new_question, []);

  const guess = (response) => {
    const int_response = (response);

    if (score + 1 > 49) {
      console.log("if")
      setScore(score + 1);
      props.onGameover(score);

    }
    else if (int_response.toLowerCase() == ((ansFormatted[score]["props"]["correct_answer"].toLowerCase()))) {
      console.log("elseif")
      setScore(score + 1);
   } else {
     console.log("else")
      props.onGameover(score);
    }
    console.log(score)
  };

  return (
    <>
      <div className="text-4xl mb-2">Question: {score + 1}</div>
      <div className="text-7xl font-bold mb-10">
        {questFormatted[score]}
      </div>
      <AnswerInput onGuess={guess} />
    </>
  );
};

export default Game;
