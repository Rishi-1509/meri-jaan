export interface ConstellationStar {
  id: string;
  memoryId: string;
  name: string;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  size: "sm" | "md" | "lg";
  brightness: number;
}

export interface ConstellationLine {
  from: string; // star id
  to: string; // star id
}

// Points arranged in a graceful cosmic heart constellation mapped to their real love story
export const constellationStars: ConstellationStar[] = [
  { id: "star-1", memoryId: "memory-02", name: "The Stairs & The Drill", x: 50, y: 35, size: "lg", brightness: 1 },
  { id: "star-2", memoryId: "memory-03", name: "5:00 AM Royal Enfield", x: 38, y: 22, size: "md", brightness: 0.9 },
  { id: "star-3", memoryId: "memory-07", name: "Rearview Mirror Glance", x: 26, y: 26, size: "md", brightness: 0.85 },
  { id: "star-4", memoryId: "memory-08", name: "“When Is Your Result?”", x: 20, y: 40, size: "sm", brightness: 0.75 },
  { id: "star-5", memoryId: "memory-05", name: "Our First Holi Ever", x: 28, y: 58, size: "md", brightness: 0.9 },
  { id: "star-6", memoryId: "memory-12", name: "“Can We Go Out?”", x: 38, y: 72, size: "sm", brightness: 0.8 },
  { id: "star-7", memoryId: "memory-04", name: "May 10: She Said Yes! ❤️", x: 50, y: 85, size: "lg", brightness: 1 },
  { id: "star-8", memoryId: "memory-15", name: "Panchavadi Anna Temple", x: 62, y: 72, size: "sm", brightness: 0.8 },
  { id: "star-9", memoryId: "memory-16", name: "Confession in Front of Anna", x: 72, y: 58, size: "md", brightness: 0.9 },
  { id: "star-10", memoryId: "memory-01", name: "Veerampattinam Beach", x: 80, y: 40, size: "sm", brightness: 0.75 },
  { id: "star-11", memoryId: "memory-11", name: "Karupatti Coffee Dates", x: 74, y: 26, size: "md", brightness: 0.85 },
  { id: "star-12", memoryId: "memory-20", name: "Auroville & Pondy Rides", x: 62, y: 22, size: "md", brightness: 0.9 },
];

export const constellationLines: ConstellationLine[] = [
  { from: "star-1", to: "star-2" },
  { from: "star-2", to: "star-3" },
  { from: "star-3", to: "star-4" },
  { from: "star-4", to: "star-5" },
  { from: "star-5", to: "star-6" },
  { from: "star-6", to: "star-7" },
  { from: "star-7", to: "star-8" },
  { from: "star-8", to: "star-9" },
  { from: "star-9", to: "star-10" },
  { from: "star-10", to: "star-11" },
  { from: "star-11", to: "star-12" },
  { from: "star-12", to: "star-1" },
  // Cross beam to heart center
  { from: "star-1", to: "star-7" },
];
