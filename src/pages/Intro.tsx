import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import introImage from "@/assets/switzerland-intro.png";
import { AvatarScore } from "@/components/AvatarScore";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background px-4 py-8">
      <AvatarScore />
      <div className="w-full max-w-3xl mx-auto space-y-6">

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
