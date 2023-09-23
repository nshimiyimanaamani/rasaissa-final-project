export interface QuizQuestion {
  question: string;
  choices: string[];
  positiveChoices: string[];
  negativeChoices: string[];
  selectedAnswer: string | null;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "How satisfied are you with your overall learning experience so far?",
    choices: ["Very Satisfied", "Satisfied", "Dissatisfied", "Very Dissatisfied"],
    positiveChoices: ["Very Satisfied", "Satisfied"],
    negativeChoices: ["Dissatisfied", "Very Dissatisfied"],
    selectedAnswer: null,
  },
  {
    question: "What motivates you the most to learn and grow?",
    choices: [
      "Personal Interest and Passion",
      "Career Advancement",
      "No Particular Motivation",
      "External Pressure (e.g., peer/family expectations)",
    ],
    positiveChoices: ["Personal Interest and Passion", "Career Advancement"],
    negativeChoices: [
      "No Particular Motivation",
      "External Pressure (e.g., peer/family expectations)",
    ],
    selectedAnswer: null,
  },
  {
    question: "How do you generally feel about facing challenges in your learning journey?",
    choices: [
      "Excited and Eager to Overcome Them",
      "Somewhat Anxious, but Willing to Try",
      "Avoid Challenges Whenever Possible",
      "Indifferent or Unmotivated",
    ],
    positiveChoices: ["Excited and Eager to Overcome Them", "Somewhat Anxious, but Willing to Try"],
    negativeChoices: ["Avoid Challenges Whenever Possible", "Indifferent or Unmotivated"],
    selectedAnswer: null,
  },
  {
    question:
      "How often do you actively seek out additional learning resources or materials beyond what's provided?",
    choices: ["Very Often", "Occasionally", "Never", "Rarely"],
    positiveChoices: ["Very Often", "Occasionally"],
    negativeChoices: ["Never", "Rarely"],
    selectedAnswer: null,
  },
  {
    question:
      "What best describes your attitude towards receiving constructive feedback on your learning progress?",
    choices: [
      "Appreciate and Act on Feedback",
      "Accept Feedback, but Sometimes Disagree",
      "Avoid Feedback at All Costs",
      "Defensive or Resistant to Feedback",
    ],
    positiveChoices: ["Appreciate and Act on Feedback", "Accept Feedback, but Sometimes Disagree"],
    negativeChoices: ["Avoid Feedback at All Costs", "Defensive or Resistant to Feedback"],
    selectedAnswer: null,
  },
  {
    question: "How engaged are you in group discussions or collaborative learning activities?",
    choices: [
      "Highly Engaged, Actively Participate",
      "Engaged, But Mostly Listen",
      "Avoid Group Activities",
      "Passively Participate, Rarely Contribute",
    ],
    positiveChoices: ["Highly Engaged, Actively Participate", "Engaged, But Mostly Listen"],
    negativeChoices: ["Avoid Group Activities", "Passively Participate, Rarely Contribute"],
    selectedAnswer: null,
  },
  {
    question:
      "What do you do when you encounter a topic or concept that seems challenging to understand?",
    choices: [
      "Seek Help from Mentors or Peers",
      "Spend Extra Time Researching and Studying",
      "Ignore It and Move On",
      "Give Up or Procrastinate",
    ],
    positiveChoices: [
      "Seek Help from Mentors or Peers",
      "Spend Extra Time Researching and Studying",
    ],
    negativeChoices: ["Ignore It and Move On", "Give Up or Procrastinate"],
    selectedAnswer: null,
  },
];
