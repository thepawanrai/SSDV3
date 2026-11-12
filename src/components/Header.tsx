import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteData';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenDonate?: (sevaId?: string, amount?: number) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDonate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Step-by-step requested menu format:
  // 1. Home
  // 2. Sewa
  // 3. Temple
  // 4. Gallery
  // 5. About
  // 6. Contact
  const navItems = [
    { path: '/', label: 'मुख्य पृष्ठ', english: 'Home' },
    { path: '/seva', label: 'सेवा सूची', english: 'Sewa' },
    { path: '/temple', label: 'मंदिर', english: 'Temple' },
    { path: '/gallery', label: 'दीर्घा', english: 'Gallery' },
    { path: '/about', label: 'परिचय', english: 'About' },
    { path: '/contact', label: 'संपर्क', english: 'Contact' },
  ];

  const constantMessage =
    'हरे कृष्ण महामंत्र : हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे। हरे राम हरे राम, राम राम हरे हरे॥   •   सत्य सनातन धाम के प्रमुख उद्देश्य भारतवर्ष में प्रत्येक राज्य में प्रत्येक जिले में एक भव्य मंदिर स्थापित करना है।   •   वसुधैव कुटुम्बकम् : सत्य सनातन धाम का मुख्य उद्देश्य है कि सत्य सनातनियों के सहयोग से पूरे विश्व पटल पर प्रत्येक राज्य के जिले-स्तर पर श्री श्री राधा कृष्ण बिहारी जी का भव्य मंदिर 7 से 10 एकड़ की स्थापना करना।';

  return (
    <>
      {/* Top Header Bar: Continuous constant scrolling announcement without any icons or CTA button */}
      <div className="bg-[#481E13] text-[#FAF7F2] text-xs font-sans border-b border-[#5B2A1B]/40 relative z-50 overflow-hidden py-2">
        <div className="w-full overflow-hidden whitespace-nowrap relative flex items-center">
          <div className="animate-marquee flex items-center space-x-16 text-[12px] sm:text-xs font-serif tracking-wider text-[#DFB25A]">
            <span>{constantMessage}</span>
            <span>{constantMessage}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs py-2.5 border-b border-slate-200'
            : 'bg-white py-3 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative min-h-[48px] sm:min-h-[52px]">
          {/* Logo & Brand Identity:
              - Showcases the official logo crest, temple/trust name ("सत्य सनातन धाम"), and tagline ("सेवा • संस्कार • सनातन")
              - Displayed prominently on mobile and desktop */}
          <Link
            to="/"
            className="flex items-center space-x-2.5 sm:space-x-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2A1B] flex-shrink-0"
            aria-label="सत्य सनातन धाम मुख्य पृष्ठ"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="/ssd-logo-new.png"
                alt="Satya Sanatan Dham Official Crest"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://plain-apac-prod-public.komododecks.com/202610/24/DcMNjyETiSwyzv6bkik0/image.png';
                }}
              />
            </div>
            {/* Name & Tagline: Visible across mobile and desktop */}
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-xl text-[#5B2A1B] leading-tight tracking-tight">
                {siteConfig.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans text-stone-600 tracking-wider font-semibold leading-tight">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                    isActive
                      ? 'text-[#5B2A1B] font-bold bg-slate-100'
                      : 'text-slate-700 hover:text-[#5B2A1B] hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Highlighted Mahabhiyan Menu Item */}
            <NavLink
              to="/mahabhiyan"
              className={({ isActive }) =>
                `px-3.5 py-1.5 text-sm font-bold transition-all cursor-pointer rounded-md border inline-flex items-center gap-1.5 shadow-xs ${
                  isActive
                    ? 'text-white bg-[#194023] border-[#194023] ring-1 ring-[#194023]'
                    : 'text-[#194023] bg-emerald-50 hover:bg-emerald-100 border-emerald-300 hover:border-emerald-400'
                }`
              }
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>महाअभियान</span>
            </NavLink>
          </nav>

          {/* Right Section: Desktop CTAs + Mobile/Tablet Navigation Toggle (Right-Aligned) */}
          <div className="flex items-center space-x-2.5">
            {/* Desktop Action Buttons (Membership & Donate CTAs) */}
            <div className="hidden md:flex items-center space-x-2.5">
              {/* Highlighted CTA: सदस्यता (Membership) */}
              <Link
                to="/membership"
                className="px-4 py-2 text-xs lg:text-sm font-bold text-[#3E1B10] bg-gradient-to-r from-[#DFB25A] to-[#E5C173] hover:from-[#E5C173] hover:to-[#EBD08B] border border-[#C49033] rounded-md transition-all cursor-pointer shadow-sm hover:shadow-md whitespace-nowrap transform hover:-translate-y-0.5"
              >
                सदस्यता
              </Link>

              {/* Standard CTA: सेवा करें */}
              <Link
                to="/donate"
                className="px-4 py-2 text-xs lg:text-sm font-bold text-white bg-[#5B2A1B] hover:bg-[#3E1B10] rounded-md transition-all cursor-pointer shadow-xs hover:shadow-md whitespace-nowrap"
              >
                सेवा करें
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button - Positioned cleanly on the RIGHT side */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 -mr-1 text-[#5B2A1B] hover:bg-slate-100 rounded-md focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-lg animate-in fade-in duration-150">
            <div className="px-4 pt-3 pb-5 space-y-1">
              <div className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-md mb-3 flex items-center justify-between">
                <span className="text-xs text-stone-600 font-semibold">{siteConfig.tagline}</span>
                <span className="text-xs text-[#5B2A1B] font-bold">ग्राम – पासुन, मौदहा</span>
              </div>

              {/* Step-by-Step Navigation Items */}
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-[#5B2A1B] text-white font-bold'
                          : 'text-slate-800 hover:bg-slate-100'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center space-x-3">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold ${
                              isActive
                                ? 'bg-[#DFB25A] text-[#3E1B10]'
                                : 'bg-[#E7D7C4] text-[#5B2A1B]'
                            }`}
                          >
                            {index + 1}
                          </span>
                          <span className="font-serif font-bold text-sm">{item.label}</span>
                        </div>
                        <span className={`text-[11px] ${isActive ? 'text-[#DFB25A]' : 'text-stone-400'}`}>
                          {item.english}
                        </span>
                      </>
                    )}
                  </NavLink>
                ))}

                {/* Mahabhiyan Hub Link */}
                <NavLink
                  to="/mahabhiyan"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-[#194023] text-[#FAF7F2] font-bold'
                        : 'text-[#194023] hover:bg-[#EAF5EC]'
                    }`
                  }
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 rounded-full bg-[#265B33] text-white flex items-center justify-center text-xs font-semibold">
                      ★
                    </span>
                    <span className="font-serif font-bold text-sm">महाअभियान</span>
                  </div>
                  <span className="text-xs text-[#265B33] font-semibold">६ महाप्रकल्प</span>
                </NavLink>
              </div>

              {/* Sub-menu of 6 Mahabhiyans in Drawer */}
              <div className="p-3 bg-white rounded-xl border border-[#E7D7C4] space-y-1.5 mt-2">
                <span className="text-[11px] font-bold text-[#793A27] uppercase tracking-wider block">
                  संस्था के ६ महाअभियान:
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  <Link
                    to="/tree-plantation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 hover:bg-[#FAF0E4] rounded text-[#194023] font-medium"
                  >
                    १. वृक्षारोपण
                  </Link>
                  <Link
                    to="/mahabhiyan/gau-seva"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 hover:bg-[#FAF0E4] rounded text-[#5B2A1B] font-medium"
                  >
                    २. गौ सेवा
                  </Link>
                  <Link
                    to="/mahabhiyan/mandir-nirman"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 hover:bg-[#FAF0E4] rounded text-[#5B2A1B] font-medium"
                  >
                    ३. मंदिर निर्माण
                  </Link>
                  <Link
                    to="/mahabhiyan/annadaan"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 hover:bg-[#FAF0E4] rounded text-[#5B2A1B] font-medium"
                  >
                    ४. अन्नदान
                  </Link>
                  <Link
                    to="/mahabhiyan/gurukul"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 hover:bg-[#FAF0E4] rounded text-[#5B2A1B] font-medium"
                  >
                    ५. गुरुकुल
                  </Link>
                  <Link
                    to="/mahabhiyan/nasha-mukti"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 hover:bg-[#FAF0E4] rounded text-[#5B2A1B] font-medium"
                  >
                    ६. नशा मुक्ति
                  </Link>
                </div>
              </div>

              {/* CTAs in drawer */}
              <div className="pt-3 border-t border-[#E7D7C4] space-y-2">
                <div className="grid grid-cols-3 gap-2">
                  <Link
                    to="/tree-plantation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-xs font-semibold text-center text-[#194023] bg-[#EAF5EC] border border-[#265B33]/40 rounded-md"
                  >
                    वृक्षारोपण
                  </Link>
                  <Link
                    to="/membership"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-xs font-semibold text-center text-[#5B2A1B] bg-[#F4EDE1] border border-[#DFB25A]/60 rounded-md"
                  >
                    सदस्यता
                  </Link>
                  <Link
                    to="/donate"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-xs font-bold text-center text-[#FAF7F2] bg-[#5B2A1B] hover:bg-[#3E1B10] rounded-md shadow-xs"
                  >
                    सेवा करें
                  </Link>
                </div>
              </div>

              <div className="mt-3 pt-2 text-center text-xs text-[#793A27]">
                हेल्पलाइन: {siteConfig.contact.primaryPhone}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
