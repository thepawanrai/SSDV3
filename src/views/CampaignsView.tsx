import React from 'react';
import { siteConfig } from '../config/siteData';
import { TreeDeciduous, Heart, Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

interface CampaignsViewProps {
  onNavigate: (tab: string) => void;
  onOpenDonate: (sevaId?: string, amount?: number) => void;
}

export const CampaignsView: React.FC<CampaignsViewProps> = ({ onNavigate, onOpenDonate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 font-sans">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#793A27] mb-2 sm:mb-2.5">
          लोक-कल्याणकारी प्रकल्प
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B2A1B] leading-normal pt-1">
          सत्य सनातन धाम महाअभियान
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-serif">
          समय-समय पर आयोजित होने वाले व्यापक सेवा एवं पर्यावरण अभियान
        </p>
      </div>

      {/* Featured Current Campaign: Tree Plantation */}
      <div className="bg-[#194023] text-white rounded-2xl overflow-hidden shadow-xl border border-[#265B33] grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 p-6 sm:p-10 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#265B33] text-[#A3E635] text-xs font-bold uppercase tracking-wider">
              <TreeDeciduous className="w-4 h-4 mr-1" />
              <span>वर्तमान प्रमुख अभियान</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              {siteConfig.treeCampaign.title}
            </h2>

            <p className="font-serif text-lg text-[#A3E635]">
              ११,००० वृक्षों का संकल्प • प्रथम चरण: १,१०० वृक्ष
            </p>

            <div className="p-3 bg-[#112F19] rounded-lg border border-[#265B33] text-xs text-[#E2EEDF] space-y-1">
              <p><strong>दिनांक:</strong> {siteConfig.treeCampaign.date} (शरद नवरात्रि)</p>
              <p><strong>पावन अवसर:</strong> {siteConfig.treeCampaign.occasion}</p>
              <p><strong>स्थान:</strong> {siteConfig.treeCampaign.location}</p>
            </div>

            <p className="text-xs sm:text-sm text-[#E2EEDF]/90 leading-relaxed font-sans">
              प्रकृति एवं आने वाली पीढ़ियों के कल्याण हेतु इस वृक्षारोपण महाअभियान का शुभारंभ हो चुका है और यह अभूतपूर्व जनसहयोग (₹२.३६ लाख+ प्राप्त) के साथ भव्य स्तर पर निरंतर प्रगति पर है। आप मात्र ₹1,001 में एक वृक्ष (५ वर्षों के पोषण एवं संरक्षण सहित) समर्पित कर इस पावन कार्य में सहभागी बन सकते हैं।
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('tree-plantation')}
              className="px-6 py-2.5 bg-[#A3E635] hover:bg-[#84CC16] text-[#194023] font-bold text-xs sm:text-sm rounded transition-colors shadow-sm cursor-pointer inline-flex items-center space-x-1.5"
            >
              <span>अभियान देखें</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenDonate('vriksharopan-seva', 1001)}
              className="px-5 py-2.5 bg-white text-[#194023] hover:bg-stone-100 font-bold text-xs sm:text-sm rounded transition-colors cursor-pointer"
            >
              वृक्ष सेवा करें (₹1,001)
            </button>
            <a
              href={siteConfig.treeCampaign.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded border border-white/20 inline-flex items-center space-x-1"
            >
              <span>विस्तृत पोर्टल</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#112F19] p-4 sm:p-6 flex flex-col justify-center">
          <img
            src="/Satelight Image of Satya Sanatan Dham.png"
            alt="वृक्षारोपण क्षेत्र"
            className="w-full h-72 object-cover rounded-xl border border-[#265B33]"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                '/assets/satellite-site.jpg';
            }}
          />
        </div>
      </div>

      {/* Upcoming & Future Initiatives Architecture */}
      <div className="space-y-4">
        <h3 className="font-serif font-bold text-xl text-[#5B2A1B]">
          आगामी सेवा अभियान (Upcoming Initiatives)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#E7D7C4] shadow-xs space-y-3">
            <span className="text-xs font-semibold text-[#793A27] bg-[#FAF0E4] px-2.5 py-0.5 rounded">
              मंदिर निर्माण अभियान
            </span>
            <h4 className="font-serif font-bold text-lg text-[#5B2A1B]">
              श्री श्री राधा कृष्ण बिहारी जी पाषाण शिला समर्पण
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              भव्य मंदिर के गर्भगृह, मंडप एवं स्तंभों के निर्माण हेतु भक्त शिला एवं पाषाण सेवा समर्पित कर सकते हैं।
            </p>
            <button
              onClick={() => onOpenDonate('mandir-nirman-1sqft', 5100)}
              className="text-xs font-bold text-[#5B2A1B] hover:underline inline-flex items-center"
            >
              <span>शिला सहयोग करें (₹5,100)</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E7D7C4] shadow-xs space-y-3">
            <span className="text-xs font-semibold text-[#194023] bg-[#E2EEDF] px-2.5 py-0.5 rounded">
              गौशाला विस्तार
            </span>
            <h4 className="font-serif font-bold text-lg text-[#194023]">
              सुरभि आश्रय शेड एवं चारागाह संवर्धन
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              धाम में वृद्ध एवं निराश्रित गोवंश के लिए विशाल हवादार शेड एवं जलकुंड का विस्तार कार्य।
            </p>
            <button
              onClick={() => onOpenDonate('gaushala-nirman')}
              className="text-xs font-bold text-[#194023] hover:underline inline-flex items-center"
            >
              <span>गौशाला निर्माण सेवा</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
