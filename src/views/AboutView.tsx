import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteData';
import { ShieldCheck, Heart, Users, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onNavigate?: (tab: string) => void;
  onOpenDonate?: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenDonate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16 font-sans">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#793A27] mb-2 sm:mb-3">
          <span>आधिकारिक परिचय</span>
          <span>•</span>
          <span className="text-[#C49033]">संस्था का ध्येय</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B2A1B] leading-normal pt-1">
          सत्य सनातन धाम के बारे में
        </h1>
        <p className="text-base sm:text-lg text-stone-600 font-serif">
          {siteConfig.tagline}
        </p>
      </div>

      {/* Main Story & Institutional Philosophy */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7D7C4] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#3E2B23] leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-[#5B2A1B]">
            हमारा संकल्प एवं पावन उद्देश्य
          </h2>
          <p>
            सत्य सनातन धाम एक ऐसा आध्यात्मिक, सांस्कृतिक और सेवा-आधारित प्रयास है, जहाँ सनातन मूल्यों, भारतीय संस्कृति और जन-कल्याण को प्राथमिकता दी जाती है। ग्राम पासुन (मौदहा, हमीरपुर, उत्तर प्रदेश) की पावन भूमि पर स्थित यह संस्थान समाज, प्रकृति और आने वाली पीढ़ियों के कल्याण हेतु समर्पित है।
          </p>
          <p>
            हमारा मानना है कि धर्म केवल व्यक्तिगत आस्था नहीं, अपितु समाज के प्रति प्रत्यक्ष सेवा का उत्तरदायित्व है। इसी विचार को मूर्तरूप देने हेतु धाम परिसर में भव्य मंदिर, देशी गोवंश की रक्षा हेतु गौशाला, बच्चों के चरित्र निर्माण हेतु गुरुकुल, और पर्यावरण संतुलन हेतु ११,००० वृक्षों का रोपण किया जा रहा है।
          </p>
          <div className="pt-2 flex items-center space-x-4">
            <Link
              to="/donate"
              className="px-5 py-2.5 bg-[#5B2A1B] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-md hover:bg-[#3E1B10] transition-colors cursor-pointer inline-flex items-center space-x-1.5"
            >
              <Heart className="w-4 h-4 text-[#DFB25A] fill-current" />
              <span>सेवा से जुड़ें</span>
            </Link>
            <Link
              to="/seva"
              className="text-xs sm:text-sm font-bold text-[#5B2A1B] hover:underline"
            >
              सेवा सूची देखें →
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#FAF0E4] p-6 rounded-xl border border-[#E7D7C4] space-y-4">
          <div className="w-14 h-14 rounded-full bg-white p-2 mx-auto flex items-center justify-center shadow-xs">
            <img
              src="/ssd-logo-new.png"
              alt="Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://plain-apac-prod-public.komododecks.com/202610/24/DcMNjyETiSwyzv6bkik0/image.png';
              }}
            />
          </div>
          <h3 className="font-serif font-bold text-lg text-center text-[#5B2A1B]">
            संस्था के तीन प्रमुख स्तंभ
          </h3>
          <ul className="space-y-3 text-xs text-[#3E2B23]">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#265B33] flex-shrink-0 mt-0.5" />
              <span><strong>सेवा:</strong> गौ सेवा, अन्नदान, वृक्षारोपण एवं समाज के निर्बल वर्गों का संबल।</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#C49033] flex-shrink-0 mt-0.5" />
              <span><strong>संस्कार:</strong> गुरुकुल शिक्षा, नैतिक मूल्य, योग-निरोग और नशामुक्त समाज निर्माण।</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#5B2A1B] flex-shrink-0 mt-0.5" />
              <span><strong>सनातन:</strong> श्री राधा कृष्ण बिहारी जी मंदिर, दैनिक भोग-आरती एवं कथा संकीर्तन।</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Leadership & Trustees Section (Verified context only) */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="inline-block text-xs uppercase font-bold text-[#793A27] tracking-wider mb-2 sm:mb-2.5">
            मार्गदर्शन एवं व्यवस्था
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal pt-1">
            न्यास एवं प्रशासनिक नेतृत्व
          </h2>
          <p className="text-xs text-stone-600">
            आधिकारिक न्यास सूचना एवं सेवा व्यवस्थापन
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {siteConfig.leadership.map((person, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E7D7C4] shadow-xs hover:shadow-md hover:border-[#DFB25A]/60 transition-all space-y-4 text-center flex flex-col items-center justify-between"
            >
              <div className="space-y-3.5 flex flex-col items-center w-full">
                {/* Profile Picture */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-[#DFB25A] via-[#E7D7C4] to-[#DFB25A] shadow-md relative overflow-hidden bg-white">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-top rounded-full bg-white"
                      loading="eager"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (person.remoteImage && target.src !== person.remoteImage) {
                          target.src = person.remoteImage;
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-[#FAF0E4] text-[#5B2A1B] flex items-center justify-center font-serif font-bold text-2xl">
                      {person.name[0]}
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="inline-block text-[11px] sm:text-xs text-[#793A27] bg-[#FAF0E4] border border-[#DFB25A]/40 font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                    {person.role}
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#5B2A1B] leading-normal pt-1">
                    {person.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans pt-2 border-t border-[#E7D7C4]/60 w-full">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Temple Architecture & Masterplan Showcase */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7D7C4] shadow-xs space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block text-xs uppercase font-bold text-[#793A27] tracking-wider mb-2 sm:mb-3">
            पावन संकुल संरचना
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal pt-1">
            श्री श्री राधा कृष्ण बिहारी जी मंदिर एवं मास्टरप्लान
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            १००' x २५०' (२५,००० वर्ग फीट) के विस्तीर्ण भूखंड पर नागर शैली में आकार ले रहा भव्य आध्यात्मिक व सेवा संकुल
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="rounded-xl overflow-hidden border border-[#E7D7C4] shadow-sm bg-stone-100 group">
            <img
              src="/1.png"
              alt="श्री श्री राधा कृष्ण बिहारी जी मंदिर स्थापत्य"
              className="w-full h-64 sm:h-72 object-cover group-hover:scale-102 transition-transform duration-300"
            />
            <div className="p-3 bg-[#FAF7F2] text-xs font-semibold text-[#5B2A1B] text-center border-t border-[#E7D7C4]">
              मुख्य मंदिर अग्र भाग, शिखर एवं नक्षत्र फव्वारा (नागर शैली)
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#E7D7C4] shadow-sm bg-stone-100 group">
            <img
              src="/Temple Masterplan.png"
              alt="आधिकारिक वास्तु मास्टरप्लान"
              className="w-full h-64 sm:h-72 object-contain bg-white p-2 group-hover:scale-102 transition-transform duration-300"
            />
            <div className="p-3 bg-[#FAF7F2] text-xs font-semibold text-[#5B2A1B] text-center border-t border-[#E7D7C4]">
              २५,००० वर्ग फीट का आधिकारिक वास्तु मास्टरप्लान (100' x 250')
            </div>
          </div>
        </div>

        <div className="text-center pt-2">
          <Link
            to="/temple"
            className="px-6 py-2.5 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-semibold text-xs sm:text-sm rounded-md transition-colors cursor-pointer inline-flex items-center space-x-1.5"
          >
            <span>संपूर्ण मंदिर स्थापत्य एवं दीर्घा देखें</span>
            <ArrowRight className="w-4 h-4 text-[#DFB25A]" />
          </Link>
        </div>
      </div>

      {/* Location & Contact CTA Card */}
      <div className="bg-[#5B2A1B] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold text-[#FAF7F2]">
            धाम पधारने एवं सेवा से जुड़ने हेतु संपर्क करें
          </h3>
          <p className="text-xs text-[#DFB25A]">
            {siteConfig.address.hindiFull}
          </p>
        </div>
        <Link
          to="/contact"
          className="px-6 py-3 bg-[#DFB25A] text-[#3E1B10] font-bold text-xs sm:text-sm rounded-md hover:bg-[#C49033] transition-colors cursor-pointer inline-block"
        >
          संपर्क पृष्ठ पर जाएं →
        </Link>
      </div>
    </div>
  );
};
