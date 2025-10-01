import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/QuizContext";
import { questions } from "@/data/questions";
import { useEffect } from "react";

const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quizState, answerQuestion, goToNextQuestion } = useQuiz();
  const { isCorrect, selectedAnswer } = location.state as {
    isCorrect: boolean;
    selectedAnswer: number;
  };

  const currentQuestion = questions[quizState.currentQuestionIndex];
  const correctAnswer = currentQuestion.options[currentQuestion.correctAnswer];

  const motivationalMessages = [
    `Nächstes mal hast du es sicher richtig, es wäre ${correctAnswer} gewesen!`,
    `Fast richtig, aber es wäre ${correctAnswer} gewesen!`,
    `Nicht ganz, die richtige Antwort wäre ${correctAnswer} gewesen!`,
    `Schade, es wäre ${correctAnswer} gewesen - beim nächsten Mal klappt's bestimmt!`,
  ];

  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  const getCorrectMessage = () => {
    const messages = [
      "Du hast richtig Ahnung.",
      "Du bist richtig geschickt.",
      "Du hast es drauf.",
      "Du machst das super.",
      "Du bist ein Profi darin.",
      "Du hast richtig Ahnung.",
      "Wehe du hast geraten!",
    ];
    return messages[currentQuestion.id];
  };

  useEffect(() => {
    answerQuestion(selectedAnswer, isCorrect);
  }, []);

  const handleContinue = () => {
    goToNextQuestion();
    
    // Check if we need to show a transition screen
    const nextIndex = quizState.currentQuestionIndex + 1;
    
    if (nextIndex === 3) {
      navigate("/transition", { state: { destination: "Neuseeland" } });
    } else if (nextIndex === 5) {
      navigate("/transition", { state: { destination: "Nepal" } });
    } else if (nextIndex === 8) {
      navigate("/transition", { state: { destination: "Guam" } });
    } else if (nextIndex >= questions.length) {
      navigate("/results");
    } else {
      navigate("/question");
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-8 ${
        isCorrect ? "bg-success" : "bg-error"
      }`}
    >
      <div className="w-full max-w-2xl space-y-8 text-center">
        <h2
          className={`text-5xl md:text-6xl font-bold ${
            isCorrect ? "text-success-foreground" : "text-error-foreground"
          }`}
        >
          {isCorrect ? "Richtig!" : "Falsch!"}
        </h2>

        <p
          className={`text-xl md:text-2xl ${
            isCorrect ? "text-success-foreground" : "text-error-foreground"
          }`}
        >
          {isCorrect ? getCorrectMessage() : randomMessage}
        </p>

        <div className="flex justify-center pt-8">
          <Button
            size="lg"
            className={`w-full max-w-md text-xl py-6 ${
              isCorrect 
                ? "bg-green-800 hover:bg-green-900 text-white" 
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
            onClick={handleContinue}
          >
            Weiter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
