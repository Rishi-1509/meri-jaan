export interface HintWordItem {
  id: string;
  word: string;
  emoji: string;
  tag?: string;
}

export interface LoveLetterConfig {
  teaserPrompt: string;
  salutation: string;
  paragraphs: string[];
  hintWordsIntro: string;
  hintWords: HintWordItem[];
  signatureSignOff: string;
  signatureName: string;
  postScript?: string;
  sealInitials?: string;
}

export const loveLetterData: LoveLetterConfig = {
  teaserPrompt: "One little thing I wanted to tell you...",
  salutation: "My Dearest Apeksha, Ena Chella Kutti, Ena Pattu Kutti ❤️",
  paragraphs: [
    `Ena chella kutti, ena pattu kutti, ena thangam kutti, ena amulu kutti, ena baby... I love you so much! You are everything to me, meri jaan. Thank you for choosing me, for being with me, for bearing with me, and for always understanding me. We will make mistakes, and we will learn from them together, meri jaan. Lots and lots of love for my baby. I promise you with all my heart that I will take care of you so very well.`,

    `We have so many, many, many good memories together, and we will always rectify our bad parts and grow closer. Bubu, we explored so many places and ate so much good food together—crispy masala dosa, pizza, roti & sabji, pasta, and endless coffees. Spending time with you has been the single best part of my entire life, and I know in my heart that the rest of my life will also be just like that—happy and blessed beside you. Thank you for everything, meri jaan.`,

    `Today is your 19th Birthday. I feel a little sad inside because I feel I haven't done enough for my cutu and I am not right there beside you today... But next year, I promise I need to be with you, cutuu bubu. I will work hard, build a beautiful life for both of us, and take the greatest care of you, baby. Umaa, I love you so much!`,

    `All the stories I told were just our initial beginning... after that came countless dates, late-night outings, feeding you with my own hands and falling for that cute face of yours over and over, and so many tight hugs that it has become a huge, endless love story.`,
  ],
  hintWordsIntro: "Our Little Memory Sparks (Tap each word to recollect the stories that belong only to us):",
  hintWords: [
    { id: "h-1", word: "jhumka", emoji: "✨", tag: "Style" },
    { id: "h-2", word: "panchavadi", emoji: "🛕", tag: "Anna's Blessings" },
    { id: "h-3", word: "may 10", emoji: "💍", tag: "She Told Yes" },
    { id: "h-4", word: "panchavadi back road", emoji: "🏍️", tag: "Secret Route" },
    { id: "h-5", word: "cuddalore pizza", emoji: "🍕", tag: "Food Date" },
    { id: "h-6", word: "long drive", emoji: "🛣️", tag: "Royal Enfield" },
    { id: "h-7", word: "ncc cheese", emoji: "🧀", tag: "Inside Joke" },
    { id: "h-8", word: "ruby beach", emoji: "🌊", tag: "Waves" },
    { id: "h-9", word: "all the bike ride", emoji: "🛵", tag: "Wind & Us" },
    { id: "h-10", word: "daily bike race", emoji: "🏁", tag: "College Thrills" },
    { id: "h-11", word: "pasta", emoji: "🍝", tag: "Yummy Meals" },
    { id: "h-12", word: "coffee", emoji: "☕", tag: "Karupatti Warmth" },
    { id: "h-13", word: "café", emoji: "🍰", tag: "Sweet Treats" },
    { id: "h-14", word: "suruguru", emoji: "🍛", tag: "Favorite Spot" },
    { id: "h-15", word: "nisi house", emoji: "🏡", tag: "Cozy Place" },
    { id: "h-16", word: "pickup drop place", emoji: "📍", tag: "Where I Waited" },
    { id: "h-17", word: "chats", emoji: "💬", tag: "Endless Talks" },
    { id: "h-18", word: "movie", emoji: "🎬", tag: "Dark Theater Hugs" },
    { id: "h-19", word: "masala dosa", emoji: "🥞", tag: "Crispy Love" },
    { id: "h-20", word: "roti and sabji", emoji: "🥘", tag: "Home Comfort" },
    { id: "h-21", word: "and many many more...", emoji: "♾️", tag: "Our Forever" },
  ],
  signatureSignOff: "With all my soul, forever & always yours,",
  signatureName: "Rishi (Your Dudu) 🐼🤎",
  postScript: "P.S. — Happy 19th Birthday, Apeksha! I will build our future and take care of you forever. Umaa, I love you so much! ❤️",
  sealInitials: "R & A",
};
