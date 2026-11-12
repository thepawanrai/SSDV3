import React, { useState, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { Languages, Globe, Check, Search, X, ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  variant?: 'header' | 'compact' | 'drawer' | 'circular' | 'mobile-header' | 'modal-only';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'header' }) => {
  const { currentLanguage, setLanguage, isSelectorOpen, setIsSelectorOpen, languages } =
    useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input on open
  useEffect(() => {
    if (isSelectorOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      setSearchQuery('');
    }
  }, [isSelectorOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSelectorOpen) {
        setIsSelectorOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSelectorOpen, setIsSelectorOpen]);

  const filteredLanguages = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return languages;
    return languages.filter(
      (lang) =>
        lang.name.toLowerCase().includes(q) ||
        lang.englishName.toLowerCase().includes(q) ||
        lang.region.toLowerCase().includes(q) ||
        lang.shortCode.toLowerCase().includes(q)
    );
  }, [languages, searchQuery]);

  const handleSelectLanguage = (code: string) => {
    setLanguage(code);
    setIsSelectorOpen(false);
  };

  return (
    <>
      {/* Dynamic Trigger Button */}
      {variant === 'modal-only' ? null : variant === 'mobile-header' ? (
        <button
          type="button"
          onClick={() => setIsSelectorOpen(true)}
          aria-label="अपनी क्षेत्रीय भाषा चुनें (Choose Language)"
          title={`वर्तमान भाषा: ${currentLanguage.name} • भाषा बदलने के लिए क्लिक करें`}
          className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#3E1B10] via-[#5B2A1B] to-[#481E13] text-[#DFB25A] border-2 border-[#DFB25A] shadow-xs active:scale-90 transition-all flex items-center justify-center p-1 cursor-pointer focus:outline-none"
        >
          {/* Themed A / क Multilingual Translation Icon */}
          <svg
            viewBox="0 0 28 22"
            className="w-5 h-auto drop-shadow-xs"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Back speech bubble with 'A' */}
            <rect x="1" y="1" width="15" height="13" rx="2" fill="#FAF7F2" stroke="#DFB25A" strokeWidth="1.2" />
            <path d="M3 14L1 18V14H3Z" fill="#FAF7F2" stroke="#DFB25A" strokeWidth="1.2" strokeLinejoin="round" />
            <text x="8.5" y="10.5" textAnchor="middle" fill="#3E1B10" fontSize="9" fontWeight="800" fontFamily="Inter, sans-serif">A</text>

            {/* Front overlapping speech bubble with Devanagari 'क' */}
            <rect x="11" y="7" width="16" height="13" rx="2" fill="#2E120A" stroke="#DFB25A" strokeWidth="1.3" />
            <path d="M25 20L27 23V20H25Z" fill="#2E120A" stroke="#DFB25A" strokeWidth="1.3" strokeLinejoin="round" />
            <text x="19" y="17" textAnchor="middle" fill="#DFB25A" fontSize="10" fontWeight="bold" fontFamily="'Noto Sans Devanagari', sans-serif">क</text>
          </svg>
        </button>
      ) : variant === 'circular' ? (
        <div className="flex items-center group relative">
          {/* Tooltip / Label */}
          <div className="hidden sm:flex items-center space-x-1.5 mr-2.5 px-3 py-1.5 rounded-full text-xs font-serif font-medium shadow-md transition-all duration-300 pointer-events-none bg-[#481E13] text-[#DFB25A] border border-[#DFB25A]/40 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
            <span>भाषा: {currentLanguage.name} (बदलें)</span>
          </div>

          <button
            type="button"
            onClick={() => setIsSelectorOpen(true)}
            aria-label="अपनी क्षेत्रीय भाषा चुनें (Choose Language)"
            title={`वर्तमान भाषा: ${currentLanguage.name} • भाषा बदलने के लिए क्लिक करें`}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#3E1B10] via-[#5B2A1B] to-[#481E13] text-[#DFB25A] border-2 border-[#DFB25A] shadow-lg shadow-[#3E1B10]/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DFB25A] p-2 relative group"
          >
            {/* Themed A / क Multilingual Translation Icon */}
            <svg
              viewBox="0 0 28 22"
              className="w-7 h-auto drop-shadow-sm transition-transform group-hover:scale-110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Back speech bubble with 'A' */}
              <rect x="1" y="1" width="15" height="13" rx="2" fill="#FAF7F2" stroke="#DFB25A" strokeWidth="1.2" />
              <path d="M3 14L1 18V14H3Z" fill="#FAF7F2" stroke="#DFB25A" strokeWidth="1.2" strokeLinejoin="round" />
              <text x="8.5" y="10.5" textAnchor="middle" fill="#3E1B10" fontSize="9" fontWeight="800" fontFamily="Inter, sans-serif">A</text>

              {/* Front overlapping speech bubble with Devanagari 'क' */}
              <rect x="11" y="7" width="16" height="13" rx="2" fill="#2E120A" stroke="#DFB25A" strokeWidth="1.3" />
              <path d="M25 20L27 23V20H25Z" fill="#2E120A" stroke="#DFB25A" strokeWidth="1.3" strokeLinejoin="round" />
              <text x="19" y="17" textAnchor="middle" fill="#DFB25A" fontSize="10" fontWeight="bold" fontFamily="'Noto Sans Devanagari', sans-serif">क</text>
            </svg>
          </button>
        </div>
      ) : variant === 'compact' ? (
        <button
          type="button"
          onClick={() => setIsSelectorOpen(true)}
          className="flex items-center space-x-1 px-2.5 py-1.5 rounded-md border border-[#E7D7C4] bg-[#FAF7F2] hover:bg-white text-[#5B2A1B] text-xs font-semibold shadow-2xs transition-all active:scale-95 cursor-pointer"
          aria-label="भाषा चुनें (Select Language)"
          title="अपनी क्षेत्रीय भाषा चुनें"
        >
          <Globe className="w-3.5 h-3.5 text-[#DFB25A]" />
          <span className="font-serif">{currentLanguage.shortCode}</span>
        </button>
      ) : variant === 'drawer' ? (
        <button
          type="button"
          onClick={() => setIsSelectorOpen(true)}
          className="w-full flex items-center justify-between p-3 rounded-xl border border-[#DFB25A]/60 bg-gradient-to-r from-[#FAF0E4] to-[#FFFDF9] text-[#5B2A1B] hover:shadow-xs transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#5B2A1B] text-white flex items-center justify-center shadow-2xs">
              <Languages className="w-4 h-4 text-[#DFB25A]" />
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-1.5">
                <span className="text-xs font-bold font-serif">{currentLanguage.name}</span>
                <span className="text-[10px] text-stone-500">({currentLanguage.englishName})</span>
              </div>
              <p className="text-[10px] text-stone-500 font-sans">
                {currentLanguage.region}
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-[#5B2A1B] bg-white px-2 py-1 rounded border border-[#E7D7C4]">
            भाषा बदलें →
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsSelectorOpen(true)}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md border border-[#E7D7C4] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#5B2A1B] text-xs sm:text-sm font-medium transition-all shadow-2xs hover:shadow-xs cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#5B2A1B]/30"
          aria-label="वेबसाइट की भाषा चुनें"
          title="वेबसाइट की भाषा बदलें (Select Language)"
        >
          <Languages className="w-4 h-4 text-[#C49033] group-hover:scale-110 transition-transform" />
          <span className="font-serif font-bold text-[#5B2A1B]">{currentLanguage.name}</span>
          <ChevronDown className="w-3 h-3 text-stone-400 group-hover:text-[#5B2A1B] transition-colors" />
        </button>
      )}

      {/* Multilingual Selection Modal / Popover (Rendered in Portal so it cannot be affected by any parent layout) */}
      {isSelectorOpen &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div
              ref={modalRef}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border-2 border-[#DFB25A] overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
              role="dialog"
              aria-modal="true"
              aria-labelledby="language-modal-title"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-[#3E1B10] via-[#5B2A1B] to-[#481E13] text-[#FAF7F2] border-b-2 border-[#DFB25A] flex items-start justify-between">
                <div className="space-y-1">
                  <h3 id="language-modal-title" className="font-serif text-lg sm:text-2xl font-bold text-white">
                    अपनी क्षेत्रीय भाषा चुनें (Choose Your Language)
                  </h3>
                  <p className="text-xs text-stone-300 font-sans">
                    सत्य सनातन धाम की आधिकारिक जानकारी अपनी मातृभाषा में पढ़ें
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSelectorOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="बंद करें (Close)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-3 sm:p-4 bg-[#FAF7F2] border-b border-[#E7D7C4]">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="भाषा या राज्य का नाम लिखें (Search by language or state)..."
                    className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-[#E7D7C4] text-xs sm:text-sm text-slate-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] focus:border-[#5B2A1B]"
                  />
                </div>
              </div>

              {/* Language Grid */}
              <div className="p-3 sm:p-5 overflow-y-auto flex-1 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {filteredLanguages.map((lang) => {
                    const isSelected = currentLanguage.code === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => handleSelectLanguage(lang.code)}
                        className={`text-left p-3 rounded-xl border transition-all cursor-pointer relative group flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#FAF0E4] border-[#DFB25A] ring-2 ring-[#DFB25A]/40 shadow-xs'
                            : 'bg-white hover:bg-stone-50 border-[#E7D7C4] hover:border-[#DFB25A]/60'
                        }`}
                      >
                        <div className="flex items-start justify-between w-full mb-1">
                          <div>
                            <span className="font-serif font-bold text-base sm:text-lg text-[#5B2A1B] block leading-tight">
                              {lang.name}
                            </span>
                            <span className="text-xs text-stone-500 font-sans font-medium">
                              {lang.englishName}
                            </span>
                          </div>
                          {isSelected ? (
                            <div className="w-5 h-5 rounded-full bg-[#265B33] text-white flex items-center justify-center flex-shrink-0">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          ) : (
                            <span className="text-[10px] font-mono text-stone-400 uppercase group-hover:text-[#5B2A1B]">
                              {lang.shortCode}
                            </span>
                          )}
                        </div>

                        <div className="pt-2 border-t border-[#E7D7C4]/50 flex items-center justify-between text-[11px] text-stone-500">
                          <span className="truncate max-w-[130px]">{lang.region}</span>
                          <span className="text-[10px] text-[#793A27] font-serif font-semibold">
                            {lang.greeting.split('/')[0]}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {filteredLanguages.length === 0 && (
                  <div className="py-8 text-center text-xs sm:text-sm text-stone-500">
                    कोई भाषा नहीं मिली। कृपया अन्य नाम खोजें।
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-3 sm:p-4 bg-[#FAF7F2] border-t border-[#E7D7C4] flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="text-stone-600">
                  <span>
                    वर्तमान भाषा: <strong className="text-[#5B2A1B]">{currentLanguage.name}</strong>
                  </span>
                </div>

                {currentLanguage.code !== 'hi' && (
                  <button
                    type="button"
                    onClick={() => handleSelectLanguage('hi')}
                    className="px-3 py-1 bg-white hover:bg-stone-100 text-[#5B2A1B] font-bold border border-[#E7D7C4] rounded-md transition-colors cursor-pointer"
                  >
                    मूल भाषा (हिन्दी) में बदलें
                  </button>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
