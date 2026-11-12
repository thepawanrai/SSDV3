import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteData';
import { ShieldCheck, ArrowRight, CheckCircle2, Heart, MapPin, Eye } from 'lucide-react';

interface MandirNirmanAbhiyanViewProps {
  onOpenDonate: (sevaId?: string, amount?: number) => void;
  onOpenLightbox?: (src: string, alt: string, title?: string, desc?: string) => void;
}

export const MandirNirmanAbhiyanView: React.FC<MandirNirmanAbhiyanViewProps> = ({
  onOpenDonate,
  onOpenLightbox,
}) => {
  const mandirTiers = [
    {
      id: 'mandir-shila-1',
      title: 'एक पावन शिला समर्पण (Shila Seva)',
      amount: 2100,
      description: 'गर्भगृह एवं मंडप के आधार हेतु बंसी पहाड़पुर सैंडस्टोन शिला अर्पण।',
      popular: false,
    },
    {
      id: 'mandir-sqft-1',
      title: '१ वर्ग फीट मंदिर निर्माण सेवा',
      amount: 5100,
      description: 'स्तंभ, परिक्रमा पथ व मंडप के १ वर्ग फीट का पूर्ण पाषाण निर्माण।',
      popular: true,
    },
    {
      id: 'mandir-sqft-2',
      title: '२ वर्ग फीट मंदिर निर्माण सेवा',
      amount: 11000,
      description: 'कलात्मक नक्काशीदार शिखर व स्तंभ निर्माण में पावन सहभागिता।',
      popular: false,
    },
    {
      id: 'mandir-stambh-seva',
      title: 'दिव्य नक्काशीदार स्तंभ सेवा (Carved Pillar)',
      amount: 51000,
      description: '१०८ भव्य नक्काशीदार स्तंभों में से एक स्तंभ के निर्माण में नाम समर्पण।',
      popular: false,
    },
    {
      id: 'mandir-mandap-seva',
      title: 'सभामंडप एवं नक्षत्र फव्वारा सेवा',
      amount: 101000,
      description: 'अष्टकोणीय नक्षत्र फव्वारा एवं विशाल परिक्रमा प्रांगण निर्माण में सहयोग।',
      popular: false,
    },
    {
      id: 'garbhagriha-sanrakshak',
      title: 'गर्भगृह मुख्य संरक्षक सेवा',
      amount: 251000,
      description: 'श्री श्री राधा कृष्ण बिहारी जी के मुख्य गर्भगृह निर्माण के स्थायी संरक्षक।',
      popular: false,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1C0B06] via-[#2F140A] to-[#1C0B06] text-[#FAF7F2] py-14 sm:py-20 border-b border-[#DFB25A]/30 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
          <img
            src="/1.png"
            alt="श्री श्री राधा कृष्ण बिहारी जी मंदिर"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-[#DFB25A]/20 border border-[#DFB25A]/40 text-xs font-bold text-[#FEF08A] tracking-wider uppercase">
            <span>महाअभियान • प्रकल्प ३</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            मंदिर निर्माण अभियान
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-[#DFB25A] font-medium max-w-3xl mx-auto">
            श्री श्री राधा कृष्ण बिहारी जी का २५,००० वर्ग फीट का भव्य नागर शैली धाम
          </p>

          <p className="max-w-3xl mx-auto text-xs sm:text-sm lg:text-base text-stone-300 leading-relaxed font-sans">
            सत्य सनातन धाम, ग्राम – पासुन, मौदहा (जनपद – हमीरपुर, उ.प्र.) में राजस्थान के ऐतिहासिक
            बंसी पहाड़पुर लाल बलुआ पत्थर से भव्य मंदिर का निर्माण तीव्रता से अग्रसर है। इस पावन अधिष्ठान
            में शिला, स्तंभ एवं वर्ग फीट सेवा समर्पित कर अपना नाम चिरस्थाई करें।
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenDonate('mandir-nirman-seva', 5100)}
              className="px-7 py-3 bg-[#DFB25A] hover:bg-[#C49033] text-[#3E1B10] font-bold text-sm sm:text-base rounded-md transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              मंदिर निर्माण सेवा समर्पित करें
            </button>
            <Link
              to="/temple"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-[#FAF7F2] font-semibold text-sm rounded-md transition-all border border-white/20"
            >
              मंदिर वास्तु व मास्टरप्लान देखें
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B2A1B]">२५,०००</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">वर्ग फीट विस्तीर्ण संकुल</p>
            <p className="text-[11px] text-stone-500 mt-0.5">१००' x २५०' भूखंड आयाम</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B2A1B]">बंसी पहाड़पुर</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">लाल बलुआ पत्थर</p>
            <p className="text-[11px] text-stone-500 mt-0.5">हजारों वर्षों तक अमिट स्थापत्य</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B2A1B]">नागर शैली</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">परंपरागत उत्तर भारतीय शिखर</p>
            <p className="text-[11px] text-stone-500 mt-0.5">वैदिक वास्तु शास्त्रानुसार निर्माण</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#E7D7C4] text-center shadow-xs">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B2A1B]">अष्टकोणीय</span>
            <p className="text-xs font-semibold text-[#793A27] mt-1">नक्षत्र फव्वारा व दीप स्तंभ</p>
            <p className="text-[11px] text-stone-500 mt-0.5">दिव्य प्रांगण एवं परिक्रमा पथ</p>
          </div>
        </div>
      </section>

      {/* 3. VISUAL ELEVATION GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#5B2A1B] text-center">
          मंदिर स्थापत्य एवं वास्तविक रूपरेखा
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden border border-[#E7D7C4] shadow-xs group bg-stone-100">
            <img
              src="/1.png"
              alt="मुख्य मंदिर सम्मुख दर्शन"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
              onClick={() => onOpenLightbox && onOpenLightbox('/1.png', 'मुख्य मंदिर सम्मुख दर्शन', 'श्री श्री राधा कृष्ण बिहारी जी मंदिर')}
            />
            <div className="p-3 text-center text-xs font-semibold text-[#5B2A1B] bg-white">
              मुख्य मंदिर सम्मुख शिखर दर्शन
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#E7D7C4] shadow-xs group bg-stone-100">
            <img
              src="/2.png"
              alt="परिसर एवं उद्यान विहंगम दृश्य"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
              onClick={() => onOpenLightbox && onOpenLightbox('/2.png', 'परिसर एवं उद्यान विहंगम दृश्य', '२५,००० वर्ग फीट संकुल')}
            />
            <div className="p-3 text-center text-xs font-semibold text-[#5B2A1B] bg-white">
              परिसर एवं उद्यान विहंगम रूप
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#E7D7C4] shadow-xs group bg-stone-100">
            <img
              src="/Temple Masterplan.png"
              alt="मास्टरप्लान एवं वास्तु विन्यास"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
              onClick={() => onOpenLightbox && onOpenLightbox('/Temple Masterplan.png', 'मास्टरप्लान एवं वास्तु विन्यास', '१०० x २५० फीट लेआउट')}
            />
            <div className="p-3 text-center text-xs font-semibold text-[#5B2A1B] bg-white">
              मास्टरप्लान एवं वास्तु विन्यास
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
            शिला एवं वर्ग फीट समर्पण विकल्प
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            अपने पूर्वजों एवं परिजनों के नाम पर इस युगांतकारी मंदिर निर्माण में शिला सहयोग करें
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mandirTiers.map((tier) => (
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
            * शिला अथवा वर्ग फीट सेवा के उपरांत यजमान का नाम मंदिर के पाषाण अभिलेख पट्टिका में अंकित कराने हेतु कृपया विवरण संस्था को व्हाट्सएप (+91 94531 60074) पर अवश्य भेजें।
          </p>
        </div>
      </section>
    </div>
  );
};
