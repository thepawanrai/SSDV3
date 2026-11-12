import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteData';
import { ShieldCheck, ArrowRight, CheckCircle2, Heart } from 'lucide-react';

interface AnnadaanAbhiyanViewProps {
  onOpenDonate: (sevaId?: string, amount?: number) => void;
}

export const AnnadaanAbhiyanView: React.FC<AnnadaanAbhiyanViewProps> = ({ onOpenDonate }) => {
  const annaTiers = [
    {
      id: 'anna-daan-11-devotees',
      title: '११ भक्तों का सात्विक प्रसादम',
      amount: 501,
      description: 'धाम में आने वाले ११ दर्शनार्थियों हेतु पूर्ण महाप्रसाद की सेवा।',
      popular: false,
    },
    {
      id: 'anna-daan-25-devotees',
      title: '२५ भक्तों का सात्विक प्रसादम',
      amount: 1100,
      description: 'दाल, चावल, रोटी, मौसमी सब्जी, खीर/हलवा प्रसाद वितरण।',
      popular: false,
    },
    {
      id: 'anna-daan-51-devotees',
      title: '५१ भक्तों का सात्विक प्रसादम',
      amount: 2500,
      description: 'संत-साधु, तीर्थयात्री एवं निर्धन बंधुओं को पौष्टिक आहार।',
      popular: true,
    },
    {
      id: 'anna-daan-101-devotees',
      title: '१०१ भक्तों का एक समय का संपूर्ण भंडारा',
      amount: 5100,
      description: 'पावन एकादशी, पूर्णिमा या पर्वों पर १००+ भक्तों का विशेष भंडारा।',
      popular: false,
    },
    {
      id: 'anna-daan-full-day',
      title: 'एक संपूर्ण दिवस का अक्षय भंडारा सेवा',
      amount: 11000,
      description: 'प्रातः से सायंकाल तक अखंड अन्नक्षेत्र संचालन में पावन सहयोग।',
      popular: false,
    },
    {
      id: 'sadhu-bhandara-full',
      title: 'साधु सेवा एवं संत भंडारा (पूर्ण दिवस)',
      amount: 21000,
      description: 'धाम पधारने वाले ५१+ तपस्वी साधु-महात्माओं का विशिष्ट सत्कार व प्रसादम।',
      popular: false,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1C0B06] via-[#2F140A] to-[#1C0B06] text-[#FAF7F2] py-14 sm:py-20 border-b border-[#DFB25A]/30 overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-[#DFB25A]/20 border border-[#DFB25A]/40 text-xs font-bold text-[#FEF08A] tracking-wider uppercase">
            <span>महाअभियान • प्रकल्प ४</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            अन्नदान महाअभियान
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-[#DFB25A] font-medium max-w-3xl mx-auto">
            "अन्नं परब्रह्म स्वरूपम्" — कोई भी भूखा न सोए, हर आगंतुक को मिले आदरपूर्वक प्रसाद
          </p>

          <p className="max-w-3xl mx-auto text-xs sm:text-sm lg:text-base text-stone-300 leading-relaxed font-sans">
            सत्य सनातन धाम के अन्नक्षेत्र में प्रतिदिन आने वाले तीर्थयात्रियों, साधु-संतों, ग्रामीणों
            तथा निर्धन परिवारों के लिए शुद्ध देसी घी एवं सात्विक मसालों से निर्मित महाप्रसादम का
            निःशुल्क वितरण किया जाता है। अन्नदान को सनातन संस्कृति में महादान कहा गया है।
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenDonate('anna-daan-seva', 2500)}
              className="px-7 py-3 bg-[#DFB25A] hover:bg-[#C49033] text-[#3E1B10] font-bold text-sm sm:text-base rounded-md transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              अन्नदान समर्पित करें
            </button>
            <Link
              to="/mahabhiyan"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-[#FAF7F2] font-semibold text-sm rounded-md transition-all border border-white/20"
            >
              ← सभी ६ महाअभियान देखें
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS & IMPACT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B2A1B]">अक्षय पात्र</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">अखंड अन्नक्षेत्र</p>
            <p className="text-[11px] text-stone-500 mt-0.5">नित्य प्रसादम व्यवस्था</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#265B33]">१००% सात्विक</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">शुद्ध देसी आहार</p>
            <p className="text-[11px] text-stone-500 mt-0.5">स्वच्छता एवं मर्यादा सहित</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B2A1B]">साधु सेवा</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">संत सत्कार संकल्प</p>
            <p className="text-[11px] text-stone-500 mt-0.5">आदरपूर्वक भोजन अर्पण</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#265B33]">पर्व भंडारा</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">जन्माष्टमी, नवरात्रि व एकादशी</p>
            <p className="text-[11px] text-stone-500 mt-0.5">हजारों भक्तों का प्रसादम</p>
          </div>
        </div>
      </section>

      {/* 3. SPIRITUAL SIGNIFICANCE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#DFB25A]/40 shadow-xs space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B]">
            शास्त्रों में अन्नदान की महिमा
          </h2>
          <div className="prose text-stone-700 text-sm sm:text-base leading-relaxed space-y-3 font-sans">
            <blockquote className="p-4 bg-white rounded-xl border-l-4 border-[#DFB25A] italic text-stone-800 font-serif text-sm">
              "अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसंभवः । यज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः ॥"
              <span className="block not-italic text-xs text-stone-500 mt-1 font-sans">
                — श्रीमद्भगवद्गीता (अध्याय ३, श्लोक १४)
              </span>
            </blockquote>
            <p>
              अन्न से ही समस्त प्राणियों का जीवन चलता है। जब कोई भक्त भूखे या अतिथि को प्रेमपूर्वक अन्न कराता है,
              तो भगवान श्री कृष्ण स्वयं तृप्त होते हैं। सत्य सनातन धाम में अन्नदान केवल भोजन देना नहीं,
              अपितु भगवान के श्री चरणों में भोग लगाकर उसे दिव्य महाप्रसाद रूप में वितरित करना है।
            </p>
          </div>
        </div>
      </section>

      {/* 4. SEVA TIERS (CONTRIBUTION OPTIONS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#793A27] mb-2 sm:mb-2.5">
            पुण्य सहभागिता
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal pt-1">
            अन्नदान सेवा समर्पण विकल्प
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            अपने जन्मदिन, पुण्यतिथि, पितृ पक्ष अथवा किसी भी मंगल अवसर पर अन्नदान सेवा समर्पित करें
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {annaTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-6 flex flex-col justify-between border transition-all ${
                tier.popular
                  ? 'bg-white border-[#DFB25A] shadow-md ring-2 ring-[#DFB25A]/40'
                  : 'bg-white border-[#E7D7C4] shadow-xs hover:shadow-md'
              }`}
            >
              <div className="space-y-3">
                {tier.popular && (
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] text-[11px] font-bold uppercase tracking-wide">
                    सर्वाधिक समर्पित सेवा
                  </span>
                )}
                <h3 className="font-serif text-lg font-bold text-[#5B2A1B]">{tier.title}</h3>
                <div className="text-2xl font-serif font-bold text-[#5B2A1B]">
                  ₹{tier.amount.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{tier.description}</p>
              </div>

              <div className="pt-5">
                <button
                  onClick={() => onOpenDonate(tier.id, tier.amount)}
                  className="w-full py-2.5 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-bold rounded-md transition-colors shadow-xs cursor-pointer text-center"
                >
                  सहयोग करें (₹{tier.amount.toLocaleString('en-IN')})
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DIRECT BANK TRANSFER & CONTACT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF0E4] rounded-2xl p-6 sm:p-8 border border-[#DFB25A]/60 space-y-4">
          <div className="flex items-center space-x-2 text-[#5B2A1B] font-serif font-bold text-lg">
            <ShieldCheck className="w-5 h-5 text-[#265B33]" />
            <span>अधिकृत संस्था बैंक खाता विवरण (Official Trust Account)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white rounded-lg border border-[#E7D7C4]">
              <span className="text-stone-500 block">खाता धारक (Account Name):</span>
              <strong className="text-[#5B2A1B] text-sm">{siteConfig.payment.accountHolder}</strong>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#E7D7C4]">
              <span className="text-stone-500 block">बैंक (Bank):</span>
              <strong className="text-[#5B2A1B] text-sm">{siteConfig.payment.bank}</strong>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#E7D7C4]">
              <span className="text-stone-500 block">खाता संख्या (Account Number):</span>
              <strong className="text-[#5B2A1B] text-sm font-mono">{siteConfig.payment.accountNumber}</strong>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#E7D7C4]">
              <span className="text-stone-500 block">IFSC कोड:</span>
              <strong className="text-[#5B2A1B] text-sm font-mono">{siteConfig.payment.ifsc}</strong>
            </div>
          </div>
          <p className="text-[11px] text-stone-600 leading-relaxed">
            * अन्नदान के उपरांत यजमान के नाम पर नित्य प्रार्थना व संकल्प किया जाता है। कृपया योगदान के उपरांत संस्था को व्हाट्सएप (+91 94531 60074) पर सूचित करें।
          </p>
        </div>
      </section>
    </div>
  );
};
