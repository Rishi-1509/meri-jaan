export interface SongConfig {
  id: string;
  title: string;
  artist: string;
  localAudioSrc?: string;
  streamingUrl?: string;
  src?: string;
  externalUrl?: string;
}

export const siteConfig = {
  // Personal details
  herName: "Apeksha",
  herNicknames: ["bubu", "cutuu", "meri jaan", "amulu kutti"],
  myName: "Rishi",
  myNicknames: ["dudu", "baby"],

  // Important dates
  herBirthday: "October 17",
  birthdayDate: "October 17",
  engagementDate: "May 10, 2026", // the day she said YES
  relationshipStartDate: "April 2025",

  // Theme description – used by UI for decorative assets
  themeDescription: "bubu and dudu combo – white panda and brown bear",

  // Hero & Opening screen texts
  heroSubheading:
    "A tiny universe filled with pieces of us: our 5:00 AM Royal Enfield dawn ride, our sacred blessings in front of Anna at Panchavadi, our memories at Veerampattinam beach, late-night food dates, silly jokes, and a lifetime of love.",
  opening: {
    title: "Hey, Apeksha… ❤️",
    subtitle: "I made a little something for you.",
    hint: "A tiny world filled with pieces of us.",
    buttonText: "Step into our story ✨",
    skipText: "Skip intro"
  },

  // Birthday finale texts
  birthdayDateHeading: "Happy 19th Birthday, Apeksha! 🎂❤️",
  birthdayMessage:
    "Ena chella kutti, ena pattu kutti, ena amulu kutti, meri jaan... Today is your 19th Birthday! ❤️\n\nI feel a little sad inside because I haven't done enough for my cutu and I am not right there beside you today, but next year I promise I will be right there with you. I will build our future, rectify all our mistakes, and take the greatest care of you forever.\n\nThank you for choosing me, for saying YES on May 10, and for making my heart your forever home. Happy Birthday, my Bubu! Umaa! ❤️",
  birthday: {
    heading: "Happy 19th Birthday, Apeksha! 🎂❤️",
    message:
      "May your day be filled with endless smiles, sweet moments, and all the love in the universe. Umaa! ❤️"
  },

  // Playlist configuration
  playlist: [
    {
      id: "song-radhimaa",
      title: "Radhimaa",
      artist: "Sai Abhyankkar",
      localAudioSrc: "/audio/radhimaa.mp3",
      src: "/audio/radhimaa.mp3",
      streamingUrl: "https://open.spotify.com"
    },
    {
      id: "song-singari",
      title: "Singari",
      artist: "Sai Abhyankkar",
      localAudioSrc: "/audio/singari.mp3",
      src: "/audio/singari.mp3",
      streamingUrl: "https://open.spotify.com"
    }
  ],

  // Backwards compatibility alias
  music: [
    {
      title: "Radhimaa",
      artist: "Sai Abhyankkar",
      src: "/audio/radhimaa.mp3",
      localAudioSrc: "/audio/radhimaa.mp3",
      externalUrl: ""
    },
    {
      title: "Singari",
      artist: "Sai Abhyankkar",
      src: "/audio/singari.mp3",
      localAudioSrc: "/audio/singari.mp3",
      externalUrl: ""
    }
  ]
} as const;
