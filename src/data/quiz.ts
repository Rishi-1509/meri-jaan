export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    reaction: string;
    isFavorite?: boolean;
  }[];
  hint?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q-1",
    question: "When did Rishi first realize you were someone destined for his heart?",
    options: [
      {
        text: "When he froze on the college stairs seeing you practice drill!",
        reaction: "Bingo! Time literally stopped, and my heart decided before I even knew your name. ❤️",
        isFavorite: true,
      },
      {
        text: "During an exam in the hall",
        reaction: "Haha no, way earlier! The stairs were where time stood still! 🌸",
      },
      {
        text: "In the college library",
        reaction: "Nope, on the stairs while you were practicing drill looking so radiant! ✨",
      },
      {
        text: "Over a random phone call",
        reaction: "It was in person—one look on the stairs and I was a goner! 🦋",
      },
    ],
    hint: "Think about a certain staircase in college and a drill practice session!",
  },
  {
    id: "q-2",
    question: "What thoughtful thing did Dudu do during that 5:00 AM Royal Enfield ride?",
    options: [
      {
        text: "Kept Google Maps open so you'd feel safe & stole glances in the mirror",
        reaction: "You remembered! I wanted you to feel completely safe, even as I was secretly admiring you. 🏍️💨",
        isFavorite: true,
      },
      {
        text: "Drove at 120 km/h to show off",
        reaction: "Never! Gentle and safe on the Royal Enfield Classic 350 for my Bubu! 🛵",
      },
      {
        text: "Sang Tamil songs at the top of his lungs",
        reaction: "Haha, I was too nervous and smitten to sing! 🙈",
      },
      {
        text: "Got lost on the way to the railway station",
        reaction: "Maps was wide open—I had eyes only on the road and your smile in the mirror! ❤️",
      },
    ],
    hint: "He wanted to make sure you felt completely comfortable and safe at dawn.",
  },
  {
    id: "q-3",
    question: "What was Rishi's hilarious 'dumb question' to you near the mess?",
    options: [
      {
        text: "“When is your result?” (Literally the day after the exam!)",
        reaction: "YES! 24 hours after the exam! Any silly excuse just to hear your voice! 😂",
        isFavorite: true,
      },
      {
        text: "“Do you like the mess sambar?”",
        reaction: "Haha no, the mess food wasn't on my mind—only an excuse to talk to you was! 🍛",
      },
      {
        text: "“Can you give me your notes?”",
        reaction: "Nope, I went straight for the 'When is your result?' masterclass! 🤣",
      },
      {
        text: "“Did you see the cricket match?”",
        reaction: "That came later near the washing area! The result question came first! 🏏",
      },
    ],
    hint: "It happened the very next day after an exam near the mess!",
  },
  {
    id: "q-4",
    question: "Where did Rishi confess his love for you?",
    options: [
      {
        text: "In front of Anna at the sacred Panchavadi Temple!",
        reaction: "Yes! Right in front of Anna, where our love received the most sacred blessings. 🛕✨",
        isFavorite: true,
      },
      {
        text: "Over a late-night WhatsApp text",
        reaction: "No way! It had to be sacred, right in front of Anna at Panchavadi! 🙏",
      },
      {
        text: "At Veerampattinam beach",
        reaction: "Veerampattinam was where our first picture was taken, but the confession was before Anna! 🌊",
      },
      {
        text: "At Karupatti coffee shop",
        reaction: "Karupatti coffee was for our sweet dates, Panchavadi was where my heart spilled! ☕",
      },
    ],
    hint: "Both of you share immense devotion to this sacred deity.",
  },
  {
    id: "q-5",
    question: "What is our official date when Bubu told YES? ❤️",
    options: [
      {
        text: "May 10, 2026 — The day my world became complete!",
        reaction: "May 10, 2026! The happiest, most beautiful milestone of my entire life! 💍❤️",
        isFavorite: true,
      },
      {
        text: "April 1, 2026",
        reaction: "Haha no, April was when our spark began, but May 10 was the big YES! 🌸",
      },
      {
        text: "October 17",
        reaction: "October 17 is your special birthday! May 10 was the official yes! 🎂",
      },
      {
        text: "March 15, 2026",
        reaction: "May 10, 2026 is forever carved in my heart! 💖",
      },
    ],
    hint: "The happiest day in May!",
  },
];
