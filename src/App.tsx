import React, { useState } from 'react';
import { StarryBackground } from './components/StarryBackground';
import { Navbar } from './components/Navbar';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';
import { Lightbox } from './components/Lightbox';

import { OpeningSurprise } from './sections/OpeningSurprise';
import { TimelineSection } from './sections/TimelineSection';
import { PhotoGallerySection } from './sections/PhotoGallerySection';
import { LittleThingsSection } from './sections/LittleThingsSection';
import { QuizSection } from './sections/QuizSection';
import { LoveLetterSection } from './sections/LoveLetterSection';
import { ConstellationSection } from './sections/ConstellationSection';
import { BirthdayFinaleSection } from './sections/BirthdayFinaleSection';
import { FinalLoveNoteSection } from './sections/FinalLoveNoteSection';

import { siteConfig } from './data/siteConfig';
import { galleryPhotos, type GalleryPhoto } from './data/gallery';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [autoStartMusic, setAutoStartMusic] = useState(false);
  const [activeSection, setActiveSection] = useState('opening');

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleEnterStory = () => {
    setHasEntered(true);
    setAutoStartMusic(true);
    setActiveSection('story');
    setTimeout(() => {
      document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleSkipIntro = () => {
    setHasEntered(true);
    setActiveSection('story');
    setTimeout(() => {
      document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (!hasEntered) {
      setHasEntered(true);
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'opening') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenPhoto = (photo: GalleryPhoto, index?: number) => {
    if (typeof index === 'number') {
      setLightboxIndex(index);
    } else {
      const foundIdx = galleryPhotos.findIndex((p) => p.id === photo.id);
      setLightboxIndex(foundIdx >= 0 ? foundIdx : 0);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#17172F] text-[#FFF8F0] overflow-x-hidden">
      {/* Dynamic Starry Canvas in Background */}
      <StarryBackground />

      {/* Persistent Glass Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Experience Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Section 1: Opening Surprise */}
        <OpeningSurprise onEnter={handleEnterStory} onSkip={handleSkipIntro} />

        {/* Subsequent Sections (Smoothly revealed upon stepping into story or accessible directly) */}
        <div
          className={`transition-all duration-1000 ${
            hasEntered
              ? 'opacity-100 translate-y-0'
              : 'opacity-90 translate-y-4'
          }`}
        >
          {/* Section 2: Timeline Scrapbook */}
          <TimelineSection onPhotoClick={handleOpenPhoto} />

          {/* Section 3: Photo Gallery (25+ real memories) */}
          <PhotoGallerySection onPhotoClick={handleOpenPhoto} />

          {/* Section 4: Little Things I Love About You */}
          <LittleThingsSection />

          {/* Section 5: Our Little Game */}
          <QuizSection />

          {/* Section 6: Love Letter with Wax Seal */}
          <LoveLetterSection />

          {/* Section 7: Constellation of Memories */}
          <ConstellationSection onPhotoClick={handleOpenPhoto} />

          {/* Section 8: Birthday Finale Surprise & Cake */}
          <BirthdayFinaleSection onPhotoClick={handleOpenPhoto} />

          {/* Section 9: Final Love Note & Replay Controls */}
          <FinalLoveNoteSection
            onReliveStory={() => handleNavigate('story')}
            onReadLetter={() => handleNavigate('letter')}
            onVisitMemories={() => handleNavigate('gallery')}
          />
        </div>
      </main>

      {/* Floating Audio Soundtrack Player */}
      <FloatingMusicPlayer
        playlist={siteConfig.playlist}
        autoStartTrigger={autoStartMusic}
      />

      {/* Fullscreen Photo Lightbox Modal */}
      <Lightbox
        photos={galleryPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};

export default App;
