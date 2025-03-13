import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ResultPage() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    const examData = JSON.parse(sessionStorage.getItem("examData") || "{}");
    setTotalQuestions(examData.questions?.length || 0);
    setScore(parseInt(sessionStorage.getItem("score") || "0"));
  }, []);

  const incorrectAnswers = totalQuestions - score;
  const passingPercentage = 60;
  const isPassed = (score / totalQuestions) * 100 >= passingPercentage;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-2xl font-bold">Exam Completed</h2>
      <p className="mt-2 text-lg">
        Correct Answers: <span className="text-green-500">{score}</span> ✅
      </p>
      <p className="mt-2 text-lg">
        Incorrect Answers: <span className="text-red-500">{incorrectAnswers}</span> ❌
      </p>
      <p className={`mt-4 text-xl font-bold ${isPassed ? "text-green-500" : "text-red-500"}`}>
        {isPassed ? "🎉 Congratulations! You Passed!" : "❌ You Failed! Try Again!"}
      </p>

      <button onClick={() => navigate("/")} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Restart Exam
      </button>
    </div>
  );
}

export default ResultPage;
