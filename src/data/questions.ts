import { Question, Country } from "@/types/quiz";

export const countries: Country[] = [
  { name: "Schweiz", questionCount: 3 },
  { name: "Neuseeland", questionCount: 2 },
  { name: "Nepal", questionCount: 3 },
  { name: "Guam", questionCount: 2 },
];

export const questions: Question[] = [
  // Schweiz (0-2)
  {
    id: 0,
    country: "Schweiz",
    question: "Welche Farben hat die Schweizer Flagge?",
    options: ["Rot und Weiss", "Blau und Weiss", "Rot und Gelb", "Grün und Weiss"],
    correctAnswer: 0,
  },
  {
    id: 1,
    country: "Schweiz",
    question: "Was ist die Hauptstadt der Schweiz?",
    options: ["Zürich", "Genf", "Bern", "Basel"],
    correctAnswer: 2,
  },
  {
    id: 2,
    country: "Schweiz",
    question: "Wie viele offizielle Landessprachen hat die Schweiz?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
  },
  // Neuseeland (3-4)
  {
    id: 3,
    country: "Neuseeland",
    question: "Welches Tier ist das Symbol Neuseelands?",
    options: ["Känguru", "Koala", "Kiwi", "Emu"],
    correctAnswer: 2,
  },
  {
    id: 4,
    country: "Neuseeland",
    question: "Aus wie vielen Hauptinseln besteht Neuseeland?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
  },
  // Nepal (5-7)
  {
    id: 5,
    country: "Nepal",
    question: "Welcher Berg liegt in Nepal?",
    options: ["K2", "Mount Everest", "Matterhorn", "Kilimandscharo"],
    correctAnswer: 1,
  },
  {
    id: 6,
    country: "Nepal",
    question: "Was ist die Hauptstadt von Nepal?",
    options: ["Kathmandu", "Pokhara", "Delhi", "Dhaka"],
    correctAnswer: 0,
  },
  {
    id: 7,
    country: "Nepal",
    question: "Welche Form hat die Flagge Nepals?",
    options: ["Rechteckig", "Quadratisch", "Dreieckig (zwei Dreiecke)", "Rund"],
    correctAnswer: 2,
  },
  // Guam (8-9)
  {
    id: 8,
    country: "Guam",
    question: "Zu welchem Land gehört Guam?",
    options: ["Philippinen", "USA", "Japan", "Australien"],
    correctAnswer: 1,
  },
  {
    id: 9,
    country: "Guam",
    question: "In welchem Ozean liegt Guam?",
    options: ["Atlantischer Ozean", "Indischer Ozean", "Pazifischer Ozean", "Arktischer Ozean"],
    correctAnswer: 2,
  },
];

export const getRomanNumeral = (num: number): string => {
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return romanNumerals[num] || String(num);
};
