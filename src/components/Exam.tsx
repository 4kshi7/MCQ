import { useExam } from "../hooks/useExam";
import { useTimer } from "../hooks/useTimer";
import Question from "./Question";
import Timer from "./Timer";
import { useState, useEffect } from "react";

function Exam() {
  const { questions, currentIndex, selectedOption, setSelectedOption, handleNext, examTitle, timePerQuestion } = useExam();
  const [showExplanation, setShowExplanation] = useState(false);
  const { timeLeft, resetTimer, stopTimer } = useTimer(timePerQuestion);

  useEffect(() => {
    resetTimer(timePerQuestion); // ✅ Reset timer correctly based on JSON
    setShowExplanation(false);
  }, [currentIndex, timePerQuestion]);

  const handleSubmit = () => {
    if (!selectedOption) {
      alert("Please select an answer before submitting!");
      return;
    }
    stopTimer(); // ✅ Stop the timer after submission
    setShowExplanation(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">{examTitle}</h2>
      <Question
        questionData={questions[currentIndex]}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        showExplanation={showExplanation}
        questionIndex={currentIndex}
      />
      <Timer timeLeft={timeLeft} />
      <button
        onClick={showExplanation ? handleNext : handleSubmit}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        {showExplanation ? (currentIndex + 1 === questions.length ? "Finish" : "Next") : "Submit"}
      </button>
    </div>
  );
}

export default Exam;
