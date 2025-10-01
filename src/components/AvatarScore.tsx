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

export const AvatarScore = () => {
  const { quizState } = useQuiz();

  if (quizState.selectedAvatar === null) {
    return null;
  }

  const needsBackground = quizState.selectedAvatar !== null && 
    (quizState.selectedAvatar === 0 || quizState.selectedAvatar === 1 || 
     quizState.selectedAvatar === 2 || quizState.selectedAvatar === 4 || 
     quizState.selectedAvatar === 5 || quizState.selectedAvatar === 7 || 
     quizState.selectedAvatar === 8 || quizState.selectedAvatar === 9);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-center gap-2">
      <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
        <p className="text-lg font-bold text-primary">Score: {quizState.score}</p>
      </div>
      <div className={`w-16 h-16 rounded-lg overflow-hidden ring-2 ring-primary shadow-lg ${needsBackground ? 'bg-card' : ''}`}>
        <img
          src={avatars[quizState.selectedAvatar]}
          alt="Your Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
