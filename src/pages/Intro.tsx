import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/QuizContext";
import introImage from "@/assets/intro-image.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";
import avatar7 from "@/assets/avatar-7.jpg";
import avatar8 from "@/assets/avatar-8.jpg";
import avatar9 from "@/assets/avatar-9.jpg";

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

const Intro = () => {
  const navigate = useNavigate();
  const { quizState } = useQuiz();

  return (
    <div className="min-h-screen flex flex-col bg-background px-4 py-8">
      <div className="w-full max-w-3xl mx-auto space-y-6">
        {quizState.selectedAvatar !== null && (
          <div className="flex justify-end">
            <div className="w-20 h-20 rounded-lg overflow-hidden ring-2 ring-primary">
              <img
                src={avatars[quizState.selectedAvatar]}
                alt="Selected Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-primary text-lg leading-relaxed">
              Willkommen zu deiner Weltreise! Du startest deine Abenteuerreise in der
              wunderschönen Schweiz. Von dort aus geht es weiter nach Neuseeland, dem
              Land der Kiwis. Anschliessend führt dich deine Reise nach Nepal, dem Dach
              der Welt, bevor du deine Tour auf der tropischen Insel Guam abschliesst.
            </p>
            <p className="text-primary text-lg leading-relaxed mt-4">
              Auf deiner Reise wirst du spannende Fragen über Flaggen und Länder
              beantworten. Bist du bereit für das Abenteuer?
            </p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              src={introImage}
              alt="Weltreise"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            size="lg"
            className="w-full max-w-md text-xl py-6"
            onClick={() => navigate("/question")}
          >
            Weiter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
