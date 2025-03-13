interface QuestionProps {
    questionData: {
      question: string;
      options: string[];
      answer: string;
      explanation: string;
    };
    selectedOption: string | null;
    setSelectedOption: (option: string) => void;
    showExplanation: boolean;
    questionIndex: number; // ✅ Add question number
  }
  
  function Question({ questionData, selectedOption, setSelectedOption, showExplanation, questionIndex }: QuestionProps) {
    return (
      <div className="text-center">
        <h3 className="text-lg font-semibold">
          Question {questionIndex + 1}: {questionData.question} {/* ✅ Show question number */}
        </h3>
        <div className="mt-4 space-y-2">
          {questionData.options?.map((option: string, index: number) => {
            let optionStyle = "bg-gray-200";
  
            if (showExplanation) {
              if (option === questionData.answer) {
                optionStyle = "bg-green-500 text-white"; // ✅ Highlight correct answer
              } else if (option === selectedOption) {
                optionStyle = "bg-red-500 text-white"; // ✅ Highlight incorrect answer
              }
            } else if (selectedOption === option) {
              optionStyle = "bg-blue-500 text-white"; // ✅ Highlight selected option
            }
  
            return (
              <button
                key={index}
                onClick={() => !showExplanation && setSelectedOption(option)}
                className={`block w-full p-2 rounded border ${optionStyle}`}
              >
                {option}
              </button>
            );
          })}
        </div>
  
        {showExplanation && (
          <p className="mt-4 text-gray-700 bg-gray-100 p-2 rounded">
            <strong>Explanation:</strong> {questionData.explanation}
          </p>
        )}
      </div>
    );
  }
  
  export default Question;
  