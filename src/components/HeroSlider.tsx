import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface HeroSliderProps {
  onOpenDonate: (sevaId?: string, amount?: number) => void;
  onOpenLightbox: (src: string, alt: string, title?: string, desc?: string) => void;
}

interface SlideItem {
  id: string;
  tabLabel: string;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  fallbackImage: string;
  primaryCta: {
    label: string;
    to?: string;
    onClick?: () => void;
  };
  secondaryCta: {
    label: string;
    to: string;
  };
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenDonate, onOpenLightbox }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // 1 Temple main slide + 6 Mahabhiyan slides = 7 slides total
  const slides: SlideItem[] = [
    {
      id: 'temple',
      tabLabel: 'मुख्य मंदिर',
      tag: 'परम पावन अधिष्ठान',
      title: 'श्री श्री राधा कृष्ण बिहारी जी मंदिर',
      subtitle: '२५,००० वर्ग फीट का भव्य नागर शैली पाषाण संकुल',
      desc: 'राजस्थान के बंसी पहाड़पुर लाल बलुआ पत्थर, परंपरागत नागर शिखर, अष्टकोणीय नक्षत्र फव्वारा एवं १०८ नक्काशीदार स्तंभों से सुसज्जित दिव्य धाम।',
      image: '/1.png',
      fallbackImage: '/assets/temple-hero.jpg',
      primaryCta: {
        label: 'सेवा करें',
        to: '/donate'
      },
      secondaryCta: {
        label: 'मंदिर दर्शन व वास्तु',
        to: '/temple'
      }
    },
    {
      id: 'vriksharopan',
      tabLabel: '१. वृक्षारोपण',
      tag: 'महाअभियान १ • पर्यावरण एवं धरा संरक्षण',
      title: '१. वृक्षारोपण महाअभियान',
      subtitle: '११,००० वृक्षों का पावन संकल्प • प्रथम चरण: १,१०० वृक्ष (सक्रिय व प्रगतिशील)',
      desc: 'प्रकृति एवं भावी पीढ़ियों के कल्याण हेतु महाअभियान प्रारंभ। प्रथम चरण में ₹२.३६ लाख+ जनसहयोग प्राप्त। मात्र ₹1,001 में ५ वर्ष संरक्षण सहित वृक्ष समर्पित करें।',
      image: '/Satelight Image of Satya Sanatan Dham.png',
      fallbackImage: '/assets/satellite-site.jpg',
      primaryCta: {
        label: 'वृक्ष सेवा करें (₹१,००१)',
        onClick: () => onOpenDonate('vriksharopan-seva', 1001)
      },
      secondaryCta: {
        label: 'वृक्षारोपण अभियान विवरण',
        to: '/tree-plantation'
      }
    },
    {
      id: 'gau-seva',
      tabLabel: '२. गौ सेवा',
      tag: 'महाअभियान २ • गावो विश्वस्य मातरः',
      title: '२. गौ सेवा महाअभियान',
      subtitle: 'सुरभि गौशाला — निराश्रित एवं देशी गोवंश का आजीवन वात्सल्यपूर्ण संवर्धन',
      desc: 'गिर, साहीवाल जैसी पवित्र देशी नस्लों का पालन-पोषण। प्रतिदिन ताजा हरा चारा, दलिया, गुड़, खली तथा २४ घंटे पशु-चिकित्सा सेवा उपलब्ध है।',
      image: '/2.png',
      fallbackImage: '/assets/temple-hero.jpg',
      primaryCta: {
        label: 'गौ सेवा करें (₹२,१००)',
        onClick: () => onOpenDonate('gau-mata-seva', 2100)
      },
      secondaryCta: {
        label: 'गौ सेवा अभियान',
        to: '/mahabhiyan/gau-seva'
      }
    },
    {
      id: 'mandir-nirman',
      tabLabel: '३. मंदिर निर्माण',
      tag: 'महाअभियान ३ • दिव्य अधिष्ठान निर्माण',
      title: '३. मंदिर निर्माण अभियान',
      subtitle: 'प्रत्येक राज्य व प्रत्येक जिले में एक भव्य मंदिर स्थापना का संकल्प',
      desc: 'श्री श्री राधा कृष्ण बिहारी जी मंदिर के गर्भगृह, सभामंडप एवं पाषाण स्तंभों के निर्माण में पावन शिला समर्पित कर अमर पुण्य के सहभागी बनें।',
      image: '/3.png',
      fallbackImage: '/1.png',
      primaryCta: {
        label: 'पावन शिला सेवा (₹५,१००)',
        onClick: () => onOpenDonate('mandir-nirman-seva', 5100)
      },
      secondaryCta: {
        label: 'मंदिर निर्माण अभियान',
        to: '/mahabhiyan/mandir-nirman'
      }
    },
    {
      id: 'annadaan',
      tabLabel: '४. अन्नदान',
      tag: 'महाअभियान ४ • प्रसादम एवं अक्षय भंडारा',
      title: '४. अन्नदान महाअभियान',
      subtitle: '"अन्नं परब्रह्म" — सत्य सनातन धाम का नित्य अक्षय अन्नक्षेत्र',
      desc: 'तीर्थयात्रियों, साधु-संतों एवं असहायों को नित्य सम्मानपूर्वक शुद्ध सात्विक महाप्रसादम। कोई भी व्यक्ति धाम से भूखा न लौटे।',
      image: '/4.png',
      fallbackImage: '/1.png',
      primaryCta: {
        label: 'अन्नदान सेवा (₹२,५००)',
        onClick: () => onOpenDonate('anna-daan-seva', 2500)
      },
      secondaryCta: {
        label: 'अन्नदान अभियान',
        to: '/mahabhiyan/annadaan'
      }
    },
    {
      id: 'gurukul',
      tabLabel: '५. गुरुकुल',
      tag: 'महाअभियान ५ • वैदिक शिक्षा व संस्कार',
      title: '५. गुरुकुल अभियान',
      subtitle: '"सा विद्या या विमुक्तये" — वैदिक ऋचाओं एवं आधुनिक विज्ञान का संगम',
      desc: 'ग्रामीण व निर्धन विद्यार्थियों को निःशुल्क आवासीय शिक्षा, वेद, संस्कृत, नीतिशास्त्र एवं कंप्यूटर शिक्षा द्वारा चरित्र निर्माण एवं राष्ट्र सेवा का संकल्प।',
      image: '/5.png',
      fallbackImage: '/1.png',
      primaryCta: {
        label: 'विद्यादान सेवा (₹२,५००)',
        onClick: () => onOpenDonate('gurukul-expansion-seva', 2500)
      },
      secondaryCta: {
        label: 'गुरुकुल अभियान',
        to: '/mahabhiyan/gurukul'
      }
    },
    {
      id: 'nasha-mukti',
      tabLabel: '६. नशा मुक्ति',
      tag: 'महाअभियान ६ • समाज जागरण व युवा शक्ति',
      title: '६. नशा मुक्ति अभियान',
      subtitle: '"नशा मुक्त समाज, सशक्त युवा" — व्यसन के अंधकार से मुक्ति',
      desc: 'गाँव-गाँव में चौपाल, नशा मुक्ति गोष्ठी, आयुर्वेदिक उपचार एवं मनोवैज्ञानिक संबल द्वारा युवाओं को व्यसनमुक्त कर राष्ट्र व धर्म निर्माण से जोड़ना।',
      image: '/Temple Masterplan.png',
      fallbackImage: '/1.png',
      primaryCta: {
        label: 'निःशुल्क सेवादार बनें',
        to: '/membership'
      },
      secondaryCta: {
        label: 'नशा मुक्ति अभियान',
        to: '/mahabhiyan/nasha-mukti'
      }
    }
  ];

  const totalSlides = slides.length;

  // Autoplay timer (6.5 seconds per slide)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch Swipe Handlers for mobile users
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  const current = slides[currentSlide];

  return (
    <section
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-end overflow-hidden border-b border-slate-200 select-none bg-stone-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="सत्य सनातन धाम मुख्य एवं महाअभियान स्लाइडर"
    >
      {/* Background Images with smooth Crossfade */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center cursor-pointer transform scale-100 hover:scale-[1.01] transition-transform duration-700"
              onClick={() => onOpenLightbox(slide.image, slide.title, slide.subtitle, slide.desc)}
              onError={(e) => {
                (e.target as HTMLImageElement).src = slide.fallbackImage;
              }}
            />
          </div>
        );
      })}

      {/* Clean Vignette & Readability Gradient Overlay: subtle gradient on temple slide to showcase image clearly, readable gradient on info slides */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none transition-all duration-700 ${
          current.id === 'temple'
            ? 'bg-gradient-to-t from-black/70 via-black/10 to-transparent'
            : 'bg-gradient-to-t from-black/90 via-black/45 to-black/20'
        }`}
      ></div>


      {/* Previous & Next Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white/80 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DFB25A] shadow-lg"
        aria-label="पिछली स्लाइड"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white/80 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DFB25A] shadow-lg"
        aria-label="अगली स्लाइड"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Content Box: 
          On the temple slide: Text is removed so the magnificent temple architecture is showcased clearly without obstruction.
          On the 6 Mahabhiyan slides: Crisp, non-messy informative details are displayed cleanly. */}
      <div className="relative z-20 w-full pb-6 sm:pb-8 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3 sm:space-y-4">
          {current.id === 'temple' ? (
            /* Temple Main Slide: Unobstructed view of temple image, with clean compact badge & CTAs */
            <div className="space-y-3 pt-8 sm:pt-14">
              {/* Action Buttons: Clean 'सेवा करें' (no emoji) & 'मंदिर दर्शन' */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to={current.primaryCta.to || '/donate'}
                  className="px-7 py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-sm sm:text-base rounded-md transition-all shadow-xl hover:shadow-2xl cursor-pointer border border-[#DFB25A]/60 transform hover:-translate-y-0.5 inline-flex items-center justify-center"
                >
                  <span>{current.primaryCta.label}</span>
                </Link>

                <Link
                  to={current.secondaryCta.to}
                  className="px-6 py-3 bg-white/95 hover:bg-white text-[#3E1B10] font-semibold text-sm sm:text-base rounded-md transition-all border border-white/40 backdrop-blur-md cursor-pointer inline-flex items-center justify-center shadow-lg"
                >
                  <span>{current.secondaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-[#5B2A1B]" />
                </Link>
              </div>
            </div>
          ) : (
            /* Mahabhiyan 6 Slides: Clean, readable informative content */
            <>
              {/* Subtle Tagline */}
              <div className="inline-block text-xs sm:text-sm font-semibold tracking-wider text-[#DFB25A] uppercase drop-shadow-sm">
                {current.tag}
              </div>

              {/* Main Slide Title */}
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
                {current.title}
              </h1>

              {/* Slide Subtitle */}
              <p className="font-serif text-sm sm:text-lg text-[#FEF08A] font-medium max-w-2xl mx-auto drop-shadow-sm">
                {current.subtitle}
              </p>

              {/* Clean Description */}
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans max-w-2xl mx-auto line-clamp-2 sm:line-clamp-3">
                {current.desc}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                {current.primaryCta.to ? (
                  <Link
                    to={current.primaryCta.to}
                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-md transition-all shadow-xl hover:shadow-2xl cursor-pointer border border-[#DFB25A]/50 transform hover:-translate-y-0.5 inline-flex items-center justify-center"
                  >
                    <span>{current.primaryCta.label}</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={current.primaryCta.onClick}
                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-md transition-all shadow-xl hover:shadow-2xl cursor-pointer border border-[#DFB25A]/50 transform hover:-translate-y-0.5 inline-flex items-center justify-center"
                  >
                    <span>{current.primaryCta.label}</span>
                  </button>
                )}

                <Link
                  to={current.secondaryCta.to}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-[#3E1B10] font-semibold text-xs sm:text-sm rounded-md transition-all border border-white/30 backdrop-blur-md cursor-pointer inline-flex items-center justify-center shadow-lg"
                >
                  <span>{current.secondaryCta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#5B2A1B]" />
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Slide Indicator Bar / Navigation Tabs */}
        <div className="mt-6 max-w-4xl mx-auto px-4">
          {/* Desktop/Tablet Horizontal Tabs with Animated Active Indicator */}
          <div className="hidden sm:grid grid-cols-7 gap-1.5 p-1 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
            {slides.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`py-1.5 px-2 rounded text-[11px] font-medium transition-all cursor-pointer text-center relative overflow-hidden truncate ${
                    isActive
                      ? 'text-[#3E1B10] font-bold bg-[#DFB25A] shadow-xs'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  title={s.title}
                >
                  <span className="block truncate">{s.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Dot Navigation */}
          <div className="flex sm:hidden items-center justify-center space-x-2 pt-2">
            {slides.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    isActive ? 'w-6 bg-[#DFB25A]' : 'w-2 bg-white/40'
                  }`}
                  aria-label={`स्लाइड ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
