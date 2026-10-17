export interface ComplimentCard {
  id: string;
  iconName: string; // Lucide icon identifier
  tag: string;
  prompt: string;
  revealedMessage: string;
  envelopeColor: string; // Accent color
}

export const complimentCards: ComplimentCard[] = [
  {
    id: "card-feeding",
    iconName: "Heart",
    tag: "Feeding My Cutuu",
    prompt: "When I feed you with my own hands...",
    revealedMessage:
      "I love feeding you, and that innocent, cute face you make while eating makes my heart melt completely. Every single time you make that cutu face, I fall for you over and over again. ❤️",
    envelopeColor: "#F4C7CF",
  },
  {
    id: "card-1",
    iconName: "Sparkles",
    tag: "The First Look",
    prompt: "The way you looked on the stairs...",
    revealedMessage:
      "When I saw you practicing drill on those stairs, you had no idea I was watching. The grace, the focus, and that radiance you carried froze time completely. I knew right there you were someone I would never forget.",
    envelopeColor: "#DAD5F2",
  },
  {
    id: "card-2",
    iconName: "Heart",
    tag: "5 AM Ride",
    prompt: "That early morning Royal Enfield ride...",
    revealedMessage:
      "Sitting behind me on my Classic 350 at 5:00 AM, talking about your schooling and life. Watching your reflection in my rearview mirror made that morning feel like a private dream I didn't want to wake up from.",
    envelopeColor: "#FFF8F0",
  },
  {
    id: "card-3",
    iconName: "Sun",
    tag: "First Holi",
    prompt: "When you called me back on Holi...",
    revealedMessage:
      "I was about to ride home alone, and you called out to me to join the celebration. Because of you, I played the very first Holi in my life. You brought colors into my world in a way no one else ever could.",
    envelopeColor: "#D8B778",
  },
  {
    id: "card-4",
    iconName: "Coffee",
    tag: "That Bold Step",
    prompt: "“Can we go out?” near the washing area...",
    revealedMessage:
      "Before the RRU Sangram match, when you asked if we could go out—you have no idea how high I was flying! I told every single friend that day because you made me the happiest guy on the planet.",
    envelopeColor: "#D98C9B",
  },
  {
    id: "card-5",
    iconName: "Compass",
    tag: "Anna's Blessings",
    prompt: "Our devotion to Anna at Panchavadi...",
    revealedMessage:
      "Finding out we both love Hanuman Anna was magical. Standing in front of Anna at Panchavadi and having my love drawn out of my mouth was the most sacred, honest moment of my life.",
    envelopeColor: "#DAD5F2",
  },
  {
    id: "card-hugs",
    iconName: "Sparkles",
    tag: "Endless Hugs & Dates",
    prompt: "Our huge story & tight hugs...",
    revealedMessage:
      "All the stories were just our initial beginning... after that came countless dates, late-night outings, and endless tight hugs. To make your birthday special, I made this little universe for you, cutu ma. I love you so much, umaa! ❤️",
    envelopeColor: "#F4C7CF",
  },
  {
    id: "card-6",
    iconName: "Star",
    tag: "My Everything",
    prompt: "Why you are my forever Bubu...",
    revealedMessage:
      "My cutuu, my bubu, my meri jaan, my amulu kutti—you make every ordinary day feel extraordinary. Thank you for saying yes on May 10, 2026, and for making my heart your home.",
    envelopeColor: "#542839",
  },
];
