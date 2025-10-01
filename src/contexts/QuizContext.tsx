import React, { createContext, useContext, useState, ReactNode } from "react";
import { QuizState } from "@/types/quiz";

interface QuizContextType {
  quizState: QuizState;
  setSelectedAvatar: (avatar: number) => void;
  answerQuestion: (answerIndex: number, isCorrect: boolean) => void;
  resetQuiz: () => void;
  goToNextQuestion: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const initialState: QuizState = {
  currentQuestionIndex: 0,
  answers: [],
  score: 0,
  selectedAvatar: null,
};

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [quizState, setQuizState] = useState<QuizState>(initialState);

  const setSelectedAvatar = (avatar: number) => {
    setQuizState((prev) => ({ ...prev, selectedAvatar: avatar }));
  };

  const answerQuestion = (answerIndex: number, isCorrect: boolean) => {
    setQuizState((prev) => {
      const newAnswers = [...prev.answers];
      newAnswers[prev.currentQuestionIndex] = answerIndex;
      
      const scoreChange = isCorrect ? 100 : -10;
      
      return {
        ...prev,
        answers: newAnswers,
        score: prev.score + scoreChange,
      };
    });
  };

  const goToNextQuestion = () => {
    setQuizState((prev) => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
    }));
  };

  const resetQuiz = () => {
    setQuizState(initialState);
  };

  return (
    <QuizContext.Provider
      value={{
        quizState,
        setSelectedAvatar,
        answerQuestion,
        resetQuiz,
        goToNextQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
