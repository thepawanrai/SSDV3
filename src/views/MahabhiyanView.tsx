import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteData';
import {
  TreeDeciduous,
  Heart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  MapPin,
  Calendar,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface MahabhiyanViewProps {
  onNavigate?: (tab: string) => void;
  onOpenDonate: (sevaId?: string, amount?: number) => void;
  onOpenLightbox?: (src: string, alt: string, title?: string, desc?: string) => void;
}

export const MahabhiyanView: React.FC<MahabhiyanViewProps> = ({
  onNavigate,
  onOpenDonate,
  onOpenLightbox,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans">
      {/* 1. MASTER HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1C0B06] via-[#2D1209] to-[#1C0B06] text-[#FAF7F2] py-16 sm:py-24 border-b border-[#DFB25A]/30 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
          <img
            src="/1.png"
            alt="सत्य सनातन धाम महाअभियान"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#DFB25A]/20 border border-[#DFB25A]/40 text-xs font-bold text-[#FEF08A] tracking-wider uppercase mb-3">
            <span>🚩 सत्य सनातन धाम के ६ पावन महाप्रकल्प</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md leading-normal pt-1">
            सत्य सनातन धाम महाअभियान
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-[#DFB25A] font-semibold max-w-3xl mx-auto">
            "सेवा • संस्कार • सनातन" — प्रकृति, गौवंश, धर्म, शिक्षा और समाज सुधार का युगांतकारी संकल्प
          </p>

          <p className="max-w-3xl mx-auto text-xs sm:text-sm lg:text-base text-stone-300 leading-relaxed font-sans">
            सत्य सनातन धाम के प्रमुख उद्देश्य भारतवर्ष में प्रत्येक राज्य में प्रत्येक जिले में एक भव्य मंदिर
            स्थापित करना तथा समाज के अंतिम व्यक्ति तक सनातन संस्कृति के सेवा मूल्यों का विस्तार करना है।
            नीचे संस्था के सभी ६ सक्रिय अभियानों का विस्तृत विवरण प्रस्तुत है।
          </p>

          {/* Quick jump anchor strip */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto text-xs">
            <a
              href="#vriksharopan"
              className="px-3 py-1.5 bg-white/10 hover:bg-[#DFB25A] hover:text-[#3E1B10] rounded-md transition-colors border border-white/20"
            >
              १. वृक्षारोपण
            </a>
            <a
              href="#gau-seva"
              className="px-3 py-1.5 bg-white/10 hover:bg-[#DFB25A] hover:text-[#3E1B10] rounded-md transition-colors border border-white/20"
            >
              २. गौ सेवा
            </a>
            <a
              href="#mandir-nirman"
              className="px-3 py-1.5 bg-white/10 hover:bg-[#DFB25A] hover:text-[#3E1B10] rounded-md transition-colors border border-white/20"
            >
              ३. मंदिर निर्माण
            </a>
            <a
              href="#annadaan"
              className="px-3 py-1.5 bg-white/10 hover:bg-[#DFB25A] hover:text-[#3E1B10] rounded-md transition-colors border border-white/20"
            >
              ४. अन्नदान
            </a>
            <a
              href="#gurukul"
              className="px-3 py-1.5 bg-white/10 hover:bg-[#DFB25A] hover:text-[#3E1B10] rounded-md transition-colors border border-white/20"
            >
              ५. गुरुकुल
            </a>
            <a
              href="#nasha-mukti"
              className="px-3 py-1.5 bg-white/10 hover:bg-[#DFB25A] hover:text-[#3E1B10] rounded-md transition-colors border border-white/20"
            >
              ६. नशा मुक्ति
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: वृक्षारोपण महाअभियान
         ========================================================================= */}
      <section id="vriksharopan" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#194023] text-white rounded-3xl overflow-hidden shadow-xl border border-[#265B33] grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#265B33] text-[#A3E635] text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                <TreeDeciduous className="w-4 h-4 mr-1" />
                <span>महाअभियान १ • पर्यावरण एवं धरा संरक्षण</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-normal pt-1">
                १. वृक्षारोपण महाअभियान
              </h2>

              <p className="font-serif text-lg sm:text-xl text-[#A3E635]">
                ११,००० वृक्षों का संकल्प • प्रथम चरण: १,१०० वृक्ष (११ अक्टूबर २०२६, शारदीय नवरात्रि)
              </p>

              <div className="p-4 bg-[#112F19] rounded-xl border border-[#265B33] text-xs sm:text-sm text-[#E2EEDF] space-y-1.5">
                <p><strong>लागत विभाजन:</strong> ₹५०१ प्रति पौधा + ₹५०० ५ वर्षों का पूर्ण संरक्षण, ट्री-गार्ड एवं जल प्रबंधन = <strong>₹१,००१ प्रति वृक्ष</strong></p>
                <p><strong>स्थान:</strong> सत्य सनातन धाम, ग्राम – पासुन, मौदहा, हमीरपुर (उ.प्र.)</p>
                <p><strong>प्रजाति:</strong> नीम, पीपल, बरगद, आम, जामुन, बेलपत्र, आंवला एवं औषधीय पादप</p>
              </div>

              <p className="text-xs sm:text-sm text-[#E2EEDF]/90 leading-relaxed font-sans">
                आने वाली पीढ़ियों के लिए शुद्ध प्राणवायु, भूजल संवर्धन एवं हरित धरा का निर्माण करने हेतु
                यह महाअभियान समर्पित है। आप अपने परिजनों के जन्मदिवस, विवाह वर्षगांठ अथवा स्मृति में
                वृक्ष समर्पित कर सकते हैं।
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/tree-plantation"
                className="px-6 py-3 bg-[#A3E635] hover:bg-[#84CC16] text-[#194023] font-bold text-xs sm:text-sm rounded-md transition-colors shadow-sm inline-flex items-center space-x-1.5"
              >
                <span>वृक्षारोपण अभियान का विस्तृत पृष्ठ देखें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => onOpenDonate('vriksharopan-seva', 1001)}
                className="px-6 py-3 bg-white text-[#194023] hover:bg-stone-100 font-bold text-xs sm:text-sm rounded-md transition-colors cursor-pointer"
              >
                १ वृक्ष समर्पित करें (₹१,००१)
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#112F19] p-6 flex flex-col justify-center items-center">
            <img
              src="/Satelight Image of Satya Sanatan Dham.png"
              alt="वृक्षारोपण स्थल सेटेलाइट दृश्य"
              className="w-full h-80 object-cover rounded-2xl border border-[#265B33] shadow-md"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/satellite-site.jpg';
              }}
            />
            <span className="text-[11px] text-[#A3E635] text-center mt-2 font-mono">
              धाम का वास्तविक सेटेलाइट दृश्य — हरित संकुल विकास क्षेत्र
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: गौ सेवा महाअभियान
         ========================================================================= */}
      <section id="gau-seva" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-[#E7D7C4] grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-[#FAF7F2] p-6 flex flex-col justify-center">
            <div className="rounded-2xl overflow-hidden border border-[#E7D7C4] shadow-xs group">
              <img
                src="/2.png"
                alt="गौ सेवा महाअभियान"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => onOpenLightbox && onOpenLightbox('/2.png', 'गौ सेवा महाअभियान', 'सत्य सनातन धाम')}
              />
            </div>
            <div className="mt-3 p-3 bg-[#FAF0E4] rounded-lg border border-[#DFB25A]/40 text-center">
              <span className="font-serif font-bold text-xs text-[#5B2A1B]">
                "गावो विश्वस्य मातरः" — सुरभि गौशाला प्रकल्प
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#FAF0E4] text-[#793A27] text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                <span>महाअभियान २ • गोवंश संरक्षण व संवर्धन</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B2A1B] leading-normal pt-1">
                २. गौ सेवा महाअभियान
              </h2>

              <p className="font-serif text-base sm:text-lg text-[#793A27]">
                निराश्रित, वृद्ध एवं देशी गोवंश का सम्मानपूर्वक आजीवन पोषण एवं उपचार
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                सत्य सनातन धाम की सुरभि गौशाला में गिर, साहीवाल और थारपारकर जैसी पवित्र देशी नस्लों
                का पालन-पोषण किया जा रहा है। प्रतिदिन ताजा हरा चारा, दलिया, गुड़, खली तथा २४ घंटे
                पशु-चिकित्सक की सुविधा उपलब्ध है। वृद्ध एवं असहाय गायों के लिए सुरक्षित शेड का निर्माण
                किया जा रहा है।
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#FCFAF6] rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹१००</span>
                  <span className="text-[10px] text-stone-500">१ दिन का चारा</span>
                </div>
                <div className="p-3 bg-[#FCFAF6] rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹२,१००</span>
                  <span className="text-[10px] text-stone-500">मासिक पोषण</span>
                </div>
                <div className="p-3 bg-[#FCFAF6] rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹११,०००</span>
                  <span className="text-[10px] text-stone-500">शेड निर्माण</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/mahabhiyan/gau-seva"
                className="px-6 py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-md transition-colors shadow-xs inline-flex items-center space-x-1.5"
              >
                <span>गौ सेवा अभियान का विस्तृत पृष्ठ देखें</span>
                <ArrowRight className="w-4 h-4 text-[#DFB25A]" />
              </Link>
              <button
                onClick={() => onOpenDonate('gau-mata-seva', 2100)}
                className="px-5 py-3 bg-[#F4EDE1] hover:bg-[#EADDC9] text-[#5B2A1B] font-bold text-xs sm:text-sm rounded-md transition-colors border border-[#DFB25A]/60 cursor-pointer"
              >
                गौ सेवा समर्पित करें (₹२,१००)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: मंदिर निर्माण अभियान
         ========================================================================= */}
      <section id="mandir-nirman" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-md border-2 border-[#DFB25A]/40 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#FEF3C7] text-[#92400E] text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                <span>महाअभियान ३ • दिव्य अधिष्ठान निर्माण</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B2A1B] leading-normal pt-1">
                ३. मंदिर निर्माण अभियान
              </h2>

              <p className="font-serif text-base sm:text-lg text-[#793A27]">
                श्री श्री राधा कृष्ण बिहारी जी मंदिर — २५,००० वर्ग फीट नागर शैली पाषाण संकुल
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                राजस्थान के बंसी पहाड़पुर लाल बलुआ पत्थर (सैंडस्टोन) से निर्मित हो रहा यह भव्य मंदिर
                सैकड़ों वर्षों तक सनातन धर्म की आध्यात्मिक आभा का केंद्र बनेगा। मंदिर में परंपरागत
                नागर शिखर, नक्काशीदार १०८ स्तंभ, सभामंडप तथा अष्टकोणीय नक्षत्र फव्वारा स्थापित किया जा रहा है।
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹२,१००</span>
                  <span className="text-[10px] text-stone-500">१ पावन शिला</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹५,१००</span>
                  <span className="text-[10px] text-stone-500">१ वर्ग फीट निर्माण</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹५१,०००</span>
                  <span className="text-[10px] text-stone-500">नक्काशीदार स्तंभ</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/mahabhiyan/mandir-nirman"
                className="px-6 py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-md transition-colors shadow-xs inline-flex items-center space-x-1.5"
              >
                <span>मंदिर निर्माण अभियान का विस्तृत पृष्ठ देखें</span>
                <ArrowRight className="w-4 h-4 text-[#DFB25A]" />
              </Link>
              <button
                onClick={() => onOpenDonate('mandir-nirman-seva', 5100)}
                className="px-5 py-3 bg-[#DFB25A] hover:bg-[#C49033] text-[#3E1B10] font-bold text-xs sm:text-sm rounded-md transition-colors cursor-pointer shadow-xs"
              >
                शिला सेवा समर्पित करें (₹५,१००)
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 flex flex-col justify-center">
            <div className="rounded-2xl overflow-hidden border border-[#E7D7C4] shadow-xs group">
              <img
                src="/1.png"
                alt="श्री श्री राधा कृष्ण बिहारी जी मंदिर"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => onOpenLightbox && onOpenLightbox('/1.png', 'श्री श्री राधा कृष्ण बिहारी जी मंदिर', '२५,००० वर्ग फीट संकुल')}
              />
            </div>
            <div className="mt-3 p-3 bg-[#FAF7F2] rounded-lg border border-[#E7D7C4] text-center">
              <span className="font-serif font-bold text-xs text-[#5B2A1B]">
                २५,००० वर्ग फीट का विस्तीर्ण संकुल • १००' x २५०' भूखंड
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: अन्नदान महाअभियान
         ========================================================================= */}
      <section id="annadaan" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-[#E7D7C4] grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-[#FAF7F2] p-6 flex flex-col justify-center">
            <div className="p-8 bg-gradient-to-br from-[#FAF0E4] to-[#F4EDE1] rounded-2xl border border-[#DFB25A]/40 text-center space-y-4">
              <span className="font-serif text-3xl sm:text-4xl text-[#5B2A1B] block">
                "अन्नं परब्रह्म"
              </span>
              <p className="font-serif text-sm text-[#793A27] italic">
                सत्य सनातन धाम का नित्य अक्षय अन्नक्षेत्र
              </p>
              <div className="p-4 bg-white rounded-xl border border-[#E7D7C4] text-xs text-stone-700 leading-relaxed text-left space-y-1">
                <p>✓ तीर्थयात्रियों व साधु-संतों को नित्य प्रसादम</p>
                <p>✓ शुद्ध देसी घी एवं पोषक सात्विक सामग्री</p>
                <p>✓ निर्धन व असहाय ग्रामीणों को भोजन संबल</p>
                <p>✓ पर्वों पर विशाल भंडारे का आयोजन</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#FAF0E4] text-[#793A27] text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                <span>महाअभियान ४ • प्रसादम एवं अक्षय भंडारा</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B2A1B] leading-normal pt-1">
                ४. अन्नदान महाअभियान
              </h2>

              <p className="font-serif text-base sm:text-lg text-[#793A27]">
                भूखे को अन्न और प्यासे को जल — सनातन धर्म का सर्वोपरि धर्म संकल्प
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                सत्य सनातन धाम में स्थापित अन्नक्षेत्र में कोई भी आगंतुक या साधु भूखा नहीं लौटता।
                दाल, चावल, शुद्ध रोटियाँ, मौसमी सब्जियाँ और खीर का भोग ठाकुर जी को अर्पित कर महाप्रसादम
                के रूप में सभी को ससम्मान परोसा जाता है।
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#FCFAF6] rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹५०१</span>
                  <span className="text-[10px] text-stone-500">११ भक्त प्रसादम</span>
                </div>
                <div className="p-3 bg-[#FCFAF6] rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹२,५००</span>
                  <span className="text-[10px] text-stone-500">५१ भक्त प्रसादम</span>
                </div>
                <div className="p-3 bg-[#FCFAF6] rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹११,०००</span>
                  <span className="text-[10px] text-stone-500">पूर्ण दिवस भंडारा</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/mahabhiyan/annadaan"
                className="px-6 py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-md transition-colors shadow-xs inline-flex items-center space-x-1.5"
              >
                <span>अन्नदान अभियान का विस्तृत पृष्ठ देखें</span>
                <ArrowRight className="w-4 h-4 text-[#DFB25A]" />
              </Link>
              <button
                onClick={() => onOpenDonate('anna-daan-seva', 2500)}
                className="px-5 py-3 bg-[#F4EDE1] hover:bg-[#EADDC9] text-[#5B2A1B] font-bold text-xs sm:text-sm rounded-md transition-colors border border-[#DFB25A]/60 cursor-pointer"
              >
                अन्नदान समर्पित करें (₹२,५००)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: गुरुकुल अभियान
         ========================================================================= */}
      <section id="gurukul" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-md border border-[#E7D7C4] grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#E2EEDF] text-[#194023] text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                <BookOpen className="w-3.5 h-3.5 mr-1" />
                <span>महाअभियान ५ • वैदिक शिक्षा व संस्कार</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B2A1B] leading-normal pt-1">
                ५. गुरुकुल अभियान
              </h2>

              <p className="font-serif text-base sm:text-lg text-[#793A27]">
                वेद, उपनिषद, संस्कृत के साथ-साथ गणित, विज्ञान व आधुनिक कंप्यूटर शिक्षा
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                सत्य सनातन धाम गुरुकुल में ग्रामीण व निर्धन विद्यार्थियों को निःशुल्क आवासीय शिक्षा,
                सात्विक भोजन, योग-प्राणायाम, नीतिशास्त्र एवं चरित्र निर्माण की शिक्षा प्रदान की जा रही है।
                हमारा लक्ष्य ऐसे युवाओं का निर्माण करना है जो सनातन संस्कृति के संवाहक बनें और आधुनिक
                युग में राष्ट्र को नेतृत्व प्रदान करें।
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹१,१००</span>
                  <span className="text-[10px] text-stone-500">पुस्तकें व वस्त्र</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹२,५००</span>
                  <span className="text-[10px] text-stone-500">१ माह का शिक्षण</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹३१,०००</span>
                  <span className="text-[10px] text-stone-500">वार्षिक विद्यादान</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/mahabhiyan/gurukul"
                className="px-6 py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-md transition-colors shadow-xs inline-flex items-center space-x-1.5"
              >
                <span>गुरुकुल अभियान का विस्तृत पृष्ठ देखें</span>
                <ArrowRight className="w-4 h-4 text-[#DFB25A]" />
              </Link>
              <button
                onClick={() => onOpenDonate('gurukul-expansion-seva', 2500)}
                className="px-5 py-3 bg-[#F4EDE1] hover:bg-[#EADDC9] text-[#5B2A1B] font-bold text-xs sm:text-sm rounded-md transition-colors border border-[#DFB25A]/60 cursor-pointer"
              >
                विद्यादान सेवा समर्पित करें (₹२,५००)
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 flex flex-col justify-center">
            <div className="p-8 bg-gradient-to-br from-[#FEF3C7] to-[#FAF0E4] rounded-2xl border border-[#DFB25A]/40 text-center space-y-4">
              <span className="font-serif text-3xl sm:text-4xl text-[#5B2A1B] block">
                "सा विद्या या विमुक्तये"
              </span>
              <p className="font-serif text-sm text-[#793A27] italic">
                शिक्षा जो जीवन को बंधनों से मुक्त कर चरित्र का निर्माण करे
              </p>
              <div className="p-4 bg-white rounded-xl border border-[#E7D7C4] text-xs text-stone-700 leading-relaxed text-left space-y-1">
                <p>✓ वैदिक ऋचाओं का शुद्ध उच्चारण एवं अर्थ ज्ञान</p>
                <p>✓ आधुनिक सीबीएसई अनुरूप गणित एवं विज्ञान</p>
                <p>✓ कंप्यूटर साक्षरता एवं डिजिटल कौशल</p>
                <p>✓ निःशुल्क छात्रावास, परिधान एवं पौष्टिक आहार</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: नशा मुक्ति अभियान
         ========================================================================= */}
      <section id="nasha-mukti" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-[#E7D7C4] grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-[#FAF7F2] p-6 flex flex-col justify-center">
            <div className="p-8 bg-gradient-to-br from-[#FCE7F3]/40 to-[#FAF0E4] rounded-2xl border border-[#E7D7C4] text-center space-y-4">
              <span className="font-serif text-3xl sm:text-4xl text-[#5B2A1B] block">
                "नशा मुक्त समाज"
              </span>
              <p className="font-serif text-sm text-[#793A27] italic">
                युवाओं की शक्ति का राष्ट्र व धर्म निर्माण में उपयोग
              </p>
              <div className="p-4 bg-white rounded-xl border border-[#E7D7C4] text-xs text-stone-700 leading-relaxed text-left space-y-1">
                <p>✓ गाँव-गाँव में चौपाल एवं नशा मुक्ति गोष्ठी</p>
                <p>✓ आयुर्वेदिक उपचार एवं प्राणायाम से तलब नियंत्रण</p>
                <p>✓ युवाओं को खेलकूद एवं व्यायाम से जोड़ना</p>
                <p>✓ पीड़ित परिवारों को गोपनीय मनोवैज्ञानिक संबल</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#FAF0E4] text-[#793A27] text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                <span>महाअभियान ६ • समाज जागरण एवं नशा मुक्ति</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B2A1B] leading-normal pt-1">
                ६. नशा मुक्ति अभियान
              </h2>

              <p className="font-serif text-base sm:text-lg text-[#793A27]">
                व्यसन के अंधकार से मुक्त कर युवाओं को स्वस्थ, कर्मठ एवं संस्कारित बनाना
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                हमीरपुर जनपद तथा ग्रामीण अंचल में बीड़ी, गुटखा, शराब एवं नशीले पदार्थों के कारण नष्ट हो
                रहे परिवारों को बचाने के लिए सत्य सनातन धाम ने यह व्यापक महाअभियान चलाया है। धाम की
                टीम गाँव-गाँव जाकर शिविर लगाती है, संकल्प पत्र भरवाती है और आयुर्वेदिक उपचार उपलब्ध कराती है।
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#FCFAF6] rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹५०१</span>
                  <span className="text-[10px] text-stone-500">जागरूकता पत्रक</span>
                </div>
                <div className="p-3 bg-[#FCFAF6] rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹२,१००</span>
                  <span className="text-[10px] text-stone-500">१ गाँव शिविर</span>
                </div>
                <div className="p-3 bg-[#FCFAF6] rounded-lg border border-[#E7D7C4] text-center">
                  <span className="block font-serif font-bold text-sm text-[#5B2A1B]">₹११,०००</span>
                  <span className="text-[10px] text-stone-500">परिवार पुनर्वास</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/mahabhiyan/nasha-mukti"
                className="px-6 py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-md transition-colors shadow-xs inline-flex items-center space-x-1.5"
              >
                <span>नशा मुक्ति अभियान का विस्तृत पृष्ठ देखें</span>
                <ArrowRight className="w-4 h-4 text-[#DFB25A]" />
              </Link>
              <button
                onClick={() => onOpenDonate('nasha-mukti-counseling-camp', 2100)}
                className="px-5 py-3 bg-[#F4EDE1] hover:bg-[#EADDC9] text-[#5B2A1B] font-bold text-xs sm:text-sm rounded-md transition-colors border border-[#DFB25A]/60 cursor-pointer"
              >
                शिविर सहयोग समर्पित करें (₹२,१००)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ALL-CAMPAIGN BANK TRANSFER & ENROLLMENT BANNER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF0E4] rounded-3xl p-6 sm:p-10 border border-[#DFB25A]/60 text-center space-y-4">
          <span className="inline-block px-3 py-1 bg-[#5B2A1B] text-[#FAF7F2] text-xs font-bold uppercase rounded">
            पारदर्शी सेवा संकल्प
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B]">
            आप किसी भी महाअभियान में स्वैच्छिक योगदान दे सकते हैं
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            प्रत्येक दानदाता का योगदान सीधे भारतीय स्टेट बैंक में संचालित 'सत्य सनातन धाम' के अधिकृत
            खाते में सुरक्षित रहता है तथा रसीद व प्रमाण पत्र प्रेषित किया जाता है।
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/donate"
              className="px-8 py-3.5 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-sm rounded-md shadow-md transition-all"
            >
              ऑनलाइन सेवा समर्पण पृष्ठ
            </Link>
            <Link
              to="/membership"
              className="px-7 py-3.5 bg-white text-[#5B2A1B] hover:bg-stone-50 font-bold text-sm rounded-md border border-[#DFB25A]/60 shadow-xs transition-all"
            >
              आजीवन सदस्यता ग्रहण करें
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
