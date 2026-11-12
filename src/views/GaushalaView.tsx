import React from 'react';
import { Link } from 'react-router-dom';
import { sevasData } from '../config/siteData';
import { Heart, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface GaushalaViewProps {
  onOpenDonate?: (sevaId?: string, amount?: number) => void;
}

export const GaushalaView: React.FC<GaushalaViewProps> = ({ onOpenDonate }) => {
  const gauSevas = sevasData.filter(
    (s) =>
      s.id === 'gau-mata-seva' ||
      s.id === 'gau-hara-chara-1day' ||
      s.id === 'gau-bhojan-1day' ||
      s.id === 'gau-aushadhi-upchar' ||
      s.id === 'gaushala-nirman'
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16 font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#793A27] mb-2 sm:mb-3">
          सुरभि सेवा प्रकल्प
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B2A1B] leading-normal pt-1">
          गौशाला एवं गौ सेवा
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-serif">
          गौमाता की सेवा — सनातन संस्कृति एवं आध्यात्मिक शुचिता का मूलाधार
        </p>
      </div>

      {/* Main Philosophy & Work Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7D7C4] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#3E2B23] leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-[#5B2A1B]">
            सत्य सनातन धाम गौ सेवा दृष्टि
          </h2>
          <p>
            भारतीय सनातन परंपरा में गौमाता को समस्त देवी-देवताओं का निवास स्थल एवं साक्षात वात्सल्यमयी माँ का स्वरूप माना गया है। सत्य सनातन धाम की गौशाला में निराश्रित एवं सुरभित देशी गोवंश के संरक्षण, पौष्टिक आहार एवं चिकित्सीय देखरेख का पावन कार्य निरंतर संचालित है।
          </p>
          <p>
            यहाँ गोमाता को केवल भोजन देना ही नहीं, अपितु उनके लिए स्वच्छ वातावरण, ताजे हरे चारे, खली, चोकर, दलिया, गुड़ और आवश्यकता पड़ने पर आयुर्वेदिक व एलोपैथिक औषधि उपचार की समर्पित व्यवस्था की गई है।
          </p>

          <div className="pt-2 flex items-center space-x-3">
            <Link
              to="/donate?seva=gau-mata-seva&amount=2100"
              className="px-6 py-2.5 bg-[#5B2A1B] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-md hover:bg-[#3E1B10] transition-colors cursor-pointer inline-flex items-center space-x-1.5"
            >
              <Heart className="w-4 h-4 text-[#DFB25A] fill-current" />
              <span>गौ सेवा में सहयोग करें (₹2,100)</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#FAF0E4] p-6 rounded-xl border border-[#E7D7C4] space-y-3">
          <h3 className="font-serif font-bold text-lg text-[#5B2A1B]">
            गौ सेवा से प्राप्त पुण्य लाभ
          </h3>
          <ul className="space-y-2.5 text-xs text-[#3E2B23]">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#265B33] flex-shrink-0 mt-0.5" />
              <span><strong>पितृ तृप्ति:</strong> शास्त्रों के अनुसार गो ग्रास अर्पण से पितरों को असीम शांति मिलती है।</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#265B33] flex-shrink-0 mt-0.5" />
              <span><strong>आरोग्य एवं समृद्धि:</strong> देशी गोवंश की सेवा से घर में सकारात्मक ऊर्जा का संचार होता है।</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#265B33] flex-shrink-0 mt-0.5" />
              <span><strong>पर्यावरण एवं जैविक कृषि:</strong> गोमूत्र एवं गोमय से भूमि की उर्वरता और शुद्धता बनी रहती है।</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Verified Gau Seva Options */}
      <div className="space-y-6">
        <div className="border-b border-[#E7D7C4] pb-3">
          <span className="inline-block text-xs font-bold uppercase text-[#793A27] tracking-wider mb-2">
            सहयोग के पावन अवसर
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal mt-1">
            उपलब्ध गौ सेवा विकल्प
          </h2>
          <p className="text-xs text-stone-600">
            अपने जन्मदिन, वैवाहिक वर्षगांठ अथवा पूर्वजों की पावन स्मृति में गोमाता की सेवा समर्पित करें
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gauSevas.map((seva) => (
            <div
              key={seva.id}
              className="bg-white rounded-xl border border-[#E7D7C4] p-5 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#793A27] bg-[#FAF0E4] px-2 py-0.5 rounded">
                    {seva.categoryHindi}
                  </span>
                  <span className="font-bold text-base text-[#5B2A1B]">
                    {seva.amountDisplay || 'संपर्क करें'}
                  </span>
                </div>
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
                  className="flex-1 py-2 text-center text-xs font-semibold text-[#5B2A1B] bg-white border border-[#CBD5E1] rounded hover:bg-[#FAF7F2] transition-colors"
                >
                  विवरण
                </Link>
                <Link
                  to={`/donate?seva=${seva.id}&amount=${seva.amount || ''}`}
                  className="flex-1 py-2 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-bold rounded transition-colors cursor-pointer inline-flex items-center justify-center shadow-xs"
                >
                  <span>गौ सेवा करें</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
