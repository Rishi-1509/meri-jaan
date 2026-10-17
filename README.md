# A Little Universe For Her ❤️
> *An interactive, cinematic birthday surprise built with love.*

A luxury, romantic birthday surprise website combining three aesthetics:
1. **Playful & Cute**: Polaroids, floating hearts, interactive quizzes, folded note cards, and scrapbook tape stickers.
2. **Cinematic & Emotional**: Dreamy starry night opening, chapter-by-chapter relationship story, intimate wax-sealed love letter, and an interactive birthday candle finale.
3. **Luxury & Elegant**: Editorial serif typography (`Cormorant Garamond`, `Playfair Display`), calligraphy accents (`Caveat`, `Dancing Script`), glassmorphism, champagne gold foil highlights, and warm candlelight.

---

## 🧭 Experience Journey

1. **Opening Experience** — *“Hey, [HER_NAME]... ❤️ I made a little something for you.”*
2. **Our Story (The Relationship Journey)** — 8 chronological scrapbook chapters from *Before Our Story* to *More Pages to Come*.
3. **Photo Memories** — Visually stunning gallery designed around 20–30 real photographs with category filters, polaroid frames, and full-screen lightbox.
4. **Little Things I Love About You** — Interactive folded cards revealing personal observations and compliments.
5. **Our Little Game** — Playful relationship quiz with sweet feedback and celebration.
6. **The Love Letter** — Intimate wax-sealed envelope that unfolds with paragraph-by-paragraph reveals and handwritten signature.
7. **Memory Constellation** — Interactive night-sky constellation forming a cosmic heart connected to your memories.
8. **Birthday Finale** — 3D tiered birthday cake, glowing candles to blow out, confetti explosion (`canvas-confetti`), and personal birthday message reveal.
9. **Final Love Note** — Warm indie romance ending with closing gratitude and replay buttons.
10. **Soundtrack Player** — Floating luxury music player supporting your songs (*Singari* and *Watcha Udatha*), local audio files, ambient romantic piano mode, and official streaming links.

---

## 📁 Project Organization

```text
a-little-universe/
├── public/
│   ├── images/
│   │   └── memories/          ← Put your 20-30 real photos here (memory-01.jpg, etc.)
│   └── audio/                ← Put your audio files here (singari.mp3, watcha-udatha.mp3)
├── src/
│   ├── components/
│   │   ├── CakeAndCandles.tsx       ← Interactive SVG birthday cake & candle blowing
│   │   ├── FloatingMusicPlayer.tsx  ← Floating soundtrack player & ambient synth
│   │   ├── Lightbox.tsx             ← Full-screen responsive photo lightbox
│   │   ├── MissingPhotoFallback.tsx ← Polaroid fallback art when photos are missing
│   │   ├── Navbar.tsx               ← Monogram header & scroll progress bar
│   │   ├── PolaroidCard.tsx         ← Scrapbook polaroids with tape & tilt
│   │   └── StarryBackground.tsx     ← 60 FPS interactive HTML5 starry night canvas
│   ├── sections/
│   │   ├── OpeningSurprise.tsx
│   │   ├── TimelineSection.tsx
│   │   ├── PhotoGallerySection.tsx
│   │   ├── LittleThingsSection.tsx
│   │   ├── QuizSection.tsx
│   │   ├── LoveLetterSection.tsx
│   │   ├── ConstellationSection.tsx
│   │   ├── BirthdayFinaleSection.tsx
│   │   └── FinalLoveNoteSection.tsx
│   ├── data/
│   │   ├── siteConfig.ts     ← Master config: names, dates, songs, messages
│   │   ├── timeline.ts       ← 8 chronological scrapbook chapters
│   │   ├── gallery.ts        ← 25+ photo manifest & categories
│   │   ├── compliments.ts    ← Little things notes & prompts
│   │   ├── quiz.ts           ← Relationship quiz questions & reactions
│   │   ├── loveLetter.ts     ← Wax-sealed letter paragraphs & signature
│   │   └── constellation.ts  ← Star coordinates & memory mappings
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── vercel.json               ← Ready for 1-click Vercel deployment
└── package.json
```

---

## 🛠️ Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🎨 Personalization Guide (No Coding Needed!)

All your personal details, memories, songs, and photographs are configured through simple data files in `src/data/`:

### 1. Central Config (`src/data/siteConfig.ts`)
Replace placeholders:
- `herName`: Her real name (e.g., `"Ananya"`)
- `herNickname`: Her cute nickname
- `myName`: Your name (e.g., `"Rishi"`)
- `specialDate`: First day you met or started dating
- `birthdayDate`: Her birthday
- `birthdayMessage`: Your heartfelt birthday note
- `playlist`: Songs configuration

### 2. Adding Real Photographs (`public/images/memories/` & `src/data/gallery.ts`)
1. Place 20 to 30 photos in `public/images/memories/` named `memory-01.jpg`, `memory-02.jpg`, etc.
2. Open `src/data/gallery.ts` to customize:
   - `caption`: Your personal memory or comment.
   - `date`: Optional date.
   - `category`: `"Our Beginning"`, `"Cute Moments"`, `"Funny Us"`, `"Favorite Memories"`, `"Special Days"`.
   - `featured`: Set to `true` for your most favorite photos.

*Note: If any photograph has not yet been placed in the folder, the site displays a romantic custom polaroid illustration with instructions, so the layout never breaks!*

### 3. Adding Your Songs (`public/audio/` & `src/data/siteConfig.ts`)
1. Drop `singari.mp3` and `watcha-udatha.mp3` into `public/audio/`.
2. The website will automatically play them when she enters the story or clicks Play.
3. If no MP3 is placed yet, the website features a built-in gentle romantic piano synth so sound works out of the box, with links to the official streaming tracks.

### 4. Customizing the Love Letter (`src/data/loveLetter.ts`)
Open `src/data/loveLetter.ts` to write your personal paragraphs, wax seal initials, and closing sign-off.

---

## 🚀 Deploying to Vercel

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "A Little Universe For Her ❤️"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/a-little-universe.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import your repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"** — within 30 seconds, your surprise website will be live!

---

## 🔒 Privacy Notice
- This website does not include trackers, analytics, cookies, or public uploads.
- When deployed on Vercel as a static site, assets are publicly reachable to anyone who has the exact URL. Keep the link private to share only with her.
