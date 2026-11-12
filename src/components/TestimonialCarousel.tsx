import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  CheckCircle2,
  Heart,
  MessageSquareHeart,
  Sparkles,
  MapPin,
  Calendar,
  X,
  Send
} from 'lucide-react';
import { testimonialsData, Testimonial } from '../config/siteData';
import { submitToWeb3Forms } from '../utils/web3forms';

interface TestimonialCarouselProps {
  onOpenDonate?: (sevaId?: string, amount?: number) => void;
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  onOpenDonate,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'donor' | 'visitor' | 'volunteer'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Experience Submission Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customTestimonials, setCustomTestimonials] = useState<Testimonial[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: 'उत्तर प्रदेश',
    role: 'दर्शनार्थी एवं श्रद्धालु',
    category: 'visitor' as 'donor' | 'visitor' | 'volunteer',
    sevaContributed: '',
    highlight: '',
    quote: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Combine site testimonials with user submitted testimonials (stored in localStorage if available)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ssd_user_testimonials');
      if (stored) {
        setCustomTestimonials(JSON.parse(stored));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const allTestimonials = [...customTestimonials, ...testimonialsData];

  // Filter based on active category
  const filteredTestimonials = activeCategory === 'all'
    ? allTestimonials
    : allTestimonials.filter((item) => item.category === activeCategory);

  const totalCount = filteredTestimonials.length;

  // Ensure current index is within bounds when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handleNext = useCallback(() => {
    if (totalCount === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalCount);
  }, [totalCount]);

  const handlePrev = useCallback(() => {
    if (totalCount === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalCount) % totalCount);
  }, [totalCount]);

  // Autoplay effect
  useEffect(() => {
    if (!isPlaying || isHovered || totalCount <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, totalCount, handleNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Submit Experience Form
  const handleSubmitExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.quote.trim()) return;

    const newTestimonial: Testimonial = {
      id: `user-test-${Date.now()}`,
      name: formData.name.trim(),
      hindiName: formData.name.trim(),
      role: formData.role.trim() || 'दर्शनार्थी एवं श्रद्धालु',
      city: formData.city.trim() || 'हमीरपुर',
      state: formData.state.trim() || 'उत्तर प्रदेश',
      date: 'आज',
      category: formData.category,
      categoryHindi:
        formData.category === 'donor'
          ? 'दानदाता'
          : formData.category === 'volunteer'
          ? 'स्वयंसेवक'
          : 'दर्शनार्थी',
      highlight: formData.highlight.trim() || formData.quote.trim().slice(0, 60) + '...',
      quote: formData.quote.trim(),
      sevaContributed: formData.sevaContributed.trim() || undefined,
      verifiedDonor: formData.category === 'donor',
    };

    const updated = [newTestimonial, ...customTestimonials];
    setCustomTestimonials(updated);
    try {
      localStorage.setItem('ssd_user_testimonials', JSON.stringify(updated));
    } catch {
      // ignore
    }

    // Also forward devotee feedback to Web3Forms
    submitToWeb3Forms({
      formTitle: 'भक्त / दानदाता अनुभव प्रविष्टि (Testimonial)',
      senderName: formData.name.trim(),
      data: {
        name: formData.name.trim(),
        city: formData.city.trim(),
        state: formData.state.trim(),
        category: newTestimonial.categoryHindi,
        role: formData.role.trim(),
        sevaContributed: formData.sevaContributed.trim() || 'उल्लेख नहीं',
        highlight: newTestimonial.highlight,
        quote: formData.quote.trim(),
      },
    }).catch((err) => console.error('Web3Forms testimonial error:', err));

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        city: '',
        state: 'उत्तर प्रदेश',
        role: 'दर्शनार्थी एवं श्रद्धालु',
        category: 'visitor',
        sevaContributed: '',
        highlight: '',
        quote: '',
      });
      setCurrentIndex(0);
    }, 1500);
  };

  const currentItem = filteredTestimonials[currentIndex];
  // Secondary item for 2-column view on larger screens
  const nextItemIndex = (currentIndex + 1) % (totalCount || 1);
  const secondaryItem = filteredTestimonials[nextItemIndex];

  return (
    <section
      aria-label="श्रद्धालुओं एवं दानदाताओं के अनुभव"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* 1. SECTION HEADER (Anti-slop editorial typography) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E7D7C4] pb-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs text-[#793A27] font-semibold tracking-widest uppercase">
            <span>आत्मीय उद्गार</span>
            <span aria-hidden="true">·</span>
            <span>श्रद्धा एवं विश्वास</span>
            <span aria-hidden="true">·</span>
            <span>सत्य सनातन धाम</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5B2A1B]">
            भक्तों एवं दानदाताओं के प्रेरणादायी अनुभव
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-2xl">
            श्री श्री राधा कृष्ण बिहारी जी मंदिर के दर्शनार्थियों, पर्यावरण सेवियों एवं समर्पित सहयोगियों की प्रत्यक्ष अनुभूतियाँ।
          </p>
        </div>

        {/* Action Button: Share experience */}
        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-white hover:bg-[#FAF7F2] text-[#5B2A1B] text-xs font-semibold rounded-md border border-[#E7D7C4] transition-colors cursor-pointer inline-flex items-center space-x-1.5 shadow-xs"
          >
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#793A27]" />
            <span>अपना अनुभव साझा करें</span>
          </button>

          {onOpenDonate && (
            <button
              type="button"
              onClick={() => onOpenDonate()}
              className="px-4 py-2 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-bold rounded-md transition-colors cursor-pointer inline-flex items-center space-x-1.5 shadow-xs"
            >
              <Heart className="w-3.5 h-3.5 text-[#DFB25A] fill-current" />
              <span>सहयोग समर्पित करें</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. CATEGORY SEGMENTED FILTER CONTROLS */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center p-1 bg-white rounded-lg border border-[#E7D7C4] shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#5B2A1B] text-[#FAF7F2] shadow-xs'
                : 'text-stone-600 hover:text-[#5B2A1B]'
            }`}
          >
            सभी अनुभव ({allTestimonials.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('donor')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'donor'
                ? 'bg-[#5B2A1B] text-[#FAF7F2] shadow-xs'
                : 'text-stone-600 hover:text-[#5B2A1B]'
            }`}
          >
            दानदाता ({allTestimonials.filter((t) => t.category === 'donor').length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('visitor')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'visitor'
                ? 'bg-[#5B2A1B] text-[#FAF7F2] shadow-xs'
                : 'text-stone-600 hover:text-[#5B2A1B]'
            }`}
          >
            दर्शनार्थी ({allTestimonials.filter((t) => t.category === 'visitor').length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('volunteer')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'volunteer'
                ? 'bg-[#5B2A1B] text-[#FAF7F2] shadow-xs'
                : 'text-stone-600 hover:text-[#5B2A1B]'
            }`}
          >
            सेवा सहयोगी ({allTestimonials.filter((t) => t.category === 'volunteer').length})
          </button>
        </div>

        {/* Carousel Navigation Toolbar */}
        <div className="flex items-center gap-2">
          {/* Autoplay Play/Pause toggle */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'स्वतः अग्रसर रोकें (Pause)' : 'स्वतः अग्रसर चालू करें (Play)'}
            title={isPlaying ? 'स्वतः अग्रसर रोकें' : 'स्वतः अग्रसर चालू करें'}
            className="w-8 h-8 rounded-full border border-[#E7D7C4] bg-white hover:bg-[#FAF7F2] text-stone-600 hover:text-[#5B2A1B] flex items-center justify-center transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          {/* Slide counter */}
          <span className="text-xs font-sans text-stone-500 tabular-nums px-1">
            {totalCount > 0 ? String(currentIndex + 1).padStart(2, '0') : '00'} /{' '}
            {String(totalCount).padStart(2, '0')}
          </span>

          {/* Previous / Next buttons */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="पिछला अनुभव (Previous)"
            className="w-9 h-9 rounded-full border border-[#E7D7C4] bg-white hover:bg-[#FAF7F2] text-[#5B2A1B] flex items-center justify-center transition-colors shadow-2xs cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="अगला अनुभव (Next)"
            className="w-9 h-9 rounded-full border border-[#E7D7C4] bg-white hover:bg-[#FAF7F2] text-[#5B2A1B] flex items-center justify-center transition-colors shadow-2xs cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. CAROUSEL DISPLAY CONTAINER */}
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {totalCount === 0 ? (
          <div className="bg-white rounded-xl border border-[#E7D7C4] p-12 text-center text-stone-500 space-y-2">
            <p className="text-sm">इस श्रेणी में अभी कोई अनुभव उपलब्ध नहीं है।</p>
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className="text-xs font-bold text-[#5B2A1B] underline cursor-pointer"
            >
              सभी अनुभव देखें
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Primary Active Card */}
            {currentItem && (
              <div
                key={currentItem.id}
                className="bg-white rounded-2xl border border-[#E7D7C4] shadow-xs p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 relative group"
              >
                {/* Top Quote Icon & Meta */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#FAF0E4] border border-[#E7D7C4] flex items-center justify-center text-[#DFB25A]">
                      <Quote className="w-5 h-5 fill-current" />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      {currentItem.verifiedDonor && (
                        <div className="flex items-center gap-1 text-[#265B33] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>सत्यापित सहयोगी</span>
                          <span aria-hidden="true" className="text-stone-300">·</span>
                        </div>
                      )}
                      <span>{currentItem.date}</span>
                    </div>
                  </div>

                  {/* Pull Quote Highlight */}
                  <blockquote className="font-serif text-lg sm:text-xl font-bold text-[#5B2A1B] leading-snug">
                    “{currentItem.highlight}”
                  </blockquote>

                  {/* Full Prose Narrative */}
                  <p className="text-xs sm:text-sm text-[#3E2B23] leading-relaxed font-sans">
                    {currentItem.quote}
                  </p>

                  {/* Seva attribution if available */}
                  {currentItem.sevaContributed && (
                    <div className="pt-3 border-t border-[#FAF0E4] flex items-center gap-1.5 text-xs text-[#793A27]">
                      <Sparkles className="w-3.5 h-3.5 text-[#DFB25A] shrink-0" />
                      <span className="font-semibold">सहयोग:</span>
                      <span className="font-sans">{currentItem.sevaContributed}</span>
                    </div>
                  )}
                </div>

                {/* Author Block */}
                <div className="pt-4 border-t border-[#E7D7C4] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#FAF0E4] border border-[#E7D7C4] flex items-center justify-center font-serif font-bold text-sm text-[#5B2A1B] shrink-0">
                      {currentItem.hindiName.slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#5B2A1B]">
                        {currentItem.hindiName}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 font-sans">
                        <span>{currentItem.role}</span>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-0.5">
                          <MapPin className="w-3 h-3 text-stone-400" />
                          {currentItem.city}, {currentItem.state}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-[#793A27] bg-[#FAF0E4] px-2.5 py-1 rounded">
                    {currentItem.categoryHindi}
                  </span>
                </div>
              </div>
            )}

            {/* Secondary Active Card (Visible on lg screens for balanced editorial weight) */}
            {secondaryItem && secondaryItem.id !== currentItem?.id ? (
              <div
                key={secondaryItem.id}
                className="hidden lg:flex bg-[#FAF0E4]/40 rounded-2xl border border-[#E7D7C4] shadow-xs p-6 sm:p-8 flex-col justify-between space-y-6 transition-all duration-300 relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E7D7C4] flex items-center justify-center text-[#DFB25A]">
                      <Quote className="w-5 h-5 fill-current" />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      {secondaryItem.verifiedDonor && (
                        <div className="flex items-center gap-1 text-[#265B33] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>सत्यापित सहयोगी</span>
                          <span aria-hidden="true" className="text-stone-300">·</span>
                        </div>
                      )}
                      <span>{secondaryItem.date}</span>
                    </div>
                  </div>

                  <blockquote className="font-serif text-lg sm:text-xl font-bold text-[#5B2A1B] leading-snug">
                    “{secondaryItem.highlight}”
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#3E2B23] leading-relaxed font-sans">
                    {secondaryItem.quote}
                  </p>

                  {secondaryItem.sevaContributed && (
                    <div className="pt-3 border-t border-[#E7D7C4]/60 flex items-center gap-1.5 text-xs text-[#793A27]">
                      <Sparkles className="w-3.5 h-3.5 text-[#DFB25A] shrink-0" />
                      <span className="font-semibold">सहयोग:</span>
                      <span className="font-sans">{secondaryItem.sevaContributed}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#E7D7C4] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-white border border-[#E7D7C4] flex items-center justify-center font-serif font-bold text-sm text-[#5B2A1B] shrink-0">
                      {secondaryItem.hindiName.slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#5B2A1B]">
                        {secondaryItem.hindiName}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 font-sans">
                        <span>{secondaryItem.role}</span>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-0.5">
                          <MapPin className="w-3 h-3 text-stone-400" />
                          {secondaryItem.city}, {secondaryItem.state}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-[#793A27] bg-white px-2.5 py-1 rounded border border-[#E7D7C4]">
                    {secondaryItem.categoryHindi}
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* 4. DOT INDICATORS */}
      {totalCount > 1 && (
        <div className="flex items-center justify-center gap-2 pt-2">
          {filteredTestimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`अनुभव संख्या ${idx + 1} पर जाएँ`}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#5B2A1B]'
                  : 'w-2 bg-[#E7D7C4] hover:bg-[#793A27]/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* 5. USER TESTIMONIAL SUBMISSION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-[#E7D7C4] shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pb-4 border-b border-[#E7D7C4]">
              <span className="text-xs uppercase tracking-widest text-[#793A27] font-semibold">
                अनुभव प्रविष्टि
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#5B2A1B]">
                सत्य सनातन धाम का आपका अनुभव
              </h3>
              <p className="text-xs text-stone-600 font-sans">
                आपकी प्रेरणादायी अनुभूति अन्य सनातनी श्रद्धालुओं और सहयोगियों का मार्गदर्शन करेगी।
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#E2EEDF] text-[#265B33] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#194023]">
                  अनुभव सफलता से प्राप्त हुआ!
                </h4>
                <p className="text-xs text-stone-600 font-sans max-w-xs mx-auto">
                  आपका विचार कैरोसेल में सम्मिलित कर दिया गया है। श्री बिहारी जी की कृपा आप पर बनी रहे।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitExperience} className="space-y-4 pt-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    आपका नाम *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="उदा. श्री आनंद प्रकाश बाजपेयी"
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#CBD5E1] focus:outline-hidden focus:border-[#5B2A1B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      नगर / शहर *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="उदा. कानपुर / मौदहा / लखनऊ"
                      className="w-full px-3 py-2 text-xs rounded-md border border-[#CBD5E1] focus:outline-hidden focus:border-[#5B2A1B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      राज्य
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-md border border-[#CBD5E1] focus:outline-hidden focus:border-[#5B2A1B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      संबंध / श्रेणी
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          category: e.target.value as 'donor' | 'visitor' | 'volunteer',
                        })
                      }
                      className="w-full px-3 py-2 text-xs rounded-md border border-[#CBD5E1] focus:outline-hidden focus:border-[#5B2A1B]"
                    >
                      <option value="visitor">दर्शनार्थी (Visitor)</option>
                      <option value="donor">दानदाता (Donor)</option>
                      <option value="volunteer">सेवाभावी स्वयंसेवक (Volunteer)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      सेवा का नाम (यदि कोई सहयोग दिया हो)
                    </label>
                    <input
                      type="text"
                      value={formData.sevaContributed}
                      onChange={(e) => setFormData({ ...formData, sevaContributed: e.target.value })}
                      placeholder="उदा. वृक्षारोपण / मंदिर निर्माण सेवा"
                      className="w-full px-3 py-2 text-xs rounded-md border border-[#CBD5E1] focus:outline-hidden focus:border-[#5B2A1B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    संक्षिप्त शीर्षक (Highlight)
                  </label>
                  <input
                    type="text"
                    value={formData.highlight}
                    onChange={(e) => setFormData({ ...formData, highlight: e.target.value })}
                    placeholder="उदा. मंदिर दर्शन से असीम शांति और आत्मबल मिला"
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#CBD5E1] focus:outline-hidden focus:border-[#5B2A1B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    आपका विस्तृत अनुभव / संदेश *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.quote}
                    onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                    placeholder="धाम की व्यवस्था, मंदिर निर्माण, गोशाला या वृक्षारोपण के प्रति अपनी भावना व्यक्त करें..."
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#CBD5E1] focus:outline-hidden focus:border-[#5B2A1B]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                  >
                    रद्द करें
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-bold rounded-md transition-colors shadow-xs inline-flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>अनुभव प्रकाशित करें</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
