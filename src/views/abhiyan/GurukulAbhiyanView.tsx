import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteData';
import { ShieldCheck, ArrowRight, CheckCircle2, Heart, BookOpen } from 'lucide-react';

interface GurukulAbhiyanViewProps {
  onOpenDonate: (sevaId?: string, amount?: number) => void;
}

export const GurukulAbhiyanView: React.FC<GurukulAbhiyanViewProps> = ({ onOpenDonate }) => {
  const gurukulTiers = [
    {
      id: 'gurukul-vidyarthi-books',
      title: '१ ब्रह्मचारी विद्यार्थी पाठ्यसामग्री व वस्त्र',
      amount: 1100,
      description: 'धोती, कुर्ता, वैदिक पुस्तकें, लेखन सामग्री एवं आसन व्यवस्था।',
      popular: false,
    },
    {
      id: 'gurukul-vidyarthi-month',
      title: '१ विद्यार्थी का मासिक संपूर्ण शिक्षण व आवास',
      amount: 2500,
      description: 'वेद-वेदांग, संस्कृत, आधुनिक गणित एवं निःशुल्क आवास-भोजन।',
      popular: true,
    },
    {
      id: 'gurukul-pustakalaya-seva',
      title: 'गुरुकुल पुस्तकालय एवं ग्रंथ संरक्षण सेवा',
      amount: 5100,
      description: 'वेद, उपनिषद, दर्शन, रामायण व विज्ञान ग्रंथों का संकलन।',
      popular: false,
    },
    {
      id: 'gurukul-acharyashri-seva',
      title: 'आचार्य एवं अध्यापक मानदेय सेवा',
      amount: 11000,
      description: 'विद्वान आचार्यों का ससम्मान मानदेय एवं शैक्षिक प्रबंधन कोष।',
      popular: false,
    },
    {
      id: 'gurukul-vidyarthi-annual',
      title: '१ विद्यार्थी का संपूर्ण वार्षिक विद्यादान संकल्प',
      amount: 31000,
      description: 'वर्ष भर का संपूर्ण शिक्षण, भोजन, आवास, स्वास्थ्य व संस्कार।',
      popular: false,
    },
    {
      id: 'gurukul-kaksha-nirman',
      title: 'अध्ययन कक्ष (स्मार्ट गुरुकुल क्लासरूम) निर्माण',
      amount: 101000,
      description: 'वैदिक वातावरण युक्त पक्के शिक्षण कक्ष, पंखे, लाइट व कंप्यूटर डेस्क।',
      popular: false,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1C0B06] via-[#2F140A] to-[#1C0B06] text-[#FAF7F2] py-14 sm:py-20 border-b border-[#DFB25A]/30 overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-[#DFB25A]/20 border border-[#DFB25A]/40 text-xs font-bold text-[#FEF08A] tracking-wider uppercase">
            <span>महाअभियान • प्रकल्प ५</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            गुरुकुल अभियान
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-[#DFB25A] font-medium max-w-3xl mx-auto">
            "सा विद्या या विमुक्तये" — वैदिक संस्कार, प्राचीन ज्ञान एवं आधुनिक विज्ञान का दिव्य समन्वय
          </p>

          <p className="max-w-3xl mx-auto text-xs sm:text-sm lg:text-base text-stone-300 leading-relaxed font-sans">
            सत्य सनातन धाम, ग्राम – पासुन (हमीरपुर) में आगामी पीढ़ी के सर्वांगीण निर्माण हेतु आवासीय
            गुरुकुल की स्थापना की जा रही है। यहाँ ग्रामीण व निर्धन पृष्ठभूमि के बच्चों को निःशुल्क
            वेद, संस्कृत, योग, नीतिशास्त्र तथा साथ ही आधुनिक गणित, विज्ञान व कंप्यूटर की गुणवत्तापूर्ण
            शिक्षा प्रदान की जाएगी।
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenDonate('gurukul-expansion-seva', 2500)}
              className="px-7 py-3 bg-[#DFB25A] hover:bg-[#C49033] text-[#3E1B10] font-bold text-sm sm:text-base rounded-md transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              विद्यादान सेवा समर्पित करें
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

      {/* 2. CORE FEATURES STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B2A1B]">वेद व उपनिषद</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">प्राचीन भारतीय ज्ञान</p>
            <p className="text-[11px] text-stone-500 mt-0.5">संस्कृत, व्याकरण व छंद शास्त्र</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#265B33]">आधुनिक विज्ञान</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">गणित व कंप्यूटर साक्षरता</p>
            <p className="text-[11px] text-stone-500 mt-0.5">समय की माँग के अनुरूप पाठ्यक्रम</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B2A1B]">१००% निःशुल्क</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">शिक्षा, आवास व सात्विक भोजन</p>
            <p className="text-[11px] text-stone-500 mt-0.5">ग्रामीण बच्चों हेतु पूर्ण व्यवस्था</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#265B33]">चरित्र निर्माण</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">योग, ध्यान एवं राष्ट्रभक्ति</p>
            <p className="text-[11px] text-stone-500 mt-0.5">आदर्श नागरिक का निर्माण</p>
          </div>
        </div>
      </section>

      {/* 3. MISSION NARRATIVE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#DFB25A]/40 shadow-xs space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B]">
            गुरुकुल अभियान की आवश्यकता एवं दृष्टिकोण
          </h2>
          <div className="prose text-stone-700 text-sm sm:text-base leading-relaxed space-y-3 font-sans">
            <p>
              वर्तमान मैकाले शिक्षा पद्धति ने बच्चों को केवल आजीविका के पीछे भागना सिखाया है, परंतु
              चरित्र, संस्कार, माता-पिता का सम्मान एवं आत्म-गौरव कहीं पीछे छूट गया है।
            </p>
            <p>
              सत्य सनातन धाम का यह गुरुकुल अभियान भारत के उस स्वर्णिम काल को पुनः जीवंत करने का प्रयास है,
              जहाँ ऋषि-आश्रमों में राजा और निर्धन का पुत्र एक साथ बैठकर संस्कार, योग, धनुर्विद्या एवं शास्त्र
              का अध्ययन करते थे। आपका एक छोटा सा विद्यादान किसी होनहार बालक का जीवन सदैव के लिए बदल सकता है।
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
            विद्यादान सेवा समर्पण विकल्प
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            "विद्यादानं महत् पुण्यम्" — गुरुकुल के विस्तार एवं विद्यार्थियों के अध्ययन में सहभागी बनें
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gurukulTiers.map((tier) => (
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
            * विद्यादान सेवा में योगदान देने वाले सभी दानदाताओं को गुरुकुल की त्रैमासिक प्रगति रिपोर्ट एवं वार्षिक उत्सव का आमंत्रण प्रेषित किया जाता है।
          </p>
        </div>
      </section>
    </div>
  );
};
