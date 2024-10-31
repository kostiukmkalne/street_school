import clock from "../../assets/education/clock.svg";
import human from "../../assets/education/human.svg";
import online from "../../assets/education/online.svg";

export const trainingData = [
  {
    title: "Group training with 3 people",
    subtitle:
      "Personalized lessons with a teacher, adapted to your goals and language level.",
    duration: { image: clock, text: "70 min", alt: "clock-img" },
    people: { image: human, text: "3 people", alt: "human-img" },
    format: { image: online, text: "Online", alt: "online-img" },
    price: "260.00₴",
    discounts: [
      "When paying for 10 lessons - 250.00₴",
      "When paying for 16 lessons - 240.00₴",
      "When paying for 32 lessons - 230.00₴",
    ],
  },
  {
    title: "Group training with 4 people",
    subtitle:
      "Personalized lessons with a teacher, adapted to your goals and language level.",
    duration: { image: clock, text: "70 min", alt: "clock-img" },
    people: { image: human, text: "4 people", alt: "human-img" },
    format: { image: online, text: "Online", alt: "online-img" },
    price: "215.00₴",
    discounts: [
      "When paying for 10 lessons - 200.00₴",
      "When paying for 16 lessons - 190.00₴",
      "When paying for 32 lessons - 180.00₴",
    ],
  },
];

export const benefits = [
  "Materials are stored on the Padlet virtual platform (access 24/7)",
  "Kalyna clickable platform",
  "Learning words with Quizlet",
  "Setting the learning goal using the SMART and GROW methods",
  "Adaptation of the educational process according to the DISC system",
  "An individual table in GoogleSheets with a tracker of your progress",
];
