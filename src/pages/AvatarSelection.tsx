import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/QuizContext";
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

const avatarNames = [
  "Basti GHG",
  "Ralf Schumacher",
  "The Rock",
  "Sneaky Golem",
  "Roger Dittli",
  "Globi",
  "Max Verstappen",
  "Peppa Pig",
  "Hog Rider",
];

const AvatarSelection = () => {
  const navigate = useNavigate();
  const { setSelectedAvatar, quizState } = useQuiz();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    quizState.selectedAvatar
  );

  const handleAvatarSelect = (index: number) => {
    setSelectedIndex(index);
    setSelectedAvatar(index);
  };

  const handleContinue = () => {
    if (selectedIndex !== null) {
      navigate("/intro");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-8">
      <div className="w-full max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">
          Avatar
        </h1>

        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {avatars.map((avatar, index) => {
            const needsWhiteBackground = index === 6 || index === 8; // Max Verstappen and Hog Rider
            const needsBackground = index === 0 || index === 1 || index === 2 || index === 4 || index === 5 || index === 7 || index === 9; // Others
            return (
              <button
                key={index}
                onClick={() => handleAvatarSelect(index)}
                className={`aspect-square rounded-lg overflow-hidden transition-all ${
                  selectedIndex === index
                    ? "ring-4 ring-primary scale-105"
                    : "ring-2 ring-border hover:ring-primary/50"
                } ${needsWhiteBackground ? "bg-white" : needsBackground ? "bg-card" : ""}`}
              >
                <img
                  src={avatar}
                  alt={avatarNames[index]}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>

        {selectedIndex !== null && (
          <p className="text-center text-lg text-primary font-medium">
            {avatarNames[selectedIndex]} ausgewählt
          </p>
        )}

        <div className="flex justify-center">
          <Button
            size="lg"
            className="w-full max-w-md text-xl py-6"
            onClick={handleContinue}
            disabled={selectedIndex === null}
          >
            Weiter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AvatarSelection;
