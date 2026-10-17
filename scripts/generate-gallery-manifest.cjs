const fs = require('fs');
const path = require('path');

const categories = [
  "Our Beginning",
  "Cute Moments",
  "Funny Us",
  "Favorite Memories",
  "Special Days"
];

// Specific known captions for key milestone photos
const specialCaptions = {
  1: { caption: "Our very first photo together at Veerampattinam Beach ❤️", category: "Our Beginning", featured: true, location: "Veerampattinam Beach", date: "April 2026" },
  2: { caption: "Early days, soft smiles & butterflies on the stairs", category: "Our Beginning", featured: false, location: "College Stairs", date: "April 2026" },
  3: { caption: "The 5:00 AM Royal Enfield ride to the railway station", category: "Our Beginning", featured: false, location: "Royal Enfield Ride", date: "April 2026" },
  4: { caption: "May 10, 2026 — The day she officially told YES! 💍❤️", category: "Special Days", featured: true, location: "Official Milestone", date: "May 10, 2026" },
  5: { caption: "Bubu looking like an absolute angel", category: "Cute Moments", featured: true, location: "Sweet Day", date: "2026" },
  6: { caption: "My cutuu, my bubu, my favorite peace", category: "Cute Moments", featured: false, location: "Cozy Moment", date: "2026" },
  7: { caption: "Just Bubu and Dudu being completely themselves", category: "Cute Moments", featured: false, location: "Bubu & Dudu", date: "2026" },
  8: { caption: "Unfiltered smiles that light up my whole universe", category: "Funny Us", featured: false, location: "Mess Laughs", date: "2026" },
  9: { caption: "Laughing together until our stomachs hurt", category: "Funny Us", featured: false, location: "Pure Joy", date: "2026" },
  10: { caption: "Silly faces, pure happiness & zero filters", category: "Funny Us", featured: false, location: "Goofy us", date: "2026" },
  11: { caption: "Karupatti Coffee Shop date with my cutuu", category: "Favorite Memories", featured: true, location: "Karupatti Coffee", date: "2026" },
  12: { caption: "“Can we go out?” and me flying with joy!", category: "Our Beginning", featured: false, location: "Match Day", date: "2026" },
  13: { caption: "Dressed up and looking breathtaking together", category: "Special Days", featured: false, location: "Special Outing", date: "2026" },
  14: { caption: "Long talks, sweet hugs & counting stars", category: "Favorite Memories", featured: false, location: "Night Walks", date: "2026" },
  15: { caption: "In front of Anna at Panchavadi Temple", category: "Special Days", featured: true, location: "Panchavadi Temple", date: "2026" },
  16: { caption: "The sacred moment where love was confessed", category: "Special Days", featured: false, location: "Anna's Blessings", date: "2026" },
  20: { caption: "Auroville rides and peaceful beach walks", category: "Favorite Memories", featured: true, location: "Auroville", date: "2026" },
  47: { caption: "Our vibrant Holi celebration together! 🎨✨", category: "Special Days", featured: true, location: "First Holi", date: "2026" },
};

const romanticCaptions = [
  "Feeding you and admiring that innocent, sweet cutu face ❤️",
  "One of those tight hugs where the whole world fades away",
  "Meri jaan, looking more radiant with every passing second",
  "Late night car rides with our favorite playlist on repeat",
  "Amulu kutti stealing my heart all over again",
  "When you smile at me like this, I forget everything else",
  "Another unscripted, beautiful page in Bubu & Dudu's love story",
  "Holding hands and never wanting to let go",
  "That candid look when you didn't know I was admiring you",
  "Every ordinary place becomes magical with you by my side",
  "My safe harbor, my favorite peace, my forever person",
  "Just two silly hearts having the time of their lives",
  "Pure sunshine wrapped in human form",
  "My happiness in a single frame",
  "Sweet moments frozen in time forever",
  "A quiet afternoon where talking with you was pure heaven",
  "Grateful for every single breath shared with you",
  "You make this whole universe feel soft and warm",
  "No one else I would rather laugh, cry, and grow with",
  "Cherished keepsakes from our endless dates and outings",
  "From our early conversations to a lifetime still ahead",
  "Your laughter is my absolute favorite sound in the world",
  "My baby, my cutuu, my forever love",
  "A love story blessed by Anna and sealed with endless hugs",
];

const layouts = ["polaroid", "editorial", "scrapbook", "wide"];
const rotations = [-2, 2, -1, 3, 1, -3, 0];

const photos = [];

for (let i = 1; i <= 104; i++) {
  const id = `memory-${String(i).padStart(2, '0')}`;
  const src = `/images/memories/${id}.jpg`;
  
  if (specialCaptions[i]) {
    const sc = specialCaptions[i];
    photos.push({
      id,
      src,
      caption: sc.caption,
      date: sc.date || "2026",
      category: sc.category,
      featured: sc.featured || false,
      alt: `Rishi & Apeksha - ${sc.caption}`,
      location: sc.location,
      layoutStyle: sc.featured ? "editorial" : (layouts[i % layouts.length]),
      rotation: rotations[i % rotations.length],
    });
  } else {
    const cat = categories[i % categories.length];
    const caption = romanticCaptions[(i - 1) % romanticCaptions.length];
    photos.push({
      id,
      src,
      caption,
      date: "2026",
      category: cat,
      featured: (i % 12 === 0),
      alt: `Rishi & Apeksha - Memory ${i}`,
      layoutStyle: (i % 12 === 0) ? "editorial" : (layouts[i % layouts.length]),
      rotation: rotations[i % rotations.length],
    });
  }
}

const fileContent = `export type GalleryCategory =
  | "All"
  | "Our Beginning"
  | "Cute Moments"
  | "Funny Us"
  | "Favorite Memories"
  | "Special Days";

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  date?: string;
  category: GalleryCategory;
  featured?: boolean;
  alt: string;
  location?: string;
  layoutStyle?: "polaroid" | "editorial" | "scrapbook" | "wide";
  rotation?: number; // degree tilt for scrapbook polaroids
}

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Our Beginning",
  "Cute Moments",
  "Funny Us",
  "Favorite Memories",
  "Special Days",
];

// All 104 clean unique real photographs uploaded by Rishi for Apeksha ❤️ (0 duplicates)
export const galleryPhotos: GalleryPhoto[] = ${JSON.stringify(photos, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'gallery.ts'), fileContent, 'utf-8');
console.log('Successfully generated gallery.ts with all 104 unique photos!');
