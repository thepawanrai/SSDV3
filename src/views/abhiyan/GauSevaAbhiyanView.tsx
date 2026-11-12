import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteData';
import { ShieldCheck, ArrowRight, CheckCircle2, Heart, Copy, Phone, MapPin } from 'lucide-react';

interface GauSevaAbhiyanViewProps {
  onOpenDonate: (sevaId?: string, amount?: number) => void;
}

export const GauSevaAbhiyanView: React.FC<GauSevaAbhiyanViewProps> = ({ onOpenDonate }) => {
  const gauTiers = [
    {
      id: 'gau-aahar-one-day',
      title: 'एक गाय का एक दिन का आहार',
      amount: 100,
      description: 'हरा चारा, भूसा, चोकर एवं शुद्ध जल की व्यवस्था।',
      popular: false,
    },
    {
      id: 'gau-seva-week',
      title: 'साप्ताहिक गौ ग्रास सेवा',
      amount: 700,
      description: 'सप्ताह भर के लिए गोवंश के पौष्टिक आहार एवं खनिज मिश्रण।',
      popular: false,
    },
    {
      id: 'gau-mata-monthly',
      title: 'एक गाय का मासिक संपूर्ण पोषण',
      amount: 2100,
      description: 'महीने भर का चारा, दलिया, गुड़, खल एवं नियमित पशु-चिकित्सा।',
      popular: true,
    },
    {
      id: 'gau-chikitsa-aushadh',
      title: 'वृद्ध व निराश्रित गौ चिकित्सा कोष',
      amount: 5100,
      description: 'चोटिल, वृद्ध एवं बीमार गोवंश के लिए आवश्यक दवाएँ व चिकित्सक परामर्श।',
      popular: false,
    },
    {
      id: 'gau-shala-shed-nirman',
      title: 'गौशाला शेड व आवास निर्माण सेवा',
      amount: 11000,
      description: 'गोवंश के लिए पक्के हवादार शेड, फर्श, जल कुंड व सुरक्षा जाली का निर्माण।',
      popular: false,
    },
    {
      id: 'aajeevan-gau-sanrakshan',
      title: 'आजीवन गौ संरक्षण संकल्प',
      amount: 51000,
      description: 'गोवंश के आजीवन संरक्षण, पोषण एवं संवर्धन हेतु स्थायी सेवा सहयोग।',
      popular: false,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1C0B06] via-[#2F140A] to-[#1C0B06] text-[#FAF7F2] py-14 sm:py-20 border-b border-[#DFB25A]/30 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
          <img
            src="/2.png"
            alt="सत्य सनातन धाम गौशाला"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-[#DFB25A]/20 border border-[#DFB25A]/40 text-xs font-bold text-[#FEF08A] tracking-wider uppercase">
            <span>महाअभियान • प्रकल्प २</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            गौ सेवा महाअभियान
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-[#DFB25A] font-medium max-w-3xl mx-auto">
            "गावो विश्वस्य मातरः" — समस्त जगत की जननी सुरभित देशी गोवंश का संरक्षण एवं संवर्धन
          </p>

          <p className="max-w-3xl mx-auto text-xs sm:text-sm lg:text-base text-stone-300 leading-relaxed font-sans">
            सत्य सनातन धाम, ग्राम – पासुन (मौदहा, हमीरपुर) में निराश्रित, वृद्ध एवं देशी गोवंश के लिए
            विशाल सुरभि गौशाला का विस्तार किया जा रहा है। यहाँ गोवंश को मात्र पशु नहीं, अपितु माता
            के रूप में नित्य सेवा, हरा चारा, चिकित्सा व प्रेम प्राप्त होता है।
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenDonate('gau-mata-seva', 2100)}
              className="px-7 py-3 bg-[#DFB25A] hover:bg-[#C49033] text-[#3E1B10] font-bold text-sm sm:text-base rounded-md transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              गौ सेवा समर्पित करें
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

      {/* 2. STATS & KEY OBJECTIVES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B2A1B]">100%</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">देशी गोवंश संरक्षण</p>
            <p className="text-[11px] text-stone-500 mt-0.5">गिर, साहीवाल व थारपारकर संवर्धन</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#265B33]">365 दिन</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">नित्य हरा चारा व आहार</p>
            <p className="text-[11px] text-stone-500 mt-0.5">प्राकृतिक पौष्टिक पोषण</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B2A1B]">24x7</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">चिकित्सीय देखरेख</p>
            <p className="text-[11px] text-stone-500 mt-0.5">घायल व वृद्ध गौ प्राथमिक उपचार</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#265B33]">पंचगव्य</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">प्राकृतिक कृषि संवर्धन</p>
            <p className="text-[11px] text-stone-500 mt-0.5">जीवामृत व जैविक खाद निर्माण</p>
          </div>
        </div>
      </section>

      {/* 3. DETAILED NARRATIVE & SPIRITUAL REASON */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#DFB25A]/40 shadow-xs space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B]">
            गौ सेवा महाअभियान का लक्ष्य एवं संकल्प
          </h2>
          <div className="prose text-stone-700 text-sm sm:text-base leading-relaxed space-y-3 font-sans">
            <p>
              सनातन धर्म में गाय को तैंतीस कोटि देवताओं का वास माना गया है। गौ माता केवल दूध देने वाला पशु
              नहीं, अपितु भारतीय ग्रामीण अर्थव्यवस्था, आरोग्य, पर्यावरण और आध्यात्मिक शांति का आधार है।
            </p>
            <p>
              आज आधुनिक युग में जब अनेक गायें सड़कों पर प्लास्टिक व कूड़ा खाने को विवश हैं, सत्य सनातन धाम
              ने यह बीड़ा उठाया है कि हमीरपुर जनपद एवं बुंदेलखंड अंचल में एक आदर्श सुरभि गौशाला का संचालन
              करेंगे जहाँ वृद्ध, अशक्त और निराश्रित गायों को मातृत्व सम्मान एवं आजीवन आश्रय प्राप्त हो।
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
            गौ सेवा समर्पण विकल्प
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            अपने जन्मदिन, वैवाहिक वर्षगांठ अथवा पूर्वजों की पावन स्मृति में गौ ग्रास सेवा समर्पित करें
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gauTiers.map((tier) => (
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
                <div className="text-2xl font-serif font-bold text-[#265B33]">
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
            * बैंक अंतरण (NEFT / RTGS / IMPS) के उपरांत कृपया पावती विवरण संस्था के व्हाट्सएप (+91 94531 60074) पर प्रेषित करें।
          </p>
        </div>
      </section>
    </div>
  );
};
