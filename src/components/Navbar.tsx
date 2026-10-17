import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Menu, X, Heart, Sparkles } from 'lucide-react';
import { BubuDudu } from './BubuDudu';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'story', label: 'Our Story' },
    { id: 'gallery', label: 'Album' },
    { id: 'little-things', label: 'Little Things' },
    { id: 'game', label: 'Our Game' },
    { id: 'letter', label: 'Love Letter' },
    { id: 'constellation', label: 'Constellation' },
    { id: 'birthday', label: 'Birthday Finale ✨', highlight: true },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#17172F]/85 backdrop-blur-md border-b border-[#D8B778]/20 shadow-lg py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#D98C9B] via-[#D8B778] to-[#F4C7CF] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            type="button"
            onClick={() => handleNavClick('opening')}
            className="flex items-center gap-2 text-left group"
          >
            <BubuDudu variant="cuddle" size="sm" className="w-8 h-8" />
            <span className="font-serif-romantic text-lg sm:text-xl font-medium tracking-wider text-[#FFF8F0] group-hover:text-[#F4C7CF] transition-colors">
              {siteConfig.herName}
            </span>
            <Heart className="w-3.5 h-3.5 text-[#D98C9B] fill-[#D98C9B] animate-pulse" />
            <span className="font-serif-romantic text-lg sm:text-xl font-medium tracking-wider text-[#D8B778] group-hover:text-[#FFF8F0] transition-colors">
              {siteConfig.myName}
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs tracking-wider uppercase transition-all duration-200 font-medium ${
                  item.highlight
                    ? 'bg-gradient-to-r from-[#D98C9B] to-[#D8B778] text-[#17172F] font-semibold hover:opacity-90 shadow-sm'
                    : activeSection === item.id
                    ? 'bg-white/15 text-[#FFF8F0] border border-[#D8B778]/30 shadow-sm'
                    : 'text-[#FFF8F0]/70 hover:text-[#FFF8F0] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-full bg-white/10 text-[#FFF8F0] hover:bg-white/20 transition-colors border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#17172F]/95 backdrop-blur-xl md:hidden pt-20 px-6 flex flex-col justify-between pb-8 animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-3">
            <div className="pb-4 border-b border-white/10 flex items-center justify-between">
              <span className="font-serif-romantic text-sm text-[#D8B778] tracking-widest uppercase">
                Explore Our Universe
              </span>
              <Sparkles className="w-4 h-4 text-[#D8B778]" />
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavClick(item.id);
                }}
                className={`py-3 px-4 rounded-xl text-left text-base font-serif-romantic tracking-wide transition-all ${
                  item.highlight
                    ? 'bg-gradient-to-r from-[#D98C9B] to-[#D8B778] text-[#17172F] font-bold shadow-lg'
                    : activeSection === item.id
                    ? 'bg-white/15 text-[#FFF8F0] font-semibold'
                    : 'text-[#FFF8F0]/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <p className="font-script-romantic text-lg text-[#F4C7CF]">
              Made with endless love for {siteConfig.herName} ❤️
            </p>
          </div>
        </div>
      )}
    </>
  );
};
