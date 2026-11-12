import React from 'react';
import { siteConfig } from '../config/siteData';
import { Calendar, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface EventsViewProps {
  onNavigate: (tab: string) => void;
  onOpenDonate: (sevaId?: string, amount?: number) => void;
}

export const EventsView: React.FC<EventsViewProps> = ({ onNavigate, onOpenDonate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 font-sans">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#793A27]">
          आध्यात्मिक व सेवा उत्सव
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B2A1B]">
          कार्यक्रम एवं उत्सव (Events)
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-serif">
          सत्य सनातन धाम में आयोजित होने वाले पावन पर्व, संकीर्तन एवं अभियान
        </p>
      </div>

      {/* Confirmed Upcoming Event: 11 October 2026 */}
      <div className="space-y-4">
        <h3 className="font-serif font-bold text-xl text-[#5B2A1B]">
          आगामी प्रमुख कार्यक्रम (Upcoming Event)
        </h3>

        <div className="bg-white rounded-2xl border border-[#E7D7C4] p-6 sm:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#265B33] bg-[#E2EEDF] px-3 py-1 rounded">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              <span>११ अक्टूबर २०२६ • शरद नवरात्रि</span>
            </div>

            <h4 className="font-serif text-2xl font-bold text-[#5B2A1B]">
              वृक्षारोपण महाअभियान (प्रथम चरण — १,१०० वृक्ष)
            </h4>

            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
              श्री श्री राधा-कृष्ण एवं भक्त युवराज दास जी के जन्मोत्सव के पावन उपलक्ष्य में धाम परिसर एवं समीपवर्ती क्षेत्र में 1,100 औषधीय व छायादार वृक्षों का रोपण एवं उत्सव पूजन संपन्न होगा।
            </p>

            <div className="flex items-center space-x-2 text-xs text-[#793A27] pt-1">
              <MapPin className="w-4 h-4 text-[#DFB25A]" />
              <span>सत्य सनातन धाम, ग्राम–पासुन, मौदहा, हमीरपुर (उ.प्र.)</span>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <button
                onClick={() => onNavigate('tree-plantation')}
                className="px-5 py-2 bg-[#265B33] text-white font-bold text-xs rounded hover:bg-[#194023] transition-colors cursor-pointer"
              >
                अभियान विवरण देखें
              </button>
              <button
                onClick={() => onOpenDonate('vriksharopan-seva', 100)}
                className="px-5 py-2 bg-[#5B2A1B] text-[#FAF7F2] font-bold text-xs rounded hover:bg-[#3E1B10] transition-colors cursor-pointer"
              >
                वृक्ष सेवा करें (₹100)
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#FAF7F2] p-5 rounded-xl border border-[#E7D7C4] text-center space-y-2">
            <Sparkles className="w-8 h-8 text-[#DFB25A] mx-auto" />
            <p className="font-serif font-bold text-base text-[#5B2A1B]">
              पावन सहभागिता आमंत्रण
            </p>
            <p className="text-xs text-stone-600 font-sans">
              समस्त धर्मप्रेमी एवं प्रकृति-सेवकों का इस पावन अवसर पर हार्दिक स्वागत है।
            </p>
          </div>
        </div>
      </div>

      {/* Elegant Empty State for other events (Never invent events) */}
      <div className="bg-[#FAF7F2] rounded-xl p-8 border border-[#E7D7C4] text-center space-y-2 max-w-2xl mx-auto">
        <p className="font-serif font-bold text-base text-[#5B2A1B]">
          आगामी अन्य कार्यक्रमों की जानकारी शीघ्र उपलब्ध कराई जाएगी।
        </p>
        <p className="text-xs text-stone-500 font-sans">
          कथा, संकीर्तन, पर्वोत्सव एवं सत्संग की अधिकृत तिथियाँ यहाँ समय पर प्रकाशित की जाएंगी।
        </p>
      </div>
    </div>
  );
};
