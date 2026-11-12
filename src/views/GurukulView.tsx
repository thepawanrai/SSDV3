import React from 'react';
import { Link } from 'react-router-dom';
import { sevasData } from '../config/siteData';
import { BookOpen, Heart, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface GurukulViewProps {
  onOpenDonate?: (sevaId?: string, amount?: number) => void;
}

export const GurukulView: React.FC<GurukulViewProps> = ({ onOpenDonate }) => {
  const gurukulSevas = sevasData.filter(
    (s) =>
      s.id === 'gurukul-expansion-seva' ||
      s.id === 'pathshala-grih-nirman' ||
      s.id === 'granth-pustakalay-nirman' ||
      s.id === 'geeta-daan-seva'
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16 font-sans">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#793A27] mb-2 sm:mb-3">
          संस्कार एवं शिक्षा प्रकल्प
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B2A1B] leading-normal pt-1">
          गुरुकुल एवं संस्कृति संवर्धन
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-serif">
          भारतीय संस्कृति, वैदिक ज्ञान एवं चरित्र निर्माण की पावन पीठ
        </p>
      </div>

      {/* Main Philosophy Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7D7C4] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#3E2B23] leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-[#5B2A1B]">
            गुरुकुल दृष्टि एवं पावन संकल्प
          </h2>
          <p>
            सत्य सनातन धाम का गुरुकुल प्रकल्प आने वाली पीढ़ी को केवल किताबी ज्ञान तक सीमित न रखकर उन्हें संस्कार, अनुशासन, नैतिक मूल्यों और राष्ट्रभक्ति से परिपूर्ण बनाने का एक निष्ठावान प्रयास है।
          </p>
          <p>
            यहाँ विद्यार्थियों को सनातन संस्कृति, वेद-उपनिषद के मूलभूत सिद्धांतों, संस्कृत भाषा के साथ-साथ समकालीन उपयोगी शिक्षा प्रदान करने की योजना है। इसके अतिरिक्त युवाओं को नशा-मुक्ति, योग-प्राणायाम एवं सामाजिक सेवा के संस्कारों से जोड़ने का संकल्प है।
          </p>

          <div className="pt-2 flex items-center space-x-3">
            <Link
              to="/donate?seva=gurukul-expansion-seva"
              className="px-6 py-2.5 bg-[#5B2A1B] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-md hover:bg-[#3E1B10] transition-colors cursor-pointer inline-flex items-center space-x-1.5"
            >
              <Heart className="w-4 h-4 text-[#DFB25A] fill-current" />
              <span>गुरुकुल विस्तार में सहयोग करें</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#FAF0E4] p-6 rounded-xl border border-[#E7D7C4] space-y-3">
          <h3 className="font-serif font-bold text-lg text-[#5B2A1B]">
            गुरुकुल के मुख्य शैक्षणिक आयाम
          </h3>
          <ul className="space-y-2.5 text-xs text-[#3E2B23]">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#265B33] flex-shrink-0 mt-0.5" />
              <span><strong>संस्कार युक्त शिक्षा:</strong> बड़ों का आदर, गुरु-शिष्य परंपरा एवं सदाचार।</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#265B33] flex-shrink-0 mt-0.5" />
              <span><strong>वैदिक व सांस्कृतिक ज्ञान:</strong> गीता, रामायण, उपनिषद एवं दैनिक संध्या वंदन।</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#265B33] flex-shrink-0 mt-0.5" />
              <span><strong>शारीरिक व मानसिक स्वास्थ्य:</strong> नित्य योगासन, सूर्य नमस्कार एवं पारंपरिक क्रीड़ा।</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Relevant Gurukul Seva Opportunities */}
      <div className="space-y-6">
        <div className="border-b border-[#E7D7C4] pb-3">
          <span className="inline-block text-xs font-bold uppercase text-[#793A27] tracking-wider mb-2">
            सहयोग के अवसर
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal mt-1">
            गुरुकुल संवर्धन सेवाएँ
          </h2>
          <p className="text-xs text-stone-600">
            विद्यार्थियों के अध्ययन, कक्षा-कक्ष एवं ग्रंथालय निर्माण हेतु सेवा का अवसर
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gurukulSevas.map((seva) => (
            <div
              key={seva.id}
              className="bg-white rounded-xl border border-[#E7D7C4] p-5 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-[#793A27] bg-[#FAF0E4] px-2 py-0.5 rounded">
                  {seva.categoryHindi}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#5B2A1B]">
                  {seva.hindiName}
                </h3>
                <p className="text-xs text-[#3E2B23] leading-relaxed">
                  {seva.description}
                </p>
                <div className="text-[11px] text-stone-500 pt-1 border-t border-[#E7D7C4]">
                  <strong>उद्देश्य:</strong> {seva.purpose}
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2 border-t border-[#E7D7C4]">
                <Link
                  to={`/seva/${seva.id}`}
                  className="flex-1 py-1.5 text-center text-xs font-semibold text-[#5B2A1B] bg-white border border-[#CBD5E1] rounded hover:bg-[#FAF7F2]"
                >
                  विवरण
                </Link>
                <Link
                  to={`/donate?seva=${seva.id}&amount=${seva.amount || ''}`}
                  className="flex-1 py-1.5 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-bold rounded transition-colors cursor-pointer inline-flex items-center justify-center space-x-1 shadow-xs"
                >
                  <Heart className="w-3.5 h-3.5 text-[#DFB25A] fill-current" />
                  <span>सहयोग करें</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
