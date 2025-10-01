export interface Question {
  id: number;
  country: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: (number | null)[];
  score: number;
  selectedAvatar: number | null;
}

export interface Country {
  name: string;
  questionCount: number;
}
