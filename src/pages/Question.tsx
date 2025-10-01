import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/QuizContext";
import { questions, getRomanNumeral } from "@/data/questions";
import nepalFlagRatio from "@/assets/nepal-flag-ratio.png";
import switzerlandFlag from "@/assets/switzerland-flag.png";
import newzealandFlag from "@/assets/newzealand-flag.png";
import { AvatarScore } from "@/components/AvatarScore";

const Question = () => {
  const navigate = useNavigate();
  const { quizState } = useQuiz();
  const currentQuestion = questions[quizState.currentQuestionIndex];

  const handleAnswer = (optionIndex: number) => {
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    navigate("/feedback", { state: { isCorrect, selectedAnswer: optionIndex } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-8">
      <AvatarScore />
      <div className="w-full max-w-2xl space-y-8 relative">
        {quizState.currentQuestionIndex >= 0 && quizState.currentQuestionIndex <= 2 && (
          <div className="absolute -right-8 md:-right-16 top-0 z-10">
            <img 
              src={switzerlandFlag} 
              alt="Switzerland Flag" 
              className="w-48 md:w-64 h-auto"
            />
          </div>
        )}
        
        {quizState.currentQuestionIndex >= 3 && quizState.currentQuestionIndex <= 4 && (
          <div className="absolute -left-8 md:-left-16 -top-8 z-10">
            <img 
              src={newzealandFlag} 
              alt="New Zealand Flag" 
              className="w-72 md:w-96 h-auto"
            />
          </div>
        )}
        
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
          Frage {getRomanNumeral(quizState.currentQuestionIndex)}
        </h2>

        <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg">
          <p className="text-xl md:text-2xl text-center mb-8 text-card-foreground">
            {currentQuestion.question}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                size="lg"
                className="w-full text-lg py-6 h-auto"
                onClick={() => handleAnswer(index)}
              >
                {option}
              </Button>
            ))}
          </div>

          {currentQuestion.id === 6 && (
            <div className="mt-6 flex justify-center">
              <img 
                src={nepalFlagRatio} 
                alt="Nepal Flag Ratio Formulas" 
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
