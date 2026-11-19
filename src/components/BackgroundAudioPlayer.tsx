import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useAudio } from '../context/AudioContext';

export const BackgroundAudioPlayer: React.FC = () => {
  const { isPlaying, toggleAudio } = useAudio();
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Header-Position Controls (Shifted up from footer position to top-right below sticky header) */}
      <div
        className={`fixed right-3 sm:right-6 z-30 flex flex-col items-end space-y-2.5 sm:space-y-3 transition-all duration-300 ${
          isScrolled ? 'top-[76px] sm:top-[82px]' : 'top-[112px] sm:top-[118px]'
        }`}
      >
        {/* Multilingual Circular Button */}
        <LanguageSelector variant="circular" />

        {/* Floating Audio Controller */}
        <div
          className="flex items-center group relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Tooltip / Label */}
          <div
            className={`flex items-center space-x-1.5 mr-2.5 px-3 py-1.5 rounded-full text-xs font-serif font-medium shadow-md transition-all duration-300 pointer-events-none whitespace-nowrap ${
              isPlaying
                ? 'bg-[#481E13] text-[#DFB25A] border border-[#DFB25A]/40'
                : 'bg-white/95 text-[#5B2A1B] border border-[#E7D7C4]'
            } ${showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
          >
            <Music className="w-3.5 h-3.5 text-[#DFB25A]" />
            <span>{isPlaying ? 'सत्य सनातन धुन (चल रहा है)' : 'संगीत चालू करें'}</span>
          </div>

          {/* Toggle Button */}
          <button
            type="button"
            onClick={toggleAudio}
            aria-label={isPlaying ? 'संगीत बंद करें' : 'संगीत चालू करें'}
            title={isPlaying ? 'संगीत बंद करें' : 'संगीत चालू करें'}
            className="w-12 h-12 relative flex items-center justify-center rounded-full bg-gradient-to-tr from-[#3E1B10] via-[#5B2A1B] to-[#481E13] text-[#DFB25A] border-2 border-[#DFB25A] shadow-lg shadow-[#3E1B10]/30 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#DFB25A] cursor-pointer"
          >
            {isPlaying ? (
              <div className="flex flex-col items-center justify-center">
                <Volume2 className="w-5 h-5 text-[#DFB25A] animate-pulse" />
                {/* Mini Audio Equalizer Animation */}
                <div className="flex items-end justify-center space-x-0.5 mt-0.5 h-2">
                  <span className="w-0.5 h-2 bg-[#DFB25A] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-0.5 h-3 bg-[#DFB25A] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-0.5 h-1.5 bg-[#DFB25A] rounded-full animate-bounce"></span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <VolumeX className="w-5 h-5 text-[#DFB25A]/70" />
                <span className="text-[9px] font-bold text-[#DFB25A]/80 font-mono mt-0.5 leading-none">OFF</span>
              </div>
            )}

            {/* Subtle pulse ring when playing */}
            {isPlaying && (
              <span className="absolute -inset-1 rounded-full border border-[#DFB25A]/50 animate-ping pointer-events-none opacity-40"></span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};
