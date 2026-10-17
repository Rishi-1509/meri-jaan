export interface TimelineChapter {
  id: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  date?: string;
  description: string;
  quote?: string;
  photoIds: string[];
  tag?: string;
}

export const timelineChapters: TimelineChapter[] = [
  {
    id: "chapter-01",
    chapterNumber: "01",
    title: "The Stairs & The Drill",
    subtitle: "When time froze on my way to class",
    date: "The First Glimpse",
    description:
      "One ordinary day, while walking up the stairs on my way to class, I caught sight of you practicing drill. In that exact second, the world froze around me. Something stirred deep inside my chest—I couldn't take my eyes off you. Right then and there, before I even knew your name, my heart quietly decided: she is destined to be someone very special in my life.",
    quote: "“I froze on the stairs, and my heart decided before I even knew your name.”",
    photoIds: ["memory-02"],
    tag: "First Glimpse",
  },
  {
    id: "chapter-02",
    chapterNumber: "02",
    title: "5:00 AM & The Royal Enfield",
    subtitle: "The dawn ride to the railway station",
    date: "5:00 AM Dawn",
    description:
      "A surprise call at dawn: a classmate asking for help to drop two girls at the railway station at 5 AM. I took my Royal Enfield Classic 350 into the darkness, not even realizing at first that the girl climbing onto my bike was the girl from the stairs! Halfway through, you began talking to me about school and life. I kept Google Maps visibly open on my phone so you’d feel completely safe, stealing quiet glimpses of your face in my bike's rearview mirror. Dropping you off, walking inside the train coach, and waving goodbye as you left for Chennai... I was completely, hopelessly fallen for you.",
    quote: "“Stealing glimpses of your smile in my Royal Enfield mirror.”",
    photoIds: ["memory-03", "memory-07"],
    tag: "5 AM Magic",
  },
  {
    id: "chapter-03",
    chapterNumber: "03",
    title: "Mess Visits & “When Is Your Result?”",
    subtitle: "Excuses to see you & the dumbest question ever",
    date: "College Days",
    description:
      "When you returned from Chennai, I didn’t want to take advantage of having helped you, so I kept things polite with shy hellos and goodbyes. But the truth? The ONLY reason I ever went to the college mess was hoping to catch a glimpse of you! And then came that legendary moment near the mess washing area: the very day after an exam, I gathered all my courage, walked up to you, and asked: “When is your result?” (Literally 24 hours after the test!). We still laugh about that dumb question.",
    quote: "“The only reason I came to the mess was just to see you.”",
    photoIds: ["memory-08", "memory-09"],
    tag: "Sweet & Goofy",
  },
  {
    id: "chapter-04",
    chapterNumber: "04",
    title: "My Very First Holi Ever",
    subtitle: "When you called me back into the colors",
    date: "Holi Celebration",
    description:
      "College had wrapped up on Holi, and I was walking to my bike to head home alone. Right as I was about to leave, you called out my name and asked me to join the celebration. Because of you, I played my very first Holi in my entire life! Splashed in vibrant colors, laughing with you—it became a day etched into my soul forever.",
    quote: "“You colored my life in ways I never imagined.”",
    photoIds: ["memory-47"],
    tag: "First Holi",
  },
  {
    id: "chapter-05",
    chapterNumber: "05",
    title: "“Can We Go Out?”",
    subtitle: "Near the washing area before RRU Sangram",
    date: "The Match Day",
    description:
      "Right before the RRU Sangram cricket match, you bumped into me near the mess washing area: “Aren't you playing? I heard you're a sports player... I'll be all alone on that day.” I told you: “I will give you company.” And then, out of nowhere, you looked at me and asked: “Can we go out?” My heart skipped ten beats! I was literally flying on air. That entire day, I couldn't stop bragging to all my friends: “Tomorrow, I am going out with her!”",
    quote: "“I was flying on air, telling every friend that I had a date with you.”",
    photoIds: ["memory-12", "memory-13"],
    tag: "Flying High",
  },
  {
    id: "chapter-06",
    chapterNumber: "06",
    title: "Anna’s Blessings at Panchavadi",
    subtitle: "Confessing my love in front of Lord Hanuman",
    date: "Panchavadi & Pondicherry",
    description:
      "The next day, I picked you up for our first real outing. Finding out you are also a devoted Hanuman devotee was pure magic. I took you to Pondicherry's biggest Hanuman temple—our beloved 'Anna'. Two days later, we rode to the grand Panchavadi temple. Right there in front of Anna, you looked at me and asked “What is this between us?” and drew the confession right out of my mouth: I told you I love you. In front of Anna, our love became sacred.",
    quote: "“In front of Anna at Panchavadi, my heart confessed its deepest truth.”",
    photoIds: ["memory-15", "memory-16"],
    tag: "Anna's Blessings",
  },
  {
    id: "chapter-07",
    chapterNumber: "07",
    title: "Veerampattinam & Endless Dates",
    subtitle: "Our first photo together & favorite spots",
    date: "Our Sweet Adventures",
    description:
      "Veerampattinam Beach—the place where we sat together, watched the waves, talked for hours, and took our very first photo together (Memory #01). From there, our love blossomed into countless rides on the Royal Enfield: quiet walks in Auroville, sunsets across Pondicherry beaches, sipping hot brew at Karupatti Coffee Shop, and visiting sacred temples hand in hand.",
    quote: "“From Veerampattinam beach to Karupatti coffee, every second was paradise.”",
    photoIds: ["memory-01", "memory-20"],
    tag: "Our Favorite Spots",
  },
  {
    id: "chapter-08",
    chapterNumber: "08",
    title: "May 10 & Our Huge Love Story ❤️",
    subtitle: "Just the beginning of endless dates, hugs & forever",
    date: "May 10, 2026",
    description:
      "All the story I told was just our initial stage... after that came countless dates, late-night outings, endless hugs, long rides, and so many sweet memories that a thousand pages couldn't hold it all! It's a huge, beautiful story of two souls who found their forever home in each other. To make your birthday special, I made this little universe for you, cutu ma. I love you so much, umaa! ❤️",
    quote: "“To make your birthday special, I made this little universe for you, cutu ma. I love you so much, umaa! ❤️”",
    photoIds: ["memory-04", "memory-06"],
    tag: "She Told Yes! ❤️",
  },
];
