import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, sevasData, galleryItems, faqList } from '../config/siteData';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import {
  Heart,
  ArrowRight,
  MapPin,
  Calendar,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  TreeDeciduous,
  BookOpen,
  Eye,
  Info
} from 'lucide-react';

import { HeroSlider } from '../components/HeroSlider';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onOpenDonate: (sevaId?: string, amount?: number) => void;
  onOpenLightbox: (src: string, alt: string, title?: string, desc?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenDonate,
  onOpenLightbox,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const featuredSevas = sevasData.filter((s) => s.featured);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SLIDER (MAIN TEMPLE IMAGE + 6 MAHABHIYAN SLIDES WITH AUTOPLAY) */}
      <HeroSlider onOpenDonate={onOpenDonate} onOpenLightbox={onOpenLightbox} />

      {/* 2. TRUST & IDENTITY STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
        <div className="bg-white rounded-xl shadow-md border border-[#E7D7C4] p-5 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E7D7C4]">
          <div className="p-2 sm:p-3 text-center sm:text-left">
            <div className="text-xs uppercase text-[#793A27] font-semibold tracking-wider">
              पावन धाम
            </div>
            <div className="font-serif font-bold text-base sm:text-lg text-[#5B2A1B] mt-0.5">
              सत्य सनातन धाम
            </div>
            <div className="text-[11px] text-stone-500 font-sans mt-0.5">
              पासुन, मौदहा (हमीरपुर)
            </div>
          </div>

          <div className="p-2 sm:p-3 text-center sm:text-left pt-3 sm:pt-0">
            <div className="text-xs uppercase text-[#793A27] font-semibold tracking-wider">
              मुख्य मंदिर
            </div>
            <div className="font-serif font-bold text-base sm:text-lg text-[#5B2A1B] mt-0.5">
              श्री श्री राधा कृष्ण बिहारी जी मंदिर
            </div>
            <div className="text-[11px] text-stone-500 font-sans mt-0.5">
              २५,००० वर्ग फीट परिसर
            </div>
          </div>

          <div className="p-2 sm:p-3 text-center sm:text-left pt-3 sm:pt-0">
            <div className="text-xs uppercase text-[#793A27] font-semibold tracking-wider">
              महाअभियान
            </div>
            <div className="font-serif font-bold text-base sm:text-lg text-[#265B33] mt-0.5">
              ११,००० वृक्षों का संकल्प
            </div>
            <div className="text-[11px] text-stone-500 font-sans mt-0.5">
              प्रथम चरण: १,१०० वृक्ष (११ अक्टू.)
            </div>
          </div>

          <div className="p-2 sm:p-3 text-center sm:text-left pt-3 sm:pt-0">
            <div className="text-xs uppercase text-[#793A27] font-semibold tracking-wider">
              सेवा संकल्प
            </div>
            <div className="font-serif font-bold text-base sm:text-lg text-[#5B2A1B] mt-0.5">
              गौ • गुरुकुल • अन्न दान
            </div>
            <div className="text-[11px] text-stone-500 font-sans mt-0.5">
              पारदर्शी एवं समर्पित प्रयास
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SATYA SANATAN DHAM (INSTITUTIONAL OVERVIEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#793A27] mb-2">
              <span>संस्था परिचय</span>
              <span>•</span>
              <span className="text-[#C49033]">सत्य सनातन धाम</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#5B2A1B] leading-normal pt-1">
              सत्य सनातन धाम के बारे में
            </h2>

            <p className="text-sm sm:text-base text-[#3E2B23] leading-relaxed font-sans">
              सत्य सनातन धाम, उत्तर प्रदेश के हमीरपुर जनपद अंतर्गत मौदहा तहसील के ग्राम पासुन में स्थित एक पावन आध्यात्मिक, सांस्कृतिक एवं सेवा-आधारित संस्थान है। संस्था का मुख्य ध्येय सनातन मूल्यों के संरक्षण, गौवंश के संवर्धन, व्यापक वृक्षारोपण द्वारा पर्यावरण संतुलन, गुरुकुल शिक्षा के विस्तार और समाज के निर्बल वर्गों की सेवा करना है।
            </p>

            <p className="text-sm sm:text-base text-[#3E2B23] leading-relaxed font-sans">
              यहाँ सेवा को मात्र औपचारिकता न मानकर जीवन का सर्वोच्च संस्कार माना जाता है। परिसर में भव्य श्री श्री राधा कृष्ण बिहारी जी मंदिर के साथ-साथ गौशाला, गुरुकुल और अन्न क्षेत्र की अविरल सेवाएँ संचालित की जा रही हैं।
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="px-5 py-2.5 bg-[#5B2A1B] text-[#FAF7F2] hover:bg-[#3E1B10] text-sm font-bold rounded-md transition-colors cursor-pointer inline-flex items-center space-x-2 shadow-xs"
              >
                <span>विस्तृत परिचय पढ़ें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/temple"
                className="px-5 py-2.5 bg-white text-[#5B2A1B] border border-[#CBD5E1] hover:bg-[#FAF7F2] text-sm font-semibold rounded-md transition-colors cursor-pointer"
              >
                मंदिर निर्माण व दर्शन
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-[#5B2A1B]/5">
              <img
                src="/2.png"
                alt="मंदिर संकुल मास्टर दृश्य"
                className="w-full h-80 sm:h-96 object-cover object-center cursor-pointer hover:scale-102 transition-transform duration-300"
                onClick={() =>
                  onOpenLightbox(
                    '/2.png',
                    'मंदिर संकुल मास्टर दृश्य',
                    'श्री श्री राधा कृष्ण बिहारी जी मंदिर परिसर',
                    '25,000 वर्ग फीट का संपूर्ण आध्यात्मिक एवं सेवा परिसर — पासुन, मौदहा'
                  )
                }
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/temple-aerial.jpg';
                }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <p className="font-serif font-bold text-sm">२५,००० वर्ग फीट का पावन परिसर</p>
                <p className="text-xs text-[#DFB25A]">क्लिक करके बड़ा चित्र देखें (Lightbox)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR THREE PILLARS (सेवा • संस्कार • सनातन) */}
      <section className="bg-[#FAF0E4]/60 border-y border-[#E7D7C4] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block text-xs uppercase tracking-widest text-[#793A27] font-semibold mb-2 sm:mb-2.5">
              मूल सिद्धांत
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#5B2A1B] leading-normal pt-1">
              सेवा • संस्कार • सनातन
            </h2>
            <p className="text-sm text-stone-600 font-sans">
              यह तीन स्तंभ हमारे समस्त सेवा कार्यों, शैक्षणिक प्रकल्पों और आध्यात्मिक आयोजनों की आधारशिला हैं।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: सेवा */}
            <div className="bg-white rounded-xl p-7 border border-[#E7D7C4] shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#5B2A1B]/10 text-[#5B2A1B] flex items-center justify-center font-serif text-2xl font-bold">
                १
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#5B2A1B]">सेवा (Service)</h3>
              <p className="text-xs text-[#793A27] font-semibold uppercase tracking-wider">
                मानव, प्रकृति एवं गोवंश सेवा
              </p>
              <p className="text-sm text-[#3E2B23] leading-relaxed font-sans">
                निराश्रित गोमाता की सेवा, संतों को अन्नदान, पर्यावरण संतुलन हेतु 11,000 वृक्षारोपण, तथा जन-कल्याणकारी प्रकल्पों द्वारा निःस्वार्थ सेवा का निरंतर प्रसार।
              </p>
              <Link
                to="/seva"
                className="text-xs font-bold text-[#5B2A1B] hover:underline inline-flex items-center"
              >
                <span>सेवा प्रकल्प देखें</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Pillar 2: संस्कार */}
            <div className="bg-white rounded-xl p-7 border border-[#E7D7C4] shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#C49033]/15 text-[#996C1B] flex items-center justify-center font-serif text-2xl font-bold">
                २
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#5B2A1B]">संस्कार (Values)</h3>
              <p className="text-xs text-[#793A27] font-semibold uppercase tracking-wider">
                गुरुकुल, चरित्र निर्माण व शिक्षा
              </p>
              <p className="text-sm text-[#3E2B23] leading-relaxed font-sans">
                आने वाली पीढ़ियों में भारतीय संस्कृति, सदाचार, योग, नशा-मुक्ति एवं वैदिक ज्ञान की ज्योति प्रज्वलित करने हेतु गुरुकुल का सुनियोजित विस्तार।
              </p>
              <Link
                to="/gurukul"
                className="text-xs font-bold text-[#5B2A1B] hover:underline inline-flex items-center"
              >
                <span>गुरुकुल दृष्टि जानें</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Pillar 3: सनातन */}
            <div className="bg-white rounded-xl p-7 border border-[#E7D7C4] shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#265B33]/10 text-[#265B33] flex items-center justify-center font-serif text-2xl font-bold">
                ३
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#5B2A1B]">सनातन (Tradition)</h3>
              <p className="text-xs text-[#793A27] font-semibold uppercase tracking-wider">
                परंपरा, मंदिर एवं संकीर्तन
              </p>
              <p className="text-sm text-[#3E2B23] leading-relaxed font-sans">
                श्री श्री राधा कृष्ण बिहारी जी के भव्य मंदिर का निर्माण, दैनिक भोग-आरती, श्रीमद्भागवत कथा, अखंड हरिनाम संकीर्तन एवं सनातन धरोहर का गौरव।
              </p>
              <Link
                to="/temple"
                className="text-xs font-bold text-[#5B2A1B] hover:underline inline-flex items-center"
              >
                <span>मंदिर दर्शन विवरण</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED CAMPAIGN: वृक्षारोपण महाअभियान (11,000 TREES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#194023] text-white rounded-2xl overflow-hidden shadow-xl border border-[#265B33] grid grid-cols-1 lg:grid-cols-12">
          {/* Left Text Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-[#265B33] text-[#A3E635] text-xs font-bold uppercase tracking-wider">
                  <TreeDeciduous className="w-4 h-4 mr-1" />
                  <span>अभियान प्रारंभ — भव्य प्रगति पर</span>
                </div>
                <div className="inline-flex items-center px-2.5 py-1 rounded bg-black/30 border border-emerald-400/40 text-xs font-semibold text-emerald-200">
                  <span>₹२.३६ लाख+ जनसहयोग प्राप्त</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                {siteConfig.treeCampaign.title}
              </h2>

              <p className="text-[#A3E635] font-serif text-lg font-medium">
                ११,००० वृक्षों का पावन संकल्प • प्रथम चरण: १,१०० वृक्ष (सफलतापूर्वक संचालित)
              </p>

              <div className="p-3 bg-[#112F19] rounded-lg border border-[#265B33] text-xs text-[#E2EEDF] space-y-1">
                <p>
                  <strong>अभियान स्थिति:</strong> <span className="text-[#A3E635] font-bold">अभियान का शुभारंभ हो चुका है और यह अभूतपूर्व जनसहभागिता के साथ अत्यंत सफलतापूर्वक चल रहा है।</span>
                </p>
                <p>
                  <strong>शुभ तिथि:</strong> {siteConfig.treeCampaign.date} (शरद नवरात्रि)
                </p>
                <p>
                  <strong>पावन प्रसंग:</strong> {siteConfig.treeCampaign.occasion}
                </p>
                <p>
                  <strong>स्थान:</strong> {siteConfig.treeCampaign.location}
                </p>
              </div>

              <p className="text-sm text-[#E2EEDF]/90 leading-relaxed font-sans">
                प्रकृति की रक्षा, गोवंश एवं भावी पीढ़ियों के कल्याण हेतु सत्य सनातन धाम द्वारा वृक्षारोपण महाअभियान का शुभारंभ हो चुका है और यह विशाल स्तर पर अत्यंत उत्साहपूर्वक निरंतर प्रगति पर है। आप मात्र <strong className="text-[#A3E635] text-base">₹1,001</strong> में एक वृक्ष (५ वर्षों के संपूर्ण पोषण, खाद-पानी एवं संरक्षण सहित) समर्पित कर इस पावन महाअभियान के गौरवशाली सहभागी बन सकते हैं।
              </p>

              {/* Tree Contribution Tiers */}
              <div className="pt-2">
                <span className="text-xs text-[#DFB25A] font-semibold uppercase tracking-wider block mb-2">
                  सहयोग विकल्प:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {siteConfig.treeCampaign.tiers.map((t) => (
                    <button
                      key={t.count}
                      onClick={() => onOpenDonate('vriksharopan-seva', t.amount)}
                      className="p-2 bg-[#265B33] hover:bg-[#3D7A4D] rounded text-center transition-colors cursor-pointer border border-[#3D7A4D]/40"
                    >
                      <div className="text-xs font-medium text-white">{t.label}</div>
                      <div className="text-sm font-bold text-[#A3E635]">₹{t.amount}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                to="/tree-plantation"
                className="px-6 py-3 bg-[#A3E635] hover:bg-[#84CC16] text-[#194023] font-bold text-sm rounded-md transition-all shadow-md cursor-pointer inline-flex items-center space-x-2"
              >
                <span>वृक्षारोपण अभियान विवरण</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.treeCampaign.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-md transition-colors border border-white/20 inline-flex items-center space-x-1.5"
              >
                <span>अभियान वेबसाइट</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Visual Column (Satellite Map with Yellow Outline) */}
          <div className="lg:col-span-5 bg-[#112F19] p-4 sm:p-6 flex flex-col justify-center">
            <div className="relative rounded-xl overflow-hidden border-2 border-[#265B33] shadow-md group">
              <img
                src="/Satelight Image of Satya Sanatan Dham.png"
                alt="वृक्षारोपण एवं मंदिर निर्माण क्षेत्र - उपग्रह मानचित्र"
                className="w-full h-80 sm:h-96 object-cover cursor-pointer group-hover:scale-103 transition-transform duration-300"
                onClick={() =>
                  onOpenLightbox(
                    '/Satelight Image of Satya Sanatan Dham.png',
                    'सत्य सनातन धाम उपग्रह मानचित्र',
                    'वृक्षारोपण महाअभियान क्षेत्र एवं मंदिर निर्माण क्षेत्र',
                    'ग्राम – पासुन (मौदहा, हमीरपुर) में 11,000 वृक्षारोपण हेतु सीमांकित भूमि'
                  )
                }
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    '/assets/satellite-site.jpg';
                }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/75 p-3 text-center text-xs text-white">
                <span className="font-semibold text-[#FACC15]">
                  उपग्रह मानचित्र: पीला घेरा (वृक्षारोपण क्षेत्र)
                </span>
                <p className="text-[10px] text-stone-300">बड़ा करके देखने हेतु क्लिक करें</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5. SATYA SANATAN DHAM 6 MAHABHIYANS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E7D7C4] pb-4">
          <div>
            <span className="inline-block text-xs uppercase tracking-widest text-[#793A27] font-semibold mb-2">
              युगांतकारी प्रकल्प
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#5B2A1B] leading-normal mt-1">
              सत्य सनातन धाम के ६ महाअभियान
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans mt-0.5">
              प्रकृति, गोवंश, धर्म, शिक्षा एवं समाज के सर्वांगीण उत्थान हेतु समर्पित महाप्रकल्प
            </p>
          </div>

          <Link
            to="/mahabhiyan"
            className="px-5 py-2.5 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs sm:text-sm font-bold rounded-md transition-colors inline-flex items-center space-x-1.5 self-start sm:self-auto cursor-pointer shadow-sm"
          >
            <span>सभी ६ महाअभियान देखें</span>
            <ArrowRight className="w-4 h-4 text-[#DFB25A]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. वृक्षारोपण */}
          <div className="bg-white rounded-2xl p-6 border border-[#265B33]/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <span className="inline-block px-2.5 py-0.5 rounded bg-[#EAF5EC] text-[#194023] text-[11px] font-bold">
                अभियान १ • पर्यावरण
              </span>
              <h3 className="font-serif text-xl font-bold text-[#194023]">
                वृक्षारोपण महाअभियान
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                ११,००० वृक्षों का पावन महासंकल्प। प्रति वृक्ष ₹१,००१ में ५ वर्षों का संपूर्ण पोषण एवं संरक्षण।
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between border-t border-[#E7D7C4]">
              <Link to="/tree-plantation" className="text-xs font-bold text-[#194023] hover:underline inline-flex items-center">
                <span>विस्तृत पृष्ठ</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
              <button
                onClick={() => onOpenDonate('vriksharopan-seva', 1001)}
                className="px-3 py-1.5 bg-[#265B33] hover:bg-[#194023] text-white text-xs font-semibold rounded cursor-pointer"
              >
                सहयोग करें
              </button>
            </div>
          </div>

          {/* 2. गौ सेवा */}
          <div className="bg-white rounded-2xl p-6 border border-[#E7D7C4] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <span className="inline-block px-2.5 py-0.5 rounded bg-[#FAF0E4] text-[#793A27] text-[11px] font-bold">
                अभियान २ • गोवंश
              </span>
              <h3 className="font-serif text-xl font-bold text-[#5B2A1B]">
                गौ सेवा महाअभियान
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                निराश्रित एवं वृद्ध देशी गायों के लिए सुरभि गौशाला, नित्य हरा चारा एवं २४ घंटे चिकित्सा सेवा।
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between border-t border-[#E7D7C4]">
              <Link to="/mahabhiyan/gau-seva" className="text-xs font-bold text-[#5B2A1B] hover:underline inline-flex items-center">
                <span>विस्तृत पृष्ठ</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
              <button
                onClick={() => onOpenDonate('gau-mata-seva', 2100)}
                className="px-3 py-1.5 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-semibold rounded cursor-pointer"
              >
                सहयोग करें
              </button>
            </div>
          </div>

          {/* 3. मंदिर निर्माण */}
          <div className="bg-white rounded-2xl p-6 border border-[#DFB25A]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <span className="inline-block px-2.5 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] text-[11px] font-bold">
                अभियान ३ • धर्म धाम
              </span>
              <h3 className="font-serif text-xl font-bold text-[#5B2A1B]">
                मंदिर निर्माण अभियान
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                २५,००० वर्ग फीट बंसी पहाड़पुर सैंडस्टोन नागर शैली श्री श्री राधा कृष्ण बिहारी जी मंदिर संकुल निर्माण।
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between border-t border-[#E7D7C4]">
              <Link to="/mahabhiyan/mandir-nirman" className="text-xs font-bold text-[#5B2A1B] hover:underline inline-flex items-center">
                <span>विस्तृत पृष्ठ</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
              <button
                onClick={() => onOpenDonate('mandir-nirman-seva', 5100)}
                className="px-3 py-1.5 bg-[#DFB25A] hover:bg-[#C49033] text-[#3E1B10] text-xs font-bold rounded cursor-pointer"
              >
                शिला सेवा
              </button>
            </div>
          </div>

          {/* 4. अन्नदान */}
          <div className="bg-white rounded-2xl p-6 border border-[#E7D7C4] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <span className="inline-block px-2.5 py-0.5 rounded bg-[#FAF0E4] text-[#793A27] text-[11px] font-bold">
                अभियान ४ • प्रसादम
              </span>
              <h3 className="font-serif text-xl font-bold text-[#5B2A1B]">
                अन्नदान महाअभियान
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                "अन्नं परब्रह्म" — तीर्थयात्रियों, साधु-संतों एवं निर्धनों हेतु नित्य अक्षय पात्र महाप्रसादम भंडारा।
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between border-t border-[#E7D7C4]">
              <Link to="/mahabhiyan/annadaan" className="text-xs font-bold text-[#5B2A1B] hover:underline inline-flex items-center">
                <span>विस्तृत पृष्ठ</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
              <button
                onClick={() => onOpenDonate('anna-daan-seva', 2500)}
                className="px-3 py-1.5 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-semibold rounded cursor-pointer"
              >
                सहयोग करें
              </button>
            </div>
          </div>

          {/* 5. गुरुकुल */}
          <div className="bg-white rounded-2xl p-6 border border-[#E7D7C4] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <span className="inline-block px-2.5 py-0.5 rounded bg-[#E2EEDF] text-[#194023] text-[11px] font-bold">
                अभियान ५ • शिक्षा
              </span>
              <h3 className="font-serif text-xl font-bold text-[#5B2A1B]">
                गुरुकुल अभियान
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                ग्रामीण बच्चों को निःशुल्क वेद, संस्कृत, आधुनिक गणित, विज्ञान एवं कंप्यूटर की आवासीय शिक्षा।
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between border-t border-[#E7D7C4]">
              <Link to="/mahabhiyan/gurukul" className="text-xs font-bold text-[#5B2A1B] hover:underline inline-flex items-center">
                <span>विस्तृत पृष्ठ</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
              <button
                onClick={() => onOpenDonate('gurukul-expansion-seva', 2500)}
                className="px-3 py-1.5 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-semibold rounded cursor-pointer"
              >
                सहयोग करें
              </button>
            </div>
          </div>

          {/* 6. नशा मुक्ति */}
          <div className="bg-white rounded-2xl p-6 border border-[#E7D7C4] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <span className="inline-block px-2.5 py-0.5 rounded bg-[#FAF0E4] text-[#793A27] text-[11px] font-bold">
                अभियान ६ • समाज सुधार
              </span>
              <h3 className="font-serif text-xl font-bold text-[#5B2A1B]">
                नशा मुक्ति अभियान
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                गाँव-गाँव में चौपाल, नशामुक्त संकल्प शिविर, आयुर्वेदिक उपचार एवं युवाओं का खेलकूद से जुड़ाव।
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between border-t border-[#E7D7C4]">
              <Link to="/mahabhiyan/nasha-mukti" className="text-xs font-bold text-[#5B2A1B] hover:underline inline-flex items-center">
                <span>विस्तृत पृष्ठ</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
              <button
                onClick={() => onOpenDonate('nasha-mukti-counseling-camp', 2100)}
                className="px-3 py-1.5 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-semibold rounded cursor-pointer"
              >
                सहयोग करें
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED SEVA GRID (VERIFIED SEVA PRICING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E7D7C4] pb-4">
          <div>
            <span className="inline-block text-xs uppercase tracking-widest text-[#793A27] font-semibold mb-2">
              पावन सेवाएँ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal mt-1">
              प्रमुख सेवा के अवसर
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans mt-0.5">
              प्रत्येक सेवा का उद्देश्य एवं अधिकृत योगदान पारदर्शी रूप से प्रस्तुत है।
            </p>
          </div>

          <Link
            to="/seva"
            className="px-4 py-2 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs sm:text-sm font-bold rounded-md transition-colors inline-flex items-center space-x-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>सभी ५०+ सेवाएँ देखें</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Featured Seva Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSevas.map((seva) => (
            <div
              key={seva.id}
              className="bg-white rounded-xl border border-[#E7D7C4] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#793A27] bg-[#FAF0E4] px-2 py-0.5 rounded">
                    {seva.categoryHindi}
                  </span>
                  {seva.amountDisplay && (
                    <span className="font-bold text-sm text-[#5B2A1B]">
                      {seva.amountDisplay}
                    </span>
                  )}
                </div>

                <h3 className="font-serif font-bold text-lg text-[#5B2A1B] group-hover:text-[#793A27] transition-colors">
                  {seva.hindiName}
                </h3>

                <p className="text-xs text-[#3E2B23] line-clamp-3 leading-relaxed font-sans">
                  {seva.description}
                </p>

                <div className="text-[11px] text-stone-500 pt-1 border-t border-[#E7D7C4]">
                  <strong>उद्देश्य:</strong> {seva.purpose}
                </div>
              </div>

              <div className="p-4 bg-[#FCFAF6] border-t border-[#E7D7C4] flex items-center space-x-2">
                <Link
                  to={`/seva/${seva.id}`}
                  className="flex-1 py-2 bg-white hover:bg-[#FAF7F2] text-[#5B2A1B] text-xs font-semibold rounded border border-[#CBD5E1] transition-colors cursor-pointer inline-flex items-center justify-center space-x-1"
                >
                  <span>विस्तृत पृष्ठ</span>
                </Link>
                <Link
                  to={`/donate?seva=${seva.id}&amount=${seva.amount || ''}`}
                  className="flex-1 py-2 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-bold rounded-md transition-colors shadow-xs inline-flex items-center justify-center cursor-pointer"
                >
                  <span>सेवा करें</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TEMPLE ARCHITECTURE & MASTERPLAN HIGHLIGHT */}
      <section className="bg-white border-y border-[#E7D7C4] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block text-xs uppercase tracking-widest text-[#793A27] font-semibold mb-2 sm:mb-3">
              दिव्य अधिष्ठान
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#5B2A1B] leading-normal pt-1">
              श्री श्री राधा कृष्ण बिहारी जी मंदिर
            </h2>
            <p className="text-sm text-stone-600 font-sans">
              २५,००० वर्ग फीट के भूखंड पर नागर शैली एवं लाल बलुआ पत्थर से निर्मित हो रहा भव्य मंदिर संकुल।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Visual 1: Temple Front Architecture */}
            <div className="space-y-3">
              <div className="rounded-xl overflow-hidden border border-[#E7D7C4] shadow-md bg-stone-100 group">
                <img
                  src="/1.png"
                  alt="श्री श्री राधा कृष्ण बिहारी जी मंदिर अग्र दृश्य"
                  className="w-full h-72 sm:h-80 object-cover cursor-pointer group-hover:scale-102 transition-transform duration-300"
                  onClick={() =>
                    onOpenLightbox(
                      '/1.png',
                      'श्री श्री राधा कृष्ण बिहारी जी मंदिर',
                      'मंदिर का मुख्य अग्र भाग एवं शिखर',
                      'लाल बलुआ पत्थर (Dholpur/Bansi Pahadpur Sandstone) से निर्मित स्थापत्य'
                    )
                  }
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/temple-hero.jpg';
                  }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-stone-600 px-1">
                <span className="font-semibold text-[#5B2A1B]">
                  मुख्य मंदिर संरचना: २,५०० वर्ग फीट
                </span>
                <span className="text-[#793A27]">अष्टकोणीय नक्षत्र फव्वारा व परिक्रमा पथ</span>
              </div>
            </div>

            {/* Visual 2: CAD Masterplan */}
            <div className="space-y-3">
              <div className="rounded-xl overflow-hidden border border-[#E7D7C4] shadow-md bg-stone-100 group">
                <img
                  src="/Temple Masterplan.png"
                  alt="आधिकारिक मूल वास्तु मास्टरप्लान"
                  className="w-full h-72 sm:h-80 object-contain bg-white cursor-pointer group-hover:scale-102 transition-transform duration-300"
                  onClick={() =>
                    onOpenLightbox(
                      '/Temple Masterplan.png',
                      'मूल वास्तु मास्टरप्लान (100x250 फीट)',
                      'अधिकृत साइट मास्टरप्लान (25,000 sq.ft)',
                      'मंदिर, उद्यान, कार्यालय एवं पार्किंग का सुनियोजित विन्यास'
                    )
                  }
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/temple-masterplan.jpg';
                  }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-stone-600 px-1">
                <span className="font-semibold text-[#5B2A1B]">
                  भूखंड माप: १००' x २५०' (२५,००० वर्ग फीट)
                </span>
                <span className="text-[#265B33] font-medium">उद्यान क्षेत्र: ~१५,००० वर्ग फीट</span>
              </div>
            </div>
          </div>

          {/* 4 Additional Original Views Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div
              className="group cursor-pointer rounded-lg overflow-hidden border border-[#E7D7C4] shadow-xs bg-stone-100"
              onClick={() =>
                onOpenLightbox(
                  '/images/temple/temple-main-2.png',
                  'मंदिर परिसर का विहंगम दृश्य (View 2)',
                  'मास्टर एरियल विहंगम दृष्टिकोण',
                  '२५,००० वर्ग फीट के सम्पूर्ण भूखंड पर परिक्रमा पथ, कलात्मक छतरियां एवं उद्यान विन्यास — अधिकृत छायाचित्र।'
                )
              }
            >
              <img
                src="/images/temple/temple-main-2.png"
                alt="विहंगम दृश्य (View 2)"
                className="w-full h-28 sm:h-36 object-contain bg-[#FAF7F2] p-1 group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/2.png';
                }}
              />
              <div className="p-2 bg-[#FAF7F2] text-[11px] font-semibold text-[#5B2A1B] text-center border-t border-[#E7D7C4]">
                विहंगम वास्तु कोण (View 2)
              </div>
            </div>
            <div
              className="group cursor-pointer rounded-lg overflow-hidden border border-[#E7D7C4] shadow-xs bg-stone-100"
              onClick={() =>
                onOpenLightbox(
                  '/images/temple/temple-main-3.png',
                  'परिक्रमा एवं पुष्प वाटिका (View 3)',
                  'मंदिर उद्यान एवं परिक्रमा पथ',
                  'सदाबहार वृक्ष, पुष्प क्यारियां, सुंदर दीप स्तंभ एवं पत्थर से जड़ा हुआ चौड़ा परिक्रमा मार्ग।'
                )
              }
            >
              <img
                src="/images/temple/temple-main-3.png"
                alt="पुष्प वाटिका (View 3)"
                className="w-full h-28 sm:h-36 object-contain bg-[#FAF7F2] p-1 group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/3.png';
                }}
              />
              <div className="p-2 bg-[#FAF7F2] text-[11px] font-semibold text-[#5B2A1B] text-center border-t border-[#E7D7C4]">
                परिक्रमा व वाटिका (View 3)
              </div>
            </div>
            <div
              className="group cursor-pointer rounded-lg overflow-hidden border border-[#E7D7C4] shadow-xs bg-stone-100"
              onClick={() =>
                onOpenLightbox(
                  '/images/temple/temple-main-4.png',
                  'नक्काशीदार जाली व स्तंभ (View 4)',
                  'पारंपरिक पत्थर की नक्काशी',
                  'भारतीय कारीगरी का उत्कृष्ट उदाहरण — लाल पत्थर पर जालीदार वातायन, नक्काशीदार मेहराब व अलंकृत स्तंभ।'
                )
              }
            >
              <img
                src="/images/temple/temple-main-4.png"
                alt="नक्काशीदार जाली (View 4)"
                className="w-full h-28 sm:h-36 object-contain bg-[#FAF7F2] p-1 group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/4.png';
                }}
              />
              <div className="p-2 bg-[#FAF7F2] text-[11px] font-semibold text-[#5B2A1B] text-center border-t border-[#E7D7C4]">
                पत्थर नक्काशी व जाली (View 4)
              </div>
            </div>
            <div
              className="group cursor-pointer rounded-lg overflow-hidden border border-[#E7D7C4] shadow-xs bg-stone-100"
              onClick={() =>
                onOpenLightbox(
                  '/images/temple/temple-main-5.png',
                  'प्रांगण एवं जलकुंड (View 5)',
                  'जलकुंड एवं ध्यान प्रांगण',
                  'भक्तों के विश्राम हेतु पत्थर की बेंचें, निरंतर प्रवाहित जल स्रोत एवं शांतिपूर्ण वातावरण।'
                )
              }
            >
              <img
                src="/images/temple/temple-main-5.png"
                alt="जलकुंड प्रांगण (View 5)"
                className="w-full h-28 sm:h-36 object-contain bg-[#FAF7F2] p-1 group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/5.png';
                }}
              />
              <div className="p-2 bg-[#FAF7F2] text-[11px] font-semibold text-[#5B2A1B] text-center border-t border-[#E7D7C4]">
                जलकुंड व प्रांगण (View 5)
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              to="/temple"
              className="px-6 py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-sm rounded-md transition-colors cursor-pointer inline-flex items-center space-x-2"
            >
              <span>मंदिर के संपूर्ण वास्तु एवं सेवा विकल्प देखें</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. GAU SEVA & GURUKUL TWO-COLUMN SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gau Seva Card */}
          <div className="bg-[#FAF0E4]/70 rounded-2xl p-6 sm:p-8 border border-[#E7D7C4] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs uppercase font-bold text-[#793A27] tracking-wider mb-2">
                सुरभि संरक्षण
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#5B2A1B] leading-normal">
                गौशाला एवं गौ सेवा
              </h3>
              <p className="text-sm text-[#3E2B23] leading-relaxed font-sans">
                सत्य सनातन धाम में गोमाता को साक्षात कामधेनु मानकर नित्य सेवा, हरा चारा, सुपाच्य पौष्टिक आहार और औषधीय चिकित्सा की सुव्यवस्था की गई है।
              </p>
              <div className="space-y-2 pt-2 text-xs font-sans">
                <div className="flex items-center justify-between p-2 bg-white rounded border border-[#E7D7C4]">
                  <span>गोमाता का हरा चारा (१ दिन):</span>
                  <span className="font-bold text-[#5B2A1B]">₹३,१००</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border border-[#E7D7C4]">
                  <span>गोमाता का एक दिन का संपूर्ण भोजन:</span>
                  <span className="font-bold text-[#5B2A1B]">₹५,१००</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border border-[#E7D7C4]">
                  <span>गोमाता का औषधि उपचार (१ माह):</span>
                  <span className="font-bold text-[#5B2A1B]">₹११,०००</span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center space-x-3">
              <Link
                to="/donate?seva=gau-mata-seva&amount=2100"
                className="px-5 py-2.5 bg-[#5B2A1B] text-[#FAF7F2] text-xs font-bold rounded-md hover:bg-[#3E1B10] transition-colors"
              >
                गौ सेवा में सहयोग करें
              </Link>
              <Link
                to="/gaushala"
                className="text-xs font-bold text-[#5B2A1B] hover:underline"
              >
                विस्तृत जानकारी →
              </Link>
            </div>
          </div>

          {/* Gurukul Card */}
          <div className="bg-[#E2EEDF]/60 rounded-2xl p-6 sm:p-8 border border-[#265B33]/20 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs uppercase font-bold text-[#194023] tracking-wider mb-2">
                संस्कार संवर्धन
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#194023] leading-normal">
                गुरुकुल एवं संस्कृति शिक्षण
              </h3>
              <p className="text-sm text-[#2D2421] leading-relaxed font-sans">
                आधुनिक शिक्षा के साथ-साथ नैतिक मूल्य, चरित्र निर्माण, वेद-वेदांग और सनातन संस्कारों की रक्षा हेतु गुरुकुल का सुनियोजित विकास किया जा रहा है।
              </p>
              <div className="space-y-2.5 pt-2 text-xs text-[#2D2421] font-sans">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#265B33] flex-shrink-0 mt-0.5" />
                  <span>वैदिक एवं आधुनिक शिक्षा का सम्यक समन्वय</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#265B33] flex-shrink-0 mt-0.5" />
                  <span>पाठशाला गृह एवं ग्रंथालय निर्माण सहयोग</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#265B33] flex-shrink-0 mt-0.5" />
                  <span>युवाओं को व्यसनमुक्त व संस्कारित बनाने का प्रयास</span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center space-x-3">
              <Link
                to="/donate?seva=gurukul-expansion-seva"
                className="px-5 py-2.5 bg-[#194023] text-white text-xs font-bold rounded-md hover:bg-[#112F19] transition-colors"
              >
                गुरुकुल विस्तार सेवा
              </Link>
              <Link
                to="/gurukul"
                className="text-xs font-bold text-[#194023] hover:underline"
              >
                गुरुकुल विजन पढ़ें →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SITE & SATELLITE STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E7D7C4] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="inline-block text-xs uppercase tracking-widest text-[#793A27] font-semibold mb-2">
              साइट एवं क्षेत्र
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal pt-1">
              यह वह स्थान है जहाँ Satya Sanatan Dham की सेवा और निर्माण गतिविधियों का विस्तार हो रहा है।
            </h2>
            <p className="text-sm text-stone-600 font-sans leading-relaxed">
              ग्राम पासुन, मौदहा (जनपद हमीरपुर, उ.प्र.) की पावन धरा पर पर्यावरण, गोसेवा एवं मंदिर निर्माण का कार्य निरंतर प्रगति पर है।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="relative rounded-xl overflow-hidden border border-[#E7D7C4] group cursor-pointer"
              onClick={() =>
                onOpenLightbox(
                  '/Satelight Image of Satya Sanatan Dham.png',
                  'उपग्रह मानचित्र - सत्य सनातन धाम',
                  'वृक्षारोपण क्षेत्र (11,000 वृक्ष) एवं मंदिर निर्माण क्षेत्र',
                  'ग्राम पासुन, मौदहा, हमीरपुर (उत्तर प्रदेश - 210507)'
                )
              }
            >
              <img
                src="/Satelight Image of Satya Sanatan Dham.png"
                alt="उपग्रह मानचित्र"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-102 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    '/assets/satellite-site.jpg';
                }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/70 p-3 text-white text-xs flex justify-between items-center">
                <span>उपग्रह मानचित्र (Satellite View)</span>
                <span className="text-[#DFB25A]">बड़ा करके देखें</span>
              </div>
            </div>

            <div
              className="relative rounded-xl overflow-hidden border border-[#E7D7C4] group cursor-pointer"
              onClick={() =>
                onOpenLightbox(
                  '/Temple Masterplan.png',
                  'वास्तु मास्टरप्लान - 25,000 वर्ग फीट',
                  'श्री श्री राधा कृष्ण बिहारी जी मंदिर',
                  '100 x 250 फीट भूखंड का संपूर्ण स्थापत्य विन्यास'
                )
              }
            >
              <img
                src="/Temple Masterplan.png"
                alt="वास्तु मास्टरप्लान"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-102 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/temple-masterplan.jpg';
                }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/70 p-3 text-white text-xs flex justify-between items-center">
                <span>वास्तु मास्टरप्लान (100' x 250')</span>
                <span className="text-[#DFB25A]">बड़ा करके देखें</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-[#E7D7C4] pb-3">
          <div>
            <span className="inline-block text-xs uppercase tracking-widest text-[#793A27] font-semibold mb-2">
              चित्र दीर्घा
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal mt-1">
              अधिकृत छायाचित्र दीर्घा
            </h2>
          </div>
          <Link
            to="/gallery"
            className="text-xs sm:text-sm font-bold text-[#5B2A1B] hover:underline inline-flex items-center"
          >
            <span>दीर्घा में सभी देखें</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.slice(0, 4).map((item) => {
            const imgSrc = item.assetUrl || `/${item.assetKey}`;
            return (
              <div
                key={item.id}
                onClick={() =>
                  onOpenLightbox(
                    imgSrc,
                    item.title,
                    item.title,
                    item.description
                  )
                }
                className="group relative rounded-xl overflow-hidden border border-[#E7D7C4] shadow-xs cursor-pointer bg-stone-100 h-48 sm:h-56"
              >
                <img
                  src={imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `/${item.assetKey}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 p-3 flex flex-col justify-end text-white">
                  <span className="text-[10px] text-[#DFB25A] font-semibold">
                    {item.categoryHindi}
                  </span>
                  <p className="text-xs font-serif font-bold line-clamp-1">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. INSPIRING DEVOTEE & DONOR TESTIMONIAL CAROUSEL */}
      <TestimonialCarousel onOpenDonate={onOpenDonate} />

      {/* 12. FAQ ACCORDION (GENUINE TRANSPARENCY) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="inline-block text-xs uppercase tracking-widest text-[#793A27] font-semibold mb-2">
            जिज्ञासा समाधान
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal pt-1">
            प्रायः पूछे जाने वाले प्रश्न (FAQ)
          </h2>
        </div>

        <div className="space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-[#E7D7C4] overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-sm sm:text-base font-bold text-[#3E2B23] hover:text-[#5B2A1B] cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-stone-400 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#5B2A1B]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans border-t border-[#FAF0E4] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 12. LOCATION & CONTACT MAP SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF0E4]/80 rounded-2xl p-6 sm:p-10 border border-[#E7D7C4] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <span className="inline-block text-xs uppercase tracking-widest text-[#793A27] font-semibold mb-2">
              भौगोलिक स्थिति
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal pt-1">
              सत्य सनातन धाम का पावन केंद्र
            </h3>
            <p className="text-xs sm:text-sm text-[#3E2B23] leading-relaxed font-sans">
              उत्तर प्रदेश के बुंदेलखंड अंचल अंतर्गत हमीरपुर जिले की मौदहा तहसील के ग्राम पासुन में यह पावन स्थल स्थित है। यहाँ दर्शनार्थी एवं सेवाभावी भक्त सुगमता से पहुंच सकते हैं।
            </p>
            <div className="p-3.5 bg-white rounded-lg border border-[#E7D7C4] space-y-1.5 text-xs text-[#3E2B23]">
              <p>
                <strong>सटीक पता:</strong> {siteConfig.address.hindiFull}
              </p>
              <p>
                <strong>हेल्पलाइन:</strong> {siteConfig.contact.primaryPhone}
              </p>
              <p>
                <strong>ईमेल:</strong> {siteConfig.contact.email}
              </p>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[#5B2A1B] text-[#FAF7F2] text-xs font-bold rounded-md hover:bg-[#3E1B10] transition-colors cursor-pointer inline-block"
            >
              मार्ग एवं संपर्क विवरण देखें →
            </Link>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E7D7C4] space-y-3">
            <h4 className="font-serif font-bold text-base text-[#5B2A1B]">
              समीपवर्ती यात्रा मार्ग
            </h4>
            <ul className="space-y-2 text-xs text-stone-700 font-sans">
              <li className="flex items-start space-x-2">
                <span className="text-[#DFB25A] font-bold">•</span>
                <span>
                  <strong>सड़क मार्ग:</strong> कानपुर से हमीरपुर होते हुए मौदहा एवं पासुन।
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#DFB25A] font-bold">•</span>
                <span>
                  <strong>रेलवे स्टेशन:</strong> मौदहा (RGU), हमीरपुर रोड एवं बांदा जंक्शन।
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#DFB25A] font-bold">•</span>
                <span>
                  <strong>हवाई अड्डा:</strong> चकेरी हवाई अड्डा (कानपुर) अथवा अमौसी (लखनऊ)।
                </span>
              </li>
            </ul>
            <div className="p-3 bg-[#FCFAF6] rounded border border-[#E7D7C4] text-[11px] text-stone-500">
              * यात्रा से पूर्व धाम कार्यालय में संपर्क कर व्यवस्था व दर्शन समय की जानकारी प्राप्त की जा सकती है।
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
