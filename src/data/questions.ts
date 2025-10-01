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
    question: "Nenne mir das Seitenverhältnis der Schweizer Flagge",
    options: ["1:1", "2:9", "3:4", "7:8"],
    correctAnswer: 0,
  },
  {
    id: 1,
    country: "Schweiz",
    question: "Welches ist der grösste Berg der komplett in der Schweiz liegt?",
    options: ["Matterhorn", "Dufourspitze", "Dom", "Finsteraarhorn"],
    correctAnswer: 3,
  },
  {
    id: 2,
    country: "Schweiz",
    question: "Welches sind 3 traditionelle Schweizer Gerichte",
    options: ["Rösti, Reis, Nudeln", "Rösti, Raclette, Fondue", "Frühlingsrollen, Raclette, Steak", "Lasagne, Gordon Bleu, Schogg"],
    correctAnswer: 1,
  },
  // Neuseeland (3-4)
  {
    id: 3,
    country: "Neuseeland",
    question: "Nenne mir das Seitenverhältnis der Neuseeländischen Flagge",
    options: ["1:2", "2:12", "3:4", "9:11"],
    correctAnswer: 0,
  },
  {
    id: 4,
    country: "Neuseeland",
    question: "Wie hoch ca. sind Kiwis",
    options: ["15 cm", "80 cm", "35 cm", "20 cm"],
    correctAnswer: 2,
  },
  // Nepal (5-7)
  {
    id: 5,
    country: "Nepal",
    question: "Welches ist der grösste Berg Nepals",
    options: ["Annapurna", "Mount Everest", "Kangchendzönga", "Lhotse"],
    correctAnswer: 1,
  },
  {
    id: 6,
    country: "Nepal",
    question: "Ist dies das Seitenverhältnis der Flagge von Nepal???",
    options: ["Wahr", "Falsch"],
    correctAnswer: 0,
  },
  {
    id: 7,
    country: "Nepal",
    question: "Wie viele 8000er hat Nepal?",
    options: ["5", "keine", "8", "10"],
    correctAnswer: 0,
  },
  // Guam (8-9)
  {
    id: 8,
    country: "Guam",
    question: "Wo liegt Guam?",
    options: ["Atlantiks", "Indischer Ozean", "Atlantik", "Pazifischer Ozean"],
    correctAnswer: 3,
  },
  {
    id: 9,
    country: "Guam",
    question: "Welches ist das Seitenverhältnis der Flagge von Guam?",
    options: ["22:41", "11:22", "3:4", "5:11"],
    correctAnswer: 0,
  },
];

export const getRomanNumeral = (num: number): string => {
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return romanNumerals[num] || String(num);
};
