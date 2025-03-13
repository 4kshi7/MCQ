import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";

function Home() {
  const [jsonInput, setJsonInput] = useState<string>("");
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleStartExam = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      sessionStorage.setItem("examData", JSON.stringify(parsedData));
      navigate("/exam");
    } catch (error) {
      alert("Invalid JSON format!");
    }
  };

  const handleCopyPrompt = async () => {
    const promptText = `Generate a JSON structure for an MCQ-based exam application. The topic is **"YOUR_TOPIC_HERE"**.

Ensure the JSON follows this structure:
- \`exam_title\`: The title of the exam.
- \`timePerQuestion\`: Time per question in "Xm Ys" format or seconds (e.g., "1m 30s" or "45s").
- \`questions\`: An array of multiple-choice questions where:
  - \`question\`: The question text.
  - \`options\`: An array of 4 possible answers.
  - \`answer\`: The correct answer (must match one of the options).
  - \`explanation\`: A brief explanation of the correct answer.

Here is the JSON format:
\`\`\`json
{
  "exam_title": "YOUR_TOPIC_HERE Quiz",
  "timePerQuestion": "1m 30s",
  "questions": [
    {
      "question": "",
      "options": ["", "", "", ""],
      "answer": "",
      "explanation": ""
    },
    {
      "question": "",
      "options": ["", "", "", ""],
      "answer": "",
      "explanation": ""
    }
  ]
}
\`\`\`
Make sure the generated JSON follows this structure exactly, filling in relevant questions, options, answers, and explanations based on the topic.`;

    try {
      await navigator.clipboard.writeText(promptText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // ✅ Hide message after 2 sec
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-xl font-bold mb-4">Paste JSON to Start Exam</h2>
      <div className="flex w-full max-w-2xl space-x-2">
        <TextInput value={jsonInput} onChange={setJsonInput} />
      </div >
      {copySuccess && <p className="mt-2 text-green-500">✅ Copied!</p>}
      <div className="flex items-center gap-5 ">
        <button onClick={handleStartExam} className="mt-4 p-2 bg-blue-500 text-white rounded">
          Start Exam
        </button>
        <button
          onClick={handleCopyPrompt}
          className="mt-4 p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Prompt
        </button>
      </div>
    </div>
  );
}

export default Home;
