import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/QuizContext";
import { questions } from "@/data/questions";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
];

const Results = () => {
  const navigate = useNavigate();
  const { quizState, resetQuiz } = useQuiz();

  const correctAnswers = quizState.answers.filter((answer, index) => {
    return answer === questions[index].correctAnswer;
  }).length;

  const wrongAnswers = questions.length - correctAnswers;

  const handleHome = () => {
    resetQuiz();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-8">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Resultate</h1>

        {quizState.selectedAvatar !== null && (
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-lg overflow-hidden ring-4 ring-primary bg-card">
              <img
                src={avatars[quizState.selectedAvatar]}
                alt="Your Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <div className="bg-card rounded-lg p-8 shadow-lg space-y-6">
          <div className="text-center">
            <p className="text-6xl font-bold text-primary mb-2">
              {quizState.score}
            </p>
            <p className="text-xl text-muted-foreground">Punkte</p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4">
            <div>
              <p className="text-3xl font-bold text-success">{correctAnswers}</p>
              <p className="text-lg text-muted-foreground">Richtig</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-destructive">{wrongAnswers}</p>
              <p className="text-lg text-muted-foreground">Falsch</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            size="lg"
            className="w-full max-w-md text-xl py-6"
            onClick={handleHome}
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
