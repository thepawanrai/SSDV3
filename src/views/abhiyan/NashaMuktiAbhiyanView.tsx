import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteData';
import { ShieldCheck, ArrowRight, CheckCircle2, Heart, Phone } from 'lucide-react';

interface NashaMuktiAbhiyanViewProps {
  onOpenDonate: (sevaId?: string, amount?: number) => void;
}

export const NashaMuktiAbhiyanView: React.FC<NashaMuktiAbhiyanViewProps> = ({ onOpenDonate }) => {
  const nashaTiers = [
    {
      id: 'nasha-mukti-patrak-prachar',
      title: 'जन-जागरण साहित्य व संकल्प पत्रक',
      amount: 501,
      description: 'ग्रामीण क्षेत्रों में नशा मुक्ति पत्रक, शपथ पत्र एवं जागरूकता सामग्री का वितरण।',
      popular: false,
    },
    {
      id: 'nasha-mukti-counseling-camp',
      title: '१ ग्रामीण नशा मुक्ति परामर्श शिविर',
      amount: 2100,
      description: 'गाँव में निःशुल्क स्वास्थ्य परीक्षण, मनोवैज्ञानिक काउंसलिंग एवं योग मार्गदर्शन शिविर।',
      popular: true,
    },
    {
      id: 'nasha-mukti-youth-sports',
      title: 'युवा ऊर्जा दिशा-परिवर्तन एवं खेल सामग्री',
      amount: 5100,
      description: 'ग्रामीण युवाओं को नशे से हटाकर वॉलीबॉल, योग, अखाड़ा एवं खेलकूद से जोड़ना।',
      popular: false,
    },
    {
      id: 'nasha-mukti-parivar-punarvas',
      title: 'पीड़ित परिवार पुनर्वास एवं औषधीय सहयोग',
      amount: 11000,
      description: 'गंभीर रूप से प्रभावित युवाओं का आयुर्वेदिक नशामुक्ति उपचार व पारिवारिक संबल।',
      popular: false,
    },
    {
      id: 'nasha-mukti-model-village',
      title: 'एक संपूर्ण ग्राम नशा-मुक्त संकल्प अभियान',
      amount: 25000,
      description: 'एक चयनित गाँव में सघन ३-मासिक अभियान चलाकर गाँव को व्यसनमुक्त बनाने का लक्ष्य।',
      popular: false,
    },
    {
      id: 'nasha-mukti-kendra-nirman',
      title: 'धाम नशा मुक्ति व संस्कार परामर्श केंद्र सेवा',
      amount: 51000,
      description: 'सत्य सनातन धाम में स्थायी परामर्श केंद्र, योगशाला एवं हेल्पडेस्क की स्थापना।',
      popular: false,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1C0B06] via-[#2F140A] to-[#1C0B06] text-[#FAF7F2] py-14 sm:py-20 border-b border-[#DFB25A]/30 overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-[#DFB25A]/20 border border-[#DFB25A]/40 text-xs font-bold text-[#FEF08A] tracking-wider uppercase">
            <span>महाअभियान • प्रकल्प ६</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            नशा मुक्ति अभियान
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-[#DFB25A] font-medium max-w-3xl mx-auto">
            "स्वस्थ युवा, सशक्त समाज, संस्कारित भारत" — व्यसन के अंधकार से मुक्ति का पावन महासंकल्प
          </p>

          <p className="max-w-3xl mx-auto text-xs sm:text-sm lg:text-base text-stone-300 leading-relaxed font-sans">
            आज भारत का ग्रामीण अंचल एवं युवा पीढ़ी बीड़ी, तंबाकू, शराब एवं अन्य रासायनिक व्यसनों की चपेट
            में आकर अपने स्वास्थ्य, धन और पारिवारिक सुख को नष्ट कर रही है। सत्य सनातन धाम ने हमीरपुर
            एवं बुंदेलखंड के गाँवों में सघन नशा मुक्ति महाअभियान प्रारंभ किया है।
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenDonate('nasha-mukti-counseling-camp', 2100)}
              className="px-7 py-3 bg-[#DFB25A] hover:bg-[#C49033] text-[#3E1B10] font-bold text-sm sm:text-base rounded-md transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              नशा मुक्ति अभियान में सहयोग करें
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

      {/* 2. STATS & KEY PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B2A1B]">ग्राम पंचायत स्तर</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">प्रत्यक्ष संपर्क शिविर</p>
            <p className="text-[11px] text-stone-500 mt-0.5">गाँव-गाँव में चौपाल व गोष्ठी</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#265B33]">योग व प्राणायाम</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">मानसिक शक्ति संवर्धन</p>
            <p className="text-[11px] text-stone-500 mt-0.5">इच्छाशक्ति को सुदृढ़ बनाना</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B2A1B]">गोपनीय परामर्श</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">निःशुल्क काउंसलिंग</p>
            <p className="text-[11px] text-stone-500 mt-0.5">पीड़ित युवाओं को नई दिशा</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#265B33]">पारिवारिक शांति</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">गृह क्लेश निवारण</p>
            <p className="text-[11px] text-stone-500 mt-0.5">माताओं-बहनों के चेहरे पर मुस्कान</p>
          </div>
        </div>
      </section>

      {/* 3. APPROACH & METHODOLOGY */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#DFB25A]/40 shadow-xs space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B]">
            अभियान की कार्यप्रणाली एवं त्रि-सूत्रीय रणनीति
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-white rounded-xl border border-[#E7D7C4] space-y-2">
              <span className="w-7 h-7 rounded-full bg-[#DFB25A] text-[#3E1B10] flex items-center justify-center font-bold text-xs">
                १
              </span>
              <h3 className="font-serif font-bold text-base text-[#5B2A1B]">जन-जागरण व शपथ</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                गाँव की चौपालों, विद्यालयों एवं मंदिरों में नशा के घातक दुष्प्रभावों पर दृश्य-श्रव्य प्रदर्शन एवं सामूहिक नशामुक्ति संकल्प।
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#E7D7C4] space-y-2">
              <span className="w-7 h-7 rounded-full bg-[#DFB25A] text-[#3E1B10] flex items-center justify-center font-bold text-xs">
                २
              </span>
              <h3 className="font-serif font-bold text-base text-[#5B2A1B]">आयुर्वेद व योग उपचार</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                देसी औषधियों (अजवाइन, सौंफ, तुलसी, अदरक आदि) और भस्त्रिका/कपालभाति प्राणायाम के माध्यम से व्यसन की तीव्र तलब को शांत करना।
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#E7D7C4] space-y-2">
              <span className="w-7 h-7 rounded-full bg-[#DFB25A] text-[#3E1B10] flex items-center justify-center font-bold text-xs">
                ३
              </span>
              <h3 className="font-serif font-bold text-base text-[#5B2A1B]">सार्थक दिशा (खेल व सेवा)</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                युवाओं को खाली समय में धाम की गौशाला, वृक्षारोपण एवं खेलकूद क्लबों से जोड़कर उनके जीवन को सार्थक लक्ष्य प्रदान करना।
              </p>
            </div>
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
            नशा मुक्ति अभियान सहयोग विकल्प
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            किसी परिवार को उजड़ने से बचाना और किसी युवा को नया जीवन देना सबसे बड़ा धर्म कार्य है
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nashaTiers.map((tier) => (
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
                    सर्वाधिक समर्थित शिविर
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
            * यदि आपके गाँव अथवा क्षेत्र में नशा मुक्ति परामर्श शिविर का आयोजन कराना चाहते हैं, तो कृपया संस्था की हेल्पलाइन (+91 94525 45662) पर सीधे संपर्क करें।
          </p>
        </div>
      </section>
    </div>
  );
};
