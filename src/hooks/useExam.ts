import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Question {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

interface ExamData {
  exam_title: string;
  timePerQuestion: string | number;
  questions: Question[];
}

// ✅ Convert "Xm Ys" or number to seconds
const parseTimeString = (timeValue: string | number): number => {
  if (typeof timeValue === "number") return timeValue;
  if (typeof timeValue !== "string") return 30; // ✅ Default to 30 seconds

  let totalSeconds = 0;
  const minutesMatch = timeValue.match(/(\d+)m/);
  const secondsMatch = timeValue.match(/(\d+)s/);

  if (minutesMatch) totalSeconds += parseInt(minutesMatch[1]) * 60;
  if (secondsMatch) totalSeconds += parseInt(secondsMatch[1]);

  return totalSeconds || 30;
};

export function useExam() {
  const navigate = useNavigate();
  const examData: ExamData = JSON.parse(sessionStorage.getItem("examData") || "{}");

  const [questions] = useState<Question[]>(examData.questions || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const timePerQuestion = parseTimeString(examData.timePerQuestion || "30s");

  const handleNext = () => {
    // ✅ Check if selected answer is correct before moving to next question
    if (selectedOption === questions[currentIndex]?.answer) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        sessionStorage.setItem("score", String(newScore)); // ✅ Save updated score
        return newScore;
      });
    }

    setSelectedOption(null); // ✅ Reset selection for next question

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/result");
    }
  };

  return {
    questions,
    currentIndex,
    selectedOption,
    setSelectedOption,
    handleNext,
    examTitle: examData.exam_title,
    timePerQuestion,
    score
  };
}
